FROM node:14 as build
WORKDIR /app
COPY . .
RUN npm install && npm install -g @angular/cli
EXPOSE 4200
