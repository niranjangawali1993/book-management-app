# React build creation
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm ci --no-audit
RUN npm run build

# NGINX configuration
FROM nginx:alpine
COPY --from=node /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
