// pages/api/my-new-api.js

export default async function handler(req, res) {
  try {
    const response = await fetch('http://89.116.20.169:3001/query-collection', {
      method: 'POST',  // or GET depending on the external API requirement
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed (Authorization, etc)
      },
      body: JSON.stringify(req.body)  // forward the incoming request body if needed
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from external API' });
    }

    const data = await response.json();

    // Return the data from external API
    res.status(200).json(data);
  } catch (error) {
    console.error('API call error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
