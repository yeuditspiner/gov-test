# פריסה ל-Vercel (הכי פשוט!)

## שלב 1: הכנה
1. מחק את המפתח הישן ב-OpenAI: https://platform.openai.com/api-keys
2. צור מפתח חדש ושמור אותו

## שלב 2: פריסה ל-Vercel

### אופציה א': דרך האתר (ללא התקנות)

1. **גש ל:** https://vercel.com/signup
2. **הירשם עם GitHub** (צור חשבון GitHub אם אין לך)
3. **לחץ "Add New" > "Project"**
4. **לחץ "Import Git Repository"**
5. **העלה את התיקייה `cloud-api`** (גרור לדפדפן)
6. **לחץ "Deploy"**
7. **אחרי הפריסה:** לחץ "Settings" > "Environment Variables"
8. **הוסף:**
   - Name: `OPENAI_API_KEY`
   - Value: המפתח שלך
9. **לחץ "Redeploy"**

### אופציה ב': דרך GitHub

1. **צור repository ב-GitHub**
2. **העלה את התיקייה `cloud-api`:**
```bash
cd c:\Users\YEHUDITSP\Desktop\gov-tests\cloud-api
git init
git add .
git commit -m "AI API"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-api.git
git push -u origin main
```
3. **גש ל-Vercel** והתחבר עם GitHub
4. **לחץ "Import Project"** ובחר את ה-repository
5. **הוסף Environment Variable**: `OPENAI_API_KEY`
6. **Deploy!**

## שלב 3: קבל URL

תקבל URL כמו:
```
https://your-project.vercel.app
```

## בדיקה

```
https://your-project.vercel.app/?textToAi=What is 2+2?&wordToCheck=4
```

## יתרונות Vercel
- ללא כרטיס אשראי
- פריסה מהירה (30 שניות)
- תמיד פעיל (לא "נרדם")
- חינם לגמרי
