const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const authRoutes=require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());                      
app.use('/api',authRoutes);
app.use('/api/feedback', feedbackRoutes);

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("Mongodb Connected");
    app.listen(process.env.PORT,()=>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
})
.catch(err=>console.error("MongoDB connection error:",err));


// require('dotenv').config();
// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("MongoDB Connected");
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error("MongoDB connection error:", err);
// });

// require('dotenv').config();
// const mongoose = require("mongoose");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require('dotenv')

// const authRoutes = require('./routes/authRoutes');
// const feedbackRoutes = require('./routes/feedbackRoutes');

// const app = express();

// dotenv.config();

// app.use(cors());
// app.use(express.json());

// // Mount routes here
// app.use('/api', authRoutes); // will handle /api/register or /api/login
// app.use('/api/feedback', feedbackRoutes); // handles /api/feedback/...

// mongoose.connect(process.env.CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("MongoDB Connected");
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error("MongoDB connection error:", err);
// });

