const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname.replace('\\src\\db', ''), './config/dev.env'),
})

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
