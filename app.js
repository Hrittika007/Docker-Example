import express from 'express';
import dotenv from 'dotenv';

const app=express();
dotenv.config()

const PORT= process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Welcome to Docker Example!');
  });

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})