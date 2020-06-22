import mongoose, {Schema} from 'mongoose';

export const KittenSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            trim: true,
            index: true,
            unique: true,
            required: true
        },
        age: {
            type: Number,
            default: 0
        }
    },
    { collection: 'kittens'}
);

module.exports = exports = mongoose.model('Kitten', KittenSchema);