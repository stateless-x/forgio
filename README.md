# Forgio

ERP platform for Thai SMEs. Inventory management, sales, and business operations.

This repo is the central navigator. Each service has its own repository, history, and deployment pipeline. Start here, then go to the repo that matches your role.

## Services

| Repo | What it does | Port |
|---|---|---|
| [forgio-be](https://github.com/stateless-x/forgio-be) | REST API. Multi-tenant backend for inventory, sales, auth. | 4000 |
| [forgio-fe](https://github.com/stateless-x/forgio-fe) | Web app. Customer-facing product. | 3000 |
| [forgio-admin](https://github.com/stateless-x/forgio-admin) | Admin portal. SaaS operator tools. | 3001 |

## How the system fits together

```
Web App  ──API──▶  Backend  ──▶  PostgreSQL
Admin    ──API──▶  Backend  ──▶  Supabase (auth)
```

## Running locally

Start in this order.

1. Backend first. Nothing else works without it.
2. Web app. Depends on the backend.
3. Admin. Depends on the backend.

Each repo's README has its own quickstart instructions.

## Stack

Bun · Elysia · Next.js · PostgreSQL · Drizzle ORM · Supabase · Better Auth
