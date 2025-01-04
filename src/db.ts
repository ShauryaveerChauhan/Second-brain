import mongoose, {model , Schema} from "mongoose";
mongoose.connect("mongodb+srv://shau:shau@cluster0.opt94.mongodb.net/Brainly")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'
    }],
    userId: {type: mongoose.Types.ObjectId, ref:"user", required: true
    }
})

export const UserModel = model("User", UserSchema)
export const ContentModel = model("content", ContentSchema)