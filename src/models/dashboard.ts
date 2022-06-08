import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const DashboardSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
});

// https://github.com/dherault/serverless-offline/issues/258#issuecomment-501000703
let dashboard;
const collection = process.env.MONGO_COLLECTION;

try {
    dashboard = mongoose.connection.model(collection);
} catch (e) {
    dashboard = mongoose.model(collection, DashboardSchema);
}

export default dashboard;
