# Ortemis' Parse Viewer

Full-stack demo with Laravel and React.  
Connects to Blizzard and WarcraftLogs APIs to show a character's latest parse.

### Requirements
- PHP >= 8.1
- Composer
- Node.js >= 20

### Quick Start

Install
```bash
yarn
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --silent
```

Edit `.env`
```
BLIZZARD_CLIENT_ID=your_id
BLIZZARD_CLIENT_SECRET=your_secret
WARCRAFTLOGS_API_KEY=your_key
```

Run the backend
```
php artisan serve
```

Run the frontend
```
yarn dev
```

Navigate to http://localhost:8000/

### Known bugs
- Icons don't load on initial parse load. Refreshing the page fixes it.

### Feature and tech details

- Backend
  - Laravel 12
  - Realms fetching using Blizzard API
    - OAuth, cached token
    - Cached realms response
  - WCL parses fetching using WarcraftLogs API.
  - Schema validation
  - Exception handling
  - API keys stored in ENV
- Frontend
  - React 18
  - Vite bundling
  - shadcn UI components
  - Tailwind CSS
  - React Query
  - Zod schema imported from backend
  - Form validation errors
  - Light/dark mode
  - Wowhead links
  - Local storage for all inputs and parse
- Linting
    - Prettier for all files
    - Eslint for frontend