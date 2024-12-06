const fs = require('fs');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

const seedData = async () => {
    try {

        await connectDB();
        const rawData = JSON.parse(fs.readFileSync('./parent_products.json', 'utf-8'));

        const bulkOperations = rawData.map(product => {
            const transformedProduct = {
                ...product,
                _id: product._id?.$oid
                    ? new mongoose.Types.ObjectId(product._id.$oid)
                    : product._id,
            };

            return {
                updateOne: {
                    filter: { _id: transformedProduct._id },
                    update: { $set: transformedProduct },
                    upsert: true
                }
            };
        });

        await Product.bulkWrite(bulkOperations);

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error('Error importing data:', error);
        process.exit(1);
    }
};

seedData();
