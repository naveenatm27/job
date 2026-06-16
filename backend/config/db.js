const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
    try {
        // Force Node resolver to use a public DNS that supports SRV (helps when local DNS blocks SRV)
        dns.setServers(['1.1.1.1', '8.8.8.8']);

        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected' + process.env.PORT);
    } catch (error) {
        console.log('ERROR NAME:', error.name);
        console.log('ERROR CODE:', error.code);
        console.log(error);
    }
};

module.exports = connectDB;