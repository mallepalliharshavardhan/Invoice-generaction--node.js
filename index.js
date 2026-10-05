

const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("invoice.pdf"));

doc.end();