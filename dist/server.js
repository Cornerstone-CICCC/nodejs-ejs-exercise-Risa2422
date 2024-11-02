"use strict";
// This is your server file :)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const about_routes_1 = __importDefault(require("./routes/about.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set("view engine", "EJS");
app.set("views", path_1.default.join(__dirname, "../src/views"));
// Middleware
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// Routes
app.use("/", page_routes_1.default);
app.use("/about", about_routes_1.default);
app.use("/contact", contact_routes_1.default);
// Start server
app.listen(3000, () => {
    console.log(`Server is running on port3000...`);
});
