const { Schema, model, Types} = require ("mongoose");
const dateFormatter = require("../utils/dateFormatter");

const reactionSchema = new Schema({
    reactionId: {
        type : Schema.Types.ObjectID,
        default: () => new Types.ObjectID()
    },
    reactionBody: {
        type: String, 
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormatter(createdAtVal),
    },
},
{
    toJSON: {
        getters: true
    },
    _id: false
}
)
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormatter(createdAtVal),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
{
        toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}   
);
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
const Thought = model("Thought", thoughtSchema);
module.exports = Thought