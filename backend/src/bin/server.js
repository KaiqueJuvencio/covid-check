const app = require("../server/app");

const { PORT = 3000 } = process.env;

const onListening = () =>
  console.log(`Server is running on http://localhost:${PORT}`);

const startServer = app => app.listen(PORT, onListening);


const initBackend = (app) => {
  startServer(app);
};

initBackend(app);