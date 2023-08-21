export default async function registerUser(req: any, res: any) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        try {
            const response = await fetch(`http://127.0.0.1:1337/api/auth/local/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                res.status(200).json({ message: 'User registered successfully' });
            } else {
                const errorMessage = data.message[0]?.messages[0]?.message || 'Registration failed';
                res.status(data.statusCode || 500).json({ error: errorMessage });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
