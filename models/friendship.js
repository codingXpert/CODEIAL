const mongoose = require('mpngoose');

const friendshipSchema = new mongoose.Schema({
    // the user who sent the request
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // the user who accepted this request , the naming is just to understand , otherwise , the user won't see a differenc
    to_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
},

{
  timestamps:true
});

const Friendship = mongoose.model('Friendship' , friendshipSchema);
module.exports = Friendship;