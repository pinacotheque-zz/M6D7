import express from "express";
import cors from "cors";

import authorsRouter from "./services/authors/index.js";
import blogsRouter from "./services/blogs/index.js";

const app = express();

const port = process.env.PORT || 3009;

app.use(cors());

app.use(express.json());
app.use("/authors", authorsRouter);
app.use("/blogs", blogsRouter);


app.listen(port, () => console.log("Server is running on port ", port));

app.on("error", (error) => console.log("Something went wrong.", error));