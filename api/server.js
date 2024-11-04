const express = require('express');
const cors = require('cors');
const path = require('path');
const router=require('./routes/router');

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(router)

// Serve static files from the React app in the `client/build` folder
app.use(express.static(path.join(__dirname, '../client/build')));


// API route example
app.get('/api/example', (req, res) => {
  res.json({ message: 'API route response' });
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});




router.post('/careers',(req,res)=>{
  console.log(req.body);
  res.send({ message: "Form data received" });
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
