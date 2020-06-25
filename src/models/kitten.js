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
        // owner: {
        //     type: String,
        //     required: false
        // },
        age: {
            type: Number,
            default: 0
        }
    },
    { collection: 'kittens'}
);

KittenSchema.add({
    owner: {
        type: String,
        required: false
    }
});

// cannot use () => {}; `this` == undefined
/*
KittenSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.__v;
    return obj;
}
*/

KittenSchema.method('toJSON', function () {
    var obj = this.toObject();
    delete obj.__v;
    return obj;
});

// one way to export default:
// module.exports = exports = mongoose.model('Kitten', KittenSchema);

// another way to export default:
const Kitten = mongoose.model('Kitten', KittenSchema);
export default Kitten;