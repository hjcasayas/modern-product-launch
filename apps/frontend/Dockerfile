FROM node:22-alpine3.22 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM node:22-alpine3.22 AS development
WORKDIR /app
RUN corepack enable
CMD [ "pnpm","run", "dev:frontend" ]

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build:frontend

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=prod-deps /app/apps/frontend/node_modules /app/apps/frontend/node_modules
COPY --from=prod-deps /app/apps/cms/node_modules /app/apps/cms/node_modules
COPY --from=build /app/apps/frontend/.next/ /app/apps/frontend/.next/
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

EXPOSE 3000
ENTRYPOINT [ "pnpm", "run" ]
CMD [ "start:frontend" ]
