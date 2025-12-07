import "dotenv/config";

import app from "./app.js";

const startServer = () => {
  try {
    app.listen(process.env.PORT || 4000, () => {
      console.log(
        `server is running on port: http://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log("Failed to run server!");
  }
};

startServer();
