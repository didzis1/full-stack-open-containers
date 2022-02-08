FROM node:16 as build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

# Copy build directory to NGINX
FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
