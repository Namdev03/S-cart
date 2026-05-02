const { Schema, model } = require('mongoose')

const usermodel = new Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        //   minlength: 6,
    },
    profilepic: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/036/280/650/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
    },
    role: {
        type: String,
        default: "Customer"
    }
},
    {
        timestamps: true,
    })

module.exports = model('users', usermodel)