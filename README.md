# Aventura Web - ISC-305

Stack: React + Vite · Node + Express · PostgreSQL · Docker Compose

## Requisitos
Docker Desktop y Git. No hace falta instalar Node.

## Puesta en marcha
```bash
git clone <url-del-repositorio>
cd <carpeta>
copy .env.example .env
docker compose up --build
```

- Frontend: http://localhost:5173
- API: http://localhost:3000/api/salud

## Comandos útiles
```bash
docker compose up
docker compose logs -f backend
docker compose down        # detener
docker compose down -v     # detener y borrar la base de datos
```

Los `.sql` de `backend/db/` se ejecutan solo la primera vez que se crea la base.