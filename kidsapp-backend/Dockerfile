FROM maven:3.9.9-eclipse-temurin-24-alpine
# Set the working directory
WORKDIR /kidsapp-backend

COPY ./target/kidsapp-backend-0.0.1-SNAPSHOT.jar /kidsapp-backend-0.0.1-SNAPSHOT.jar
# Run the application
CMD ["java", "-jar",  "/kidsapp-backend-0.0.1-SNAPSHOT.jar"]
EXPOSE 8081