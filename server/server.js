const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sgrbhinge:sgrfusion@sgr1-axumk.mongodb.net/node-angular?retryWrites=true')
.then(() => { console.log('Connected to DB!') })
.catch(() => { console.log('Error connecting DB!') });

const user = mongoose.model('User', {
    email: {
                type: String,
                required: true,
                trim: true,
                minlength: 1
            },
    createdAt: {
        type: String,
        default: 'Today'
    }
});

const updateUser = new user({
    email: 'ass@gmail.com',
});

updateUser.save().then((doc) => {
    console.log('Saved the doc', doc);
}).catch((err) => {
    console.log('Error saving the doc', err);
});
