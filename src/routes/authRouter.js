import { Router } from "express";
import { validateSignIn, validateSignUp } from "../middlewares/authMiddleware.js";
import { findUsersLikeName, verifyUserFollows, signIn, signUp, followUser, findAllFollowing } from "../controllers/authControllers.js";
import { validateUserToken } from "../middlewares/userTokenMiddleware.js";

const router = Router();

router
  .post("/signup", validateSignUp, signUp)
  .post("/signin", validateSignIn, signIn)
  .get("/users", validateUserToken, findUsersLikeName)
  .post("/users/verifyFollow", validateUserToken, verifyUserFollows)
  .post("/users/follow", validateUserToken, followUser)
  .get("/users/follow", validateUserToken, findAllFollowing);

export default router;