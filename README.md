# Noor — Digital Identity

A mobile-first personal landing page designed to work as an NFC digital business card.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
1. Extract this folder.
2. Open a terminal in `noor-digital-identity`.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Personalize it
Edit `src/data/profile.js`:
- Replace the email, phone, website and social URLs.
- Update the bio, skills and interests.
- Put your portrait at `public/profile.jpg` (square image recommended).

The page includes a Save Contact button that downloads a `.vcf` contact file. Update the profile details before sharing the page publicly.

## Build for deployment
```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy that folder to Vercel, Netlify, or another static hosting provider.

## NFC card
Once deployed, write the public website URL to the NFC card. The card stores only the URL, so you can update the website later without reprogramming the card.
