# Ortemis' Parse Viewer

Full-stack demo using **Laravel**, **Vite**, **React**, **Tailwind**, and **shadcn**.  
Connects to Blizzard and WarcraftLogs APIs to show a character's latest parse.

### Requirements
- PHP >= 8.1
- Composer
- Node.js >= 20

### Quick Start

Install
```bash
composer install
yarn

cp .env.example .env
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