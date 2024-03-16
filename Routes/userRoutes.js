const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.get("/get_all_users", userController.getAllUsers);
router.post("/add_user", userController.addUser);

router.get('/usersInfo',userController.usersInfo )

module.exports = router;
 