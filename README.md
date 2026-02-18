# Midlands AutoCare Website

Production-ready React + TypeScript website for a local UK garage, built with Vite and configured for Netlify deployment.

## How to run locally

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

Quality checks:

- `npm run lint`
- `npm run test`
- `npm run build`

## How to deploy on Netlify

1. Push repository to GitHub.
2. In Netlify: **Add new site** → **Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Ensure `netlify.toml` is detected.
6. Deploy.

### Netlify Forms email notifications to `ss-ai@tuta.com`

1. After first deploy, submit the Contact form once so Netlify detects the form.
2. In Netlify dashboard: **Site configuration** → **Forms** → **Notifications**.
3. Add **Email notification**.
4. Recipient: `ss-ai@tuta.com`.
5. Save.

### Optional: serverless email enhancement

An optional endpoint is included at `/.netlify/functions/send-email`.
Connect it to SendGrid or Mailgun using API keys in Netlify environment variables if direct provider delivery is needed.

## Notes

- Testimonials/certification references are clearly marked as sample/demo copy and should be replaced with verified business details.
- Website supports EN/PL language switching and persistent dark/light theme.
