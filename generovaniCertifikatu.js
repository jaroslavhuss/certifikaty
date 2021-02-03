
const fs = require("fs");
const { degrees, PDFDocument, rgb, StandardFonts } = require("pdf-lib");
const fontkit = require("@pdf-lib/fontkit");
const fetch = require("node-fetch");

async function modifyPdf(jmeno = "undefined", email="undefined") {
  fs.readFile(__dirname + "/zdroj.pdf", 'base64', async function (err,data) {
    if (err) {
      return console.log(err);
    }
    if(jmeno === "undefined" || email === "undefined"){
//Zde kdyžtak vyhodit chybovou hlášku
    console.log("Bohužel jsme vás nenašli v seznamu registrovaných!")
    }else{

   
    const pdfDoc = await PDFDocument.load(data.toString('base64'));
    pdfDoc.registerFontkit(fontkit);
    const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
  const fontBytes = await fetch(url).then((res) => res.arrayBuffer())
  const helveticaFont = await pdfDoc.embedFont(fontBytes)
  
  const pages = pdfDoc.getPages();
  const firstPage = pages[0]
  const { width } = firstPage.getSize();
  let formula = (width/jmeno.length)*7;
  
  firstPage.drawText(jmeno, {
    x: formula,
    y: 600,
    size: 20,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    rotate: degrees(0),
  })
  const finalPdf = await pdfDoc.save();
  const path = `${jmeno.normalize('NFKD').toLowerCase().replace(/[^\w\s.-_\/]/g, '').replace(/[" ".]/gi, "")}${email.replace(/[@.]/gi,"")}.pdf`; 
  fs.writeFile(__dirname +`/certifikaty/${jmeno.normalize('NFKD').toLowerCase().replace(/[^\w\s.-_\/]/g, '').replace(/[" ".]/gi, "")}${email.replace(/[@.]/gi,"")}.pdf`,finalPdf,"utf8",(err) => {
       if(err){
           console.log(err)
       }
       let csvString = `${email};https://rgtests.cz/certifikaty/${path}\n`;
//druhy fs, který bude ukládat data
fs.appendFileSync(__dirname+"/finalniData.csv", csvString);
   })
}

  });
  
}
module.exports ={
    modifyPdf
}

/**
 *  config = {
        host: 'rgtests.cz',
        user: 'rgtestscz',
        password: 'HWpBSDuK2c'
    },
    options = {
        logging: 'basic'
    },
 */