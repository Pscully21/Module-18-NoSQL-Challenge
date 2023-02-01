const router = require("express").Router();
const {
    getThoughts,
    getThoughtById,
    createThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller")

router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

router.route("/:thoughtId/reactons")
.post(addReaction).delete(removeReaction);

router.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);

module.exports = router