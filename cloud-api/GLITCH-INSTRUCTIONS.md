# הוראות פריסה ל-Glitch.com (5 דקות!)

## שלב 1: הכנה
1. מחק את המפתח הישן ב-OpenAI: https://platform.openai.com/api-keys
2. צור מפתח חדש ושמור אותו (אל תשתף אותו!)

## שלב 2: Glitch
1. גש ל: https://glitch.com
2. לחץ "Sign up" עם Google
3. לחץ "New Project" > "glitch-hello-node"

## שלב 3: העתק קוד

### קובץ server.js (מחק הכל והעתק):
```javascript
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
```

### קובץ package.json (מחק הכל והעתק):
```json
{
  "name": "ai-text-checker",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

## שלב 4: הוסף מפתח
1. לחץ על ".env" בצד שמאל (או "Add a .env file")
2. הוסף שורה:
```
OPENAI_API_KEY=המפתח_החדש_שלך
```

## שלב 5: בדיקה
למעלה תראה URL כמו: `https://your-project.glitch.me`

בדוק:
```
https://your-project.glitch.me/?textToAi=What is 2+2?&wordToCheck=4
```

## זהו! ה-API שלך חי!

שלח את ה-URL הזה במייל למבחן.
