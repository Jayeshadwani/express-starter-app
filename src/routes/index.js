import express from "express";
import { commonMiddleware } from "../middlewares/index.js"; // Ensure the path and file extension are correct
// import { userController } from "../src/controllers/index.js";
import { getUsersRoute } from "../controllers/userController/index.js";
import { getIndexPageRoute } from "../controllers/index.js";

// Universal router
const createRouter = () => {
  const router = express.Router();

  router.get("/", commonMiddleware, getIndexPageRoute);

  router.get("/users", commonMiddleware, getUsersRoute);

  return router;
};

export default createRouter;
