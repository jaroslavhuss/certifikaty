const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {modifyPdf} = require("./generovaniCertifikatu");
const data = require("./data_for_certificates")
app.get("/", (req,res) => {
    
    data.forEach(({name,email}) => {
        modifyPdf(name, email);
    });
            res.send("Fachám");
});
app.listen(PORT,(err) => {
    if(err){
        console.log(err)
    }
    console.log(`Server běží na portu ${PORT}`)
})