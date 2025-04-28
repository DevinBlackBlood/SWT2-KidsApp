FROM maven:3.9.9-eclipse-temurin-24-alpine
# Set the working directory
WORKDIR /kidsapp-backend

COPY ./target/kidsapp-backend-0.0.1-SNAPSHOT.jar app.jar
# Run the application
CMD ["java", "-jar",  "/app.jar"]
EXPOSE 8081