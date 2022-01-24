# Stage 1
FROM node:lts as build-step
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:latest as deployment
COPY --from=build-step /app/dist/playground-teamcity /usr/share/nginx/html
EXPOSE 80
