# Forgio

Multi-tenant SaaS platform for Thai SME inventory and sales management.

## Structure

This repo uses **git submodules**. Each service is an independent repository:

| Folder | Repo | Description |
|--------|------|-------------|
| `frontend/` | [forgio-fe](https://github.com/stateless-x/forgio-fe) | Customer-facing web app |
| `backend/` | [forgio-be](https://github.com/stateless-x/forgio-be) | API server |
| `admin/` | [forgio-admin](https://github.com/stateless-x/forgio-admin) | Admin portal |

## Getting Started

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/stateless-x/forgio.git

# If already cloned without submodules
git submodule update --init --recursive
```

## Development

Each service runs independently. See individual READMEs for setup instructions.

| Service | Port | Command |
|---------|------|---------|
| Frontend | 3000 | `bun dev` |
| Backend | 3001 | `bun dev` |
| Admin | 3002 | `bun dev` |
