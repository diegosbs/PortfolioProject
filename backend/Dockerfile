# Imagem base para execução (.NET 8.0)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Imagem para build (.NET 8.0 SDK)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["PortfolioApi.csproj", "./"]
RUN dotnet restore "./PortfolioApi.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "PortfolioApi.csproj" -c Release -o /app/build

# Publicação
FROM build AS publish
RUN dotnet publish "PortfolioApi.csproj" -c Release -o /app/publish

# Imagem final
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PortfolioApi.dll"]
