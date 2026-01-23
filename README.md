# SpaceConsole AI

SpaceConsole AI is a premium consultancy and automation partner designed to help businesses launch data initiatives and map paths to automation.

## Documentation
- [Product Requirements](docs/PRD.md)
- [Design Document](docs/design_doc.md)
- [Tech Stack](docs/techstack.md)

## Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your Keys (e.g., Formspree endpoint).

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Deployment
This project is deployment-ready for Vercel.

**Important**: When deploying to Vercel, ensure you add the following Environment Variables in your Vercel Project Settings:
- `VITE_FORMSPREE_ENDPOINT`

## License
Private
