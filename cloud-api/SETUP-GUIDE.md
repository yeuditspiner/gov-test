# מדריך פתיחת חשבון והפעלת API

## שלב 1: פתיחת חשבון Google Cloud (חינם)

1. גש ל: https://cloud.google.com/free
2. לחץ על "Get started for free" / "התחל בחינם"
3. התחבר עם חשבון Google שלך
4. מלא פרטים:
   - שם
   - כתובת
   - כרטיס אשראי (לא יחייבו אותך - רק לאימות)
5. תקבל $300 קרדיט חינם ל-90 יום

## שלב 2: יצירת פרוייקט

1. בקונסול של GCP: https://console.cloud.google.com
2. לחץ על התפריט למעלה ליד "Google Cloud"
3. לחץ "New Project" / "פרוייקט חדש"
4. תן שם לפרוייקט (לדוגמה: "ai-api-test")
5. לחץ "Create"

## שלב 3: הפעלת Cloud Functions API

1. בתפריט צד שמאל: APIs & Services > Library
2. חפש "Cloud Functions API"
3. לחץ "Enable"

## שלב 4: קבלת מפתח OpenAI

1. גש ל: https://platform.openai.com/signup
2. צור חשבון (חינם)
3. לך ל: https://platform.openai.com/api-keys
4. לחץ "Create new secret key"
5. העתק את המפתח (שמור אותו!)

## שלב 5: התקנת Google Cloud CLI

### Windows:
1. הורד מ: https://cloud.google.com/sdk/docs/install
2. הרץ את ההתקנה
3. פתח Command Prompt חדש
4. הרץ: `gcloud init`
5. התחבר לחשבון שלך

## שלב 6: פריסת ה-API

פתח Command Prompt בתיקיית cloud-api והרץ:

```bash
cd c:\Users\YEHUDITSP\Desktop\gov-tests\cloud-api

gcloud functions deploy aiTextChecker --runtime nodejs20 --trigger-http --allow-unauthenticated --entry-point aiTextChecker --set-env-vars OPENAI_API_KEY=sk-YOUR_KEY_HERE
```

**החלף `sk-YOUR_KEY_HERE` במפתח OpenAI שלך!**

## שלב 7: קבלת ה-URL

אחרי הפריסה תקבל URL כמו:
```
https://us-central1-ai-api-test.cloudfunctions.net/aiTextChecker
```

## בדיקת ה-API

פתח דפדפן והכנס:
```
https://YOUR_URL/aiTextChecker?textToAi=What is 2+2?&wordToCheck=4
```

אמור להחזיר:
```json
{
  "aiResponse": "2+2 equals 4",
  "wordToCheck": "4",
  "includesWord": true
}
```

## אלטרנטיבה קלה יותר: Render.com (ללא כרטיס אשראי)

1. גש ל: https://render.com
2. הירשם עם GitHub
3. לחץ "New +" > "Web Service"
4. חבר את הקוד מ-GitHub או העלה ידנית
5. הגדר Environment Variable: `OPENAI_API_KEY`
6. Deploy!

---

## פתרון בעיות

**שגיאה: "gcloud not found"**
- סגור ופתח מחדש את Command Prompt אחרי ההתקנה

**שגיאה: "Permission denied"**
- הרץ: `gcloud auth login`

**שגיאה: "Billing not enabled"**
- בקונסול GCP: Billing > Link a billing account

**שגיאה מ-OpenAI: "Invalid API key"**
- בדוק שהעתקת את המפתח המלא
- ודא שהמפתח מתחיל ב-`sk-`
