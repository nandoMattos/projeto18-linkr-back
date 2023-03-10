import { Router } from "express";
import { commentPost, createPost, deletePost, deslikePost, getAllPosts, getAllPostsByUserId, likePost, repost, updatePost } from "../controllers/postsController.js";
import {validateUserToken} from "../middlewares/userTokenMiddleware.js"

import {
  commentBodyMiddleware,
  postBelongsUser,
  postExistsValidationMiddleware,
  postValidateSchema,
  userAlreadyLikedPostMiddleware,
} from "../middlewares/postsMiddleware.js";

const router = Router();

router.get("/posts", validateUserToken, getAllPosts);

router.get("/posts/user/:id", validateUserToken, getAllPostsByUserId);

router.post(
  "/posts/:id/like",
  validateUserToken,
  postExistsValidationMiddleware,
  userAlreadyLikedPostMiddleware,
  likePost
);

router.delete(
  "/posts/:id/deslike",
  validateUserToken,
  postExistsValidationMiddleware,
  userAlreadyLikedPostMiddleware,
  deslikePost
);

router.post ("/posts", validateUserToken, postValidateSchema, createPost);

router.delete("/posts/:postId", 
validateUserToken,
postBelongsUser,
deletePost
);

router.put("/posts/:postId", 
validateUserToken,
postBelongsUser,
updatePost)

router.post("/posts/:id/comments", 
  validateUserToken, 
  commentBodyMiddleware,
  postExistsValidationMiddleware,
  commentPost
)

router.post("/posts/:postId/repost",
  validateUserToken,
  repost
)

export default router;
