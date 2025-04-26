FROM maven:3.9.9-eclipse-temurin-24-alpine
# Set the working directory
WORKDIR /api-backend

COPY . .
# Run the application
CMD ["java", ".src/main/java/com/swt1/bs/apibackend/ApiBackendApplication.java"]
EXPOSE 8080