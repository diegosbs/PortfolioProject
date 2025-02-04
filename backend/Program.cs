using PortfolioApi.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os controllers
builder.Services.AddControllers();

// Configuração de CORS para permitir acesso do frontend.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

// Registra as dependências da aplicação (injeção de dependência) usando o arquivo separado.
builder.Services.AddApplicationServices();

var app = builder.Build();

app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
