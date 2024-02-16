// pages/api/binput.js
  
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { inputValue } = req.body;
    res.status(200).json({ message: `You entered: ${inputValue}` });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}