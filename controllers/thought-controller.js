const { User, Thought } = require("../models");

module.exports = {
    //getting all thoughts
    getThoughts(req, res) {
        Thought.find({})
        .then((thought)=> res.json(thought))
        .catch((err) => res.status(500).json(err));

    },
    // getting a specific thought
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) => 
                !thought
                ? res.status(404).json({ message: "No thought for this ID" })
                : res.json(thought)
            )  
            .catch((err) => res.status(500).json(err));
    },
}