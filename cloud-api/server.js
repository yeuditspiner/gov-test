const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.all('/', async (req, res) => {
  const textToAi = req.query.textToAi || req.body?.textToAi;
  const wordToCheck = req.query.wordToCheck || req.body?.wordToCheck;

  if (!textToAi || !wordToCheck) {
    return res.status(400).json({ error: 'Missing parameters: textToAi and wordToCheck required' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: textToAi }],
        max_tokens: 500
      })
    });

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    const includesWord = aiResponse.toLowerCase().includes(wordToCheck.toLowerCase());
    
    res.json({ aiResponse, wordToCheck, includesWord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
