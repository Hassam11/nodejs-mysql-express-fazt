import Express from "express";
import employeesRoutes from "./routes/employees.route.js";
import indexRoutes from "./routes/index.route.js";

const app = Express();

app.use(Express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).send({
    message: "Not found",
  });
});

export default app;