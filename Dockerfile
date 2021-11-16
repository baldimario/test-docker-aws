FROM node:17-alpine3.12 as base
WORKDIR /app
CMD [""]
FROM base as develop
RUN --mount=type=cache,id=npm-cache,target=/root/.npm \
    npm install typescript@4.4.4 -g
CMD ["sh", "-c", "node index.js"]
