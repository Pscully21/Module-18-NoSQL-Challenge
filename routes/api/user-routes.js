const router = require("express").Router();
const {
    getAllUsers,
    getUserById,
    addFriend,
    removeFriend,
    createNewUser,
    updateUser,
    deleteUser,
} = require("../../controllers/user-controller")

router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:userid")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route("/:userid/friends/:friendId")
.post(addFriend)
.delete(removeFriend);

module.exports = router