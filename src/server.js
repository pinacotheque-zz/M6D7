import express from "express";
import cors from "cors";

import authorsRouter from "./services/authors/index.js";
import blogsRouter from "./services/blogs/index.js";

const server = express();

const port = process.env.PORT || 3009;

server.use(cors());

server.use(express.json());
server.use("/authors", authorsRouter);
server.use("/blogs", blogsRouter);


server.listen(port, () => console.log("Server is running on port ", port));

server.on("error", (error) => console.log("Something went wrong.", error));