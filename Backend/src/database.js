const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Darkeyeking:35652515@cluster0.x6utudb.mongodb.net/?retryWrites=true&w=majority')
.then(db=> console.log('Db is connected'))
.catch(err => console.log(err));

