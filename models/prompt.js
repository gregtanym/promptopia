import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        // creator is going to be a document in the database? meant to be of User type
        type: Schema.Types.ObjectId,
        // making a one to many relationship
        ref: 'User',
        required: [true, "User is not signed in"]
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required']
    },
})

const Prompt = models.Prompt || model("Prompt", PromptSchema)

export default Prompt