const  express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;




app.listen(PORT, function() {
  console.log("Hello World");
});


module.exports = app;