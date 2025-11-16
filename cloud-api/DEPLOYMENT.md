# Cloud API Deployment Guide

## API Description
This API receives two parameters:
- `textToAi` - Text to send to AI
- `wordToCheck` - Word to verify in AI response

The API sends the text to AI, receives the response, and checks if it contains the specified word.

## Deployment Steps (Google Cloud Platform)

### 1. Prerequisites
- Create a free GCP account at https://cloud.google.com/free
- Install Google Cloud CLI: https://cloud.google.com/sdk/docs/install
- Get OpenAI API key from https://platform.openai.com/api-keys

### 2. Deploy to GCP
```bash
cd cloud-api

gcloud functions deploy aiTextChecker \
  --runtime nodejs20 \
  --trigger-http \
  --allow-unauthenticated \
  --entry-point aiTextChecker \
  --set-env-vars OPENAI_API_KEY=your_openai_key_here
```

### 3. Test the API
After deployment, you'll receive a URL like:
`https://REGION-PROJECT_ID.cloudfunctions.net/aiTextChecker`

Test with:
```bash
curl "https://YOUR_URL/aiTextChecker?textToAi=What is the capital of France?&wordToCheck=Paris"
```

## API Usage

### GET Request
```
https://YOUR_URL/aiTextChecker?textToAi=YOUR_TEXT&wordToCheck=WORD
```

### POST Request
```bash
curl -X POST https://YOUR_URL/aiTextChecker \
  -H "Content-Type: application/json" \
  -d '{"textToAi":"What is the capital of France?","wordToCheck":"Paris"}'
```

## Response Format
```json
{
  "aiResponse": "The capital of France is Paris.",
  "wordToCheck": "Paris",
  "includesWord": true
}
```

## Alternative: Deploy to Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Set environment variable: `vercel env add OPENAI_API_KEY`

## Alternative: Deploy to Netlify (Free)

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. Set environment variable in Netlify dashboard
