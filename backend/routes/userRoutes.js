import express from "express"
const router = express.Router()
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js"
import { protect } from "../middileware/authMiddileware.js"

router.route("/").post(registerUser)
router.post("/login", authUser)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
