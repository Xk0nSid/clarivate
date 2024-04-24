FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY ./src ./src
COPY ./public ./public
COPY index.html tsconfig.json tsconfig.node.json vite.config.ts tailwind.config.js ./

RUN pnpm run build

EXPOSE 5173

CMD [ "pnpm", "run", "dev" ]
