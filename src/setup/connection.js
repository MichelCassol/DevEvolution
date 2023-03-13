const mongoose = require("mongoose");

connect = () => {
	mongoose.connect(process.env.DB_HOST)
    .then(() => {
        console.log("OK")
    })
    .catch((err) => {
        console.log(err);
    })
};

module.exports = {
    connect
};
