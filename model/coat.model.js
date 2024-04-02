const mongoose = require("mongoose");

const coatSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    top: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    images: [{
        url: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }],
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    discount: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    Stock: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

const coatModel = mongoose.model("coat", coatSchema);

module.exports = {
    coatModel
};
