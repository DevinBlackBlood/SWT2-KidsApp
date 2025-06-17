FROM node:18-alpine AS build
# Set the working directory
WORKDIR /app

COPY package.json package-lock.json ./
# Run the application
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm", "start"]

