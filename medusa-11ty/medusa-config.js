// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "http://localhost:7000";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8080";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-store";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `medusa-file-spaces`,
    options: {
      spaces_url: "https://medusa.fra1.digitaloceanspaces.com",
      bucket: "medusa",
      endpoint: "fra1.digitaloceanspaces.com",
      access_key_id: "O7JWMGASSCDRJJFVRQYT",
      secret_access_key: "IjnU47E9G3hYcrZmcC7L2aqdY6Hck1nd1hWQ6b7SfrU",
    },
  },
];

module.exports = {
  projectConfig: {
    // redis_url: REDIS_URL,
    // For more production-like environment install PostgresQL
    // database_url: DATABASE_URL,
    // database_type: "postgres",
    database_database: "./medusa-db.sql",
    database_type: "sqlite",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
