const { Schema, model} = require ('mongoose');
const { stringify } = require('querystring');
const dateFormatter = require('../utils/dateFormatter');

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
        reqyuired: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormatter(createdAtVal),
    },
});
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
    toJSON: {
        virtuals: true,
    },
);

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought