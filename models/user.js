import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String, 
        required: [true, 'Username is required!'],
        match: [/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
})

// since nextjs uses a serverless route, and we establish a connection to the server only when the route is called, we need to check for existing models before creating a new one
// "models" object provided by the mongoose library stores all the registered models
// we need to check if there is already an existing model with the name of "User", if there is, then assign that existing model to the "User" variable
// if a model named "User" does not exist in "models", the "model" function from mongoose is called to create a new model which is then assigned to the "User" variable
const User = models.User || model("User", UserSchema)

export default User;