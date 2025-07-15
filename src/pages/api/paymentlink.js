// pages/api/initiate.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: 'Amount is required' });
  }

  try {
    const response = await fetch('http://89.116.20.169:3001/initiate-collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error forwarding request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
