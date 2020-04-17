import express from "express";
import compression from "compression";
import cors from "cors";
import { UserController } from "./UserController";
import {errorHandler} from "./errorHandler";

/**
 * Express server instance
 */
const app: express.Application = express();
// Configuration
app.use(compression()); // GZip compression middleware
app.use(cors()); // CORS middleware


// Routes
app.use(`/user`, UserController);

// Error handling
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Started the server on port ${process.env.PORT || 3000}`);
});

