// import { jsPDF } from "../node_modules/jspdf/dist/jspdf.es.js"
// import { jsPDF } from "jspdf";
import { jsPDF } from './jspdf.es.js'


// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();
 
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");