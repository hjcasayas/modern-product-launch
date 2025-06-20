FROM node:22-alpine3.22 AS base

FROM base AS development
WORKDIR /app
RUN npm i -g pnpm@latest
CMD [ "pnpm","run", "dev:frontend" ]

FROM base AS production-builder
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/frontend/package.json ./apps/frontend/
COPY apps/cms/package.json ./apps/cms/

RUN npm i -g pnpm@latest
RUN pnpm install
COPY . /app/
RUN pnpm run build:frontend

FROM base AS production
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/frontend/package.json ./apps/frontend/
COPY apps/cms/package.json ./apps/cms/

RUN pnpm install --prod

COPY --from=production-builder /app/apps/frontend/.next/ /app/apps/frontend/.next/
# COPY --from=production-builder /app/public/ /app/public/
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp
EXPOSE 3000
ENTRYPOINT [ "pnpm", "run" ]
CMD [ "start:frontend" ]
