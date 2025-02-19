import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
// import swaggerUi from "swagger-ui-express";
// import yaml from "yamljs";

const app = express();

// Load Swagger (Open API)
// const apiDocs = yaml.load("./docs/api_docs.yaml");

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// API Docs
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs)); // O

app.listen(5000, () => console.log("Server up and running..."));
