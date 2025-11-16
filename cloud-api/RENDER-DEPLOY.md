# פריסה ל-Render.com (ללא כרטיס אשראי!)

## שלב 1: הכנת הקוד ל-GitHub

1. צור חשבון GitHub אם אין לך: https://github.com/signup
2. צור repository חדש בשם `ai-api`
3. העלה את התיקייה `cloud-api` ל-GitHub:

```bash
cd c:\Users\YEHUDITSP\Desktop\gov-tests\cloud-api
git init
git add .
git commit -m "AI API"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-api.git
git push -u origin main
```

## שלב 2: קבלת מפתח OpenAI

1. גש ל: https://platform.openai.com/signup
2. צור חשבון (אימייל בלבד, ללא כרטיס)
3. לך ל: https://platform.openai.com/api-keys
4. לחץ "Create new secret key"
5. העתק את המפתח (מתחיל ב-`sk-`)

## שלב 3: פריסה ל-Render

1. גש ל: https://render.com
2. לחץ "Get Started for Free"
3. הירשם עם GitHub
4. לחץ "New +" > "Web Service"
5. חבר את ה-repository `ai-api`
6. הגדרות:
   - **Name**: ai-text-checker
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
7. לחץ "Advanced" > "Add Environment Variable":
   - **Key**: `OPENAI_API_KEY`
   - **Value**: המפתח שלך מ-OpenAI
8. לחץ "Create Web Service"

## שלב 4: המתן לפריסה

הפריסה לוקחת 2-3 דקות. תראה את הלוגים בזמן אמת.

## שלב 5: קבל את ה-URL

אחרי הפריסה תקבל URL כמו:
```
https://ai-text-checker.onrender.com
```

## בדיקת ה-API

פתח דפדפן:
```
https://ai-text-checker.onrender.com/?textToAi=What is 2+2?&wordToCheck=4
```

תשובה צפויה:
```json
{
  "aiResponse": "2 + 2 equals 4.",
  "wordToCheck": "4",
  "includesWord": true
}
```

## דוגמאות שימוש

### GET Request:
```
https://YOUR_URL/?textToAi=Tell me about Israel&wordToCheck=Jerusalem
```

### POST Request:
```bash
curl -X POST https://YOUR_URL/ \
  -H "Content-Type: application/json" \
  -d '{"textToAi":"What is the capital of France?","wordToCheck":"Paris"}'
```

### מדפדפן:
```
https://YOUR_URL/?textToAi=Explain AI&wordToCheck=intelligence
```

## חשוב לדעת

- ה-API ציבורי לחלוטין (כנדרש)
- Free tier של Render: 750 שעות חינם בחודש
- השירות עשוי "לישון" אחרי 15 דקות חוסר פעילות (התעוררות לוקחת 30 שניות)
- OpenAI נותן $5 קרדיט חינם לחשבונות חדשים

## פתרון בעיות

**"Build failed"**
- ודא ש-`package.json` ו-`server.js` קיימים ב-repository

**"Application failed to respond"**
- בדוק שהגדרת את `OPENAI_API_KEY` ב-Environment Variables

**"Invalid API key"**
- ודא שהמפתח מ-OpenAI תקין ומתחיל ב-`sk-`

**השירות לא עונה**
- אם השירות "ישן", הבקשה הראשונה תקח 30 שניות
