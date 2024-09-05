FROM maven:3.8.5-openjdk-17 AS build

WORKDIR /app

# Copia o pom.xml para o diretório de trabalho
COPY app/backend/pom.xml .

# Copia a pasta src para o diretório de trabalho
COPY app/backend/src ./src

# Executa o Maven para construir o projeto
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copia o JAR gerado na fase anterior para o diretório de trabalho
COPY --from=build /app/target/*.jar ./app.jar

EXPOSE 8080

# Comando para executar a aplicação
CMD ["java", "-jar", "app.jar"]
