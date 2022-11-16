const User = require("../models/userModel")


exports.increment = async (req, res, next) => {
    try {
        const user = await User.findById(req.body.id);
        user.isPaymentMade = true;
        const refferedUser = await User.findById(user.refferedUser);
        refferedUser.totalEarnings = refferedUser.totalEarnings * 1 + 10;
        await user.save();
        await refferedUser.save();

        res.status(200).json({
            status: "success",
            message: "reffered user has been rewarded 10 rs"
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).send({
            status: "fail",
            message: "something went wrong"
        })
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            status: "success",
            newUser
        })
    }
    catch (err) {
        res.status(400).send({
            status: "fail",
            message: "something went wrong"
        })
    }
}