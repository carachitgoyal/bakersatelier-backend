const Express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemsRouter = require('./Routes/Items');

const app = Express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to mongo DB 🗃'))
  .catch((err) => {
    console.log(err);
  });

app.use('/api/v1/items', itemsRouter);

app.listen(8080, () => {
  console.log('app running on port 8080');
});
