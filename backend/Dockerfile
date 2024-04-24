FROM node:18-alpine

EXPOSE 3000

WORKDIR /app

COPY ./src ./src
COPY package.json pnpm-lock.yaml tsconfig.build.json tsconfig.json .eslintrc.js .prettierrc .env ./

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run build

CMD [ "pnpm", "run", "start:dev" ]
