# הוראות פריסה ל-Render.com (5 דקות!)

## שלב 1: הכנת מפתח OpenAI
1. גש ל: https://platform.openai.com/api-keys
2. צור מפתח חדש ושמור אותו

## שלב 2: Render.com
1. גש ל: https://render.com
2. לחץ "Get Started" והתחבר עם GitHub
3. לחץ "New +" > "Web Service"
4. חבר את הריפוזיטורי: `yeuditspiner/gov-test`
5. הגדרות:
   - **Name**: `gov-ai-api`
   - **Root Directory**: `cloud-api`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

## שלב 3: הוסף משתנה סביבה
1. לחץ "Environment" בתפריט
2. לחץ "Add Environment Variable"
3. הוסף:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: המפתח שיצרת

## שלב 4: Deploy
1. לחץ "Create Web Service"
2. המתן 2-3 דקות
3. תקבל URL כמו: `https://gov-ai-api.onrender.com`

## בדיקה:
```
https://gov-ai-api.onrender.com/?textToAi=What is 2+2?&wordToCheck=4
```

התגובה:
```json
{
  "aiResponse": "2+2 equals 4",
  "wordToCheck": "4",
  "includesWord": true
}
```

## זהו! שלח את ה-URL במייל 🚀
