import express from "express";
import cartRoutes from "@routes/cart.route";

const app = express();
app.use(express.json());

app.use("/", cartRoutes);
export default app;
