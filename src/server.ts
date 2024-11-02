// This is your server file :)

import express from "express";
import pageRouter from "./routes/page.routes";
import aboutRouter from "./routes/about.routes";
import contactRouter from "./routes/contact.routes";
import path from "path";

const app = express();

app.set("view engine", "EJS");
app.set("views", path.join(__dirname, "../src/views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", pageRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);

// Start server
app.listen(3000, () => {
  console.log(`Server is running on port3000...`);
});
