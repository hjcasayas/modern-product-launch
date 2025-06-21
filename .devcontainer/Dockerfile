FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bookworm

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apt-get update -y && \
    apt-get upgrade -y && \
    npm install -g npm@latest && \
    npm install -g pnpm@latest