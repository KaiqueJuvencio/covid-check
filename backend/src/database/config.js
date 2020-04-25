const defaultSettings = {
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

module.exports = {
  development: {
    ...defaultSettings,
  },
  test: {
    ...defaultSettings,
  },
  production: {
    ...defaultSettings,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
