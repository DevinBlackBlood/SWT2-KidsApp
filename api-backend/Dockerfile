FROM maven:3.9.9-eclipse-temurin-24-alpine
# Set the working directory
WORKDIR /api-backend

COPY ./target/api-backend-0.0.1-SNAPSHOT.jar /api-backend-0.0.1-SNAPSHOT.jar
# Run the application
CMD ["java", "-jar" , "/api-backend-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080