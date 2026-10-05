

const PDFDocument = require("pdfkit");

const fs = require("fs");
const customer = "Harsha";
const product = "Laptop";
const price = 50000;
const quantity = 1;

const total = price * quantity;

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("invoice.pdf"));

doc.text("Invoice");
doc.text(`Customer: ${customer}`);
doc.text(`Product: ${product}`);
doc.text(`Price: ${price}`);
doc.text(`Product: ${product}`);
doc.text(`Quantity: ${quantity}`);


doc.end();