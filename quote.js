const express=require("express");
const { get } = require("http");
const app=express();
const axios=require("axios")
app.use(express.static("public"));

app.get("/", async (req,res)=>{
    try{
        const response = await axios.get('https://zenquotes.io/api/random');
        const result = response.data;
        console.log(response);
        res.render("random-quote.ejs",{
            quote : result[0].q,
            author : result[0].a,
        });
    }

    catch(error){
        console.log("failed to make a request - "+error.message);
        res.render("random-quote.ejs",{
            error : error.message,
        });
    }
})

app.listen(8000);