# Build stage
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN ls -la && ls -la src && cat angular.json || echo "FEHLT!"

# Build ausführen
RUN npm run build --prod || echo "Build FEHLGESCHLAGEN"

# Debug: Zeige Build-Ergebnis
RUN ls -la /app/dist || echo "Dist existiert NICHT"

FROM nginx:alpine

COPY --from=build /app/dist/kidsapp/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
