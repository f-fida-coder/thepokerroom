# The poker room

This repository is organized as a demo-first poker platform scaffold. It focuses on page structure, UI layout, and project organization only.

No real poker engine, authentication, sockets, or payment logic is implemented in this demo scaffold.

## What is included

- Static frontend demo pages in `frontend/`
- Static admin panel demo pages in `admin/`
- Placeholder backend, API, socket, security, and spectator files
- Database structure files in `database/`
- Root environment and ignore files for future expansion

## Suggested project structure

```text
.
|-- README.md
|-- .env
|-- .gitignore
|-- package.json
|-- frontend/
|   |-- index.html
|   |-- login.html
|   |-- register.html
|   |-- lobby.html
|   |-- table.html
|   |-- spectator.html
|   |-- admin-login.html
|   |-- css/
|   |   |-- style.css
|   |   |-- table.css
|   |   `-- admin.css
|   `-- js/
|       |-- game.js
|       |-- playerActions.js
|       |-- tableRender.js
|       |-- chat.js
|       |-- chipRequests.js
|       |-- timer.js
|       `-- spectator.js
|-- backend/
|-- api/
|-- database/
|-- admin/
|-- socket/
|-- security/
`-- spectator/
```

## Demo usage

1. Open `frontend/index.html` directly in a browser for the main landing page.
2. Navigate through the linked demo pages from the top navigation and page cards.
3. Open pages in `admin/` to review the admin dashboard layouts.

## Server requirements

- Node.js 18+ if you want to keep using the existing Vite toolchain already present in this repo
- Any static file server if you want to preview the HTML pages as a simple UI demo
- MySQL or MariaDB later if you decide to activate the SQL schema in `database/schema.sql`

## Notes

- `.env` contains placeholders only
- Backend and API files are intentionally scaffold-only
- Database files describe structure, not production-ready migrations
