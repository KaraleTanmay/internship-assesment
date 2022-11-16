const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect("mongodb://127.0.0.1:27017/natours-test")
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log("database not connected" + err);
    })

const port = 8000

const server = app.listen(port, () => {
    console.log("server has been started on port 8000");
})
