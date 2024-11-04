const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const Port = process.env.PORT || 5001;

app.use(cors({ origin: 'http://localhost:5000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
