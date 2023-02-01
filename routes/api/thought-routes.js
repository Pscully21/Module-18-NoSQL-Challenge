const router = require("express").Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller")

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:id").get(getThoughtById).put(updateThought).delete(removeThought);

router.route("/:thoughtId/reactons").post(addReaction).delete(removeReaction);

module.exports = router