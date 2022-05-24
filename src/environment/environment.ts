const production = false;

export const environment = {
    production: production,
    basePath: production ? "https://myauto.ge/admin" : "http://localhost:8000/api"
}