# Base stage for installing dependencies
FROM node:16 AS build-stage
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
RUN npm run build

# # Test stage for testing the application
# FROM base-stage as test-stage
# ENV CI=true
# CMD ["npm", "run", "test"]

# Copy build directory to nginx
FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
