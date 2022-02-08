import mongoose from 'mongoose'

const cerealSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    mfr: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    sodium: {
        type: Number,
        required: true
    },
    fiber: {
        type:Number,
        required: true
    },
    carbo: {
        type:Number,
        required: true
    },
    sugars: {
        type:Number,
        required: true
    },
    potass: {
        type:Number,
        required: true
    },
    vitamins: {
        type:Number,
        required: true
    },
    shelf: {
        type:Number,
        required: true
    },
    weight: {
        type:Number,
        required: true
    },
    cups: {
        type:Number,
        required: true
    },
    rating: {
        type:Number,
        required: true
    }
    }, {timestamps: true})

const Cereal = mongoose.model('Cereal', cerealSchema, 'Cereal')

export default Cereal