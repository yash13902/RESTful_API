const mongoose = require("mongoose");


const connectDB =  (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`MongoDb connected with server ${data.connection.host}`);
    });
};

module.exports = connectDB;


