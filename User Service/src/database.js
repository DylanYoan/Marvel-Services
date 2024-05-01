const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const config = require("./config");

const MONGODB_URI = `${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

const connectDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
        });

        console.log("connected to database");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectDatabase();