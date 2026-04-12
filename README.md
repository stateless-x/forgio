# Forgio

ERP platform for Thai SMEs. Inventory management, sales, and business operations.

This repo is the central navigator. Each service has its own repository, history, and deployment pipeline. Start here, then go to the repo that matches your role.

## Services

| Repo | What it does | Port |
|---|---|---|
| [forgio-be](https://github.com/stateless-x/forgio-be) | REST API. Multi-tenant backend for inventory, sales, auth. | 3001 |
| [forgio-fe](https://github.com/stateless-x/forgio-fe) | Web app. Customer-facing product. | 3000 |
| [forgio-admin](https://github.com/stateless-x/forgio-admin) | Admin portal. SaaS operator tools. | 3002 |

## How the system fits together

```
Web App  ──API──▶  Backend  ──▶  PostgreSQL
Admin    ──API──▶  Backend  ──▶  BetterAuth
```

## Running locally

### Prerequisites

- [OrbStack](https://orbstack.dev) — runs the local PostgreSQL database (lightweight Docker for Mac)

### 1. Start the database

The shared database config lives at `~/dev/docker-compose.yml`. Run once (OrbStack auto-starts on login after that):

```bash
cd ~/dev
docker compose up -d
```

This starts PostgreSQL 16 on `localhost:5432` with `forgio_dev` pre-created.

Use this connection string in `backend/.env`:
```
DATABASE_URL="postgresql://dev:dev@localhost:5432/forgio_dev"
```

Useful commands:
```bash
docker compose up -d    # start
docker compose down     # stop
docker ps               # check running containers
```

### 2. Start services in order

1. Backend first. Nothing else works without it.
2. Web app. Depends on the backend.
3. Admin. Depends on the backend.

Each repo's README has its own quickstart instructions.

## Stack

Bun · Fastify · Next.js · PostgreSQL · Drizzle ORM · BetterAuth
