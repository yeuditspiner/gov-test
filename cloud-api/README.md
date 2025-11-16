# AI Text Checker API

## Description
Public API that sends text to AI and checks if the response contains a specific word.

## Parameters
- `textToAi` - Text to send to AI
- `wordToCheck` - Word to verify in AI response

## Usage

### GET Request
```
https://YOUR_URL/?textToAi=What is 2+2?&wordToCheck=4
```

### POST Request
```bash
curl -X POST https://YOUR_URL/ \
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

## Deployment
See `RENDER-DEPLOY.md` for step-by-step deployment instructions to Render.com (no credit card required).

## Files
- `server.js` - Main API server
- `package.json` - Dependencies
- `RENDER-DEPLOY.md` - Deployment guide (Hebrew)
- `SETUP-GUIDE.md` - Alternative deployment options
