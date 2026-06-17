const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
    try {
        dns.setServers(['1.1.1.1', '8.8.8.8']);

        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:');
        console.error('ERROR NAME:', error.name);
        console.error('ERROR CODE:', error.code);
        console.error(error.message || error);
        process.exit(1);
    }
};
module.exports = connectDB;