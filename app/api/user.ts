export default async function getUserProfile(req: any, res: any) {
    if (req.method === 'GET') {
        const { token } = req.headers;

        try {
            const response = await fetch(`http://127.0.0.1:1337/users/me`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (response.ok) {
                res.status(200).json(data);
            } else {
                const errorMessage = data.message[0]?.messages[0]?.message || 'Unknown error';
                res.status(data.statusCode).json({ error: errorMessage });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
