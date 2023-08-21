export default async function loginUser(req: any, res: any) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const response = await fetch(`http://localhost:1337/api/auth/local`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                res.status(200).json({ token: data.jwt });
            } else {
                const errorMessage = data.message[0]?.messages[0]?.message || 'Login failed';
                res.status(data.statusCode || 500).json({ error: errorMessage });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
