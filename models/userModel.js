const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    refferedUser: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default: null
    },
    isPaymentMade: {
        type: Boolean,
        default: false
    },
    totalEarnings: {
        type: Number,
        default: 0
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User

// Name: string,
// ○ Email: String
// ○ ReferredUser: User ( current model)
// ○ isPaymentMade: Boolean
// ○ TotalEarnings: Number