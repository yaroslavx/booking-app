import express from "express" 
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("you are logged in!")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("you are logged in and you can delete your account.")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("you are admin in and you can delete any account.")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getAllUsers)

export default router