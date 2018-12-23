const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB config
const db = require('./config/keys_dev').mongoURI;

// Connect to MongoDB
const mongo = mongoose.connect(db, {
  useNewUrlParser: true
});
mongo.then(() => {
  console.log('MongoDB Connected!');
}).catch((err) => {
  console.log('err', err);
});
// Depreciation warning with this code:
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB Connected!'));

app.get('/', (req, res) => res.send('Hello!!!'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on PORT ${port}!`));