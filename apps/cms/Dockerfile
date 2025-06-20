FROM node:22-alpine3.22 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM node:22-alpine3.22 AS development
RUN corepack enable
WORKDIR /app
CMD [ "pnpm","run", "dev:cms" ]

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build:cms

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=prod-deps /app/apps/frontend/node_modules /app/apps/frontend/node_modules
COPY --from=prod-deps /app/apps/cms/node_modules /app/apps/cms/node_modules
COPY --from=build /app/apps/cms/dist/ /app/apps/cms/dist/

EXPOSE 1337
ENTRYPOINT [ "pnpm", "run" ]
CMD [ "start:cms" ]