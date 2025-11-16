const functions = require('@google-cloud/functions-framework');

functions.http('aiTextChecker', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }

  const textToAi = req.query.textToAi || req.body?.textToAi;
  const wordToCheck = req.query.wordToCheck || req.body?.wordToCheck;

  if (!textToAi || !wordToCheck) {
    res.status(400).json({ error: 'Missing parameters: textToAi and wordToCheck are required' });
    return;
  }

  try {
    const aiResponse = await callAI(textToAi);
    const includesWord = aiResponse.toLowerCase().includes(wordToCheck.toLowerCase());
    
    res.json({
      aiResponse,
      wordToCheck,
      includesWord
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function callAI(text) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: text }],
      max_tokens: 500
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
