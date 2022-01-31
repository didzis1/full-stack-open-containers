FROM node:16

USER node

WORKDIR /usr/src/todo-frontend

COPY --chown=node:node . .

ENV REACT_APP_BACKEND_URL=http://localhost:3001

RUN npm ci

RUN CI=true npm run test

CMD ["npm", "run", "start"]

