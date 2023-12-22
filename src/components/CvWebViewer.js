import React from 'react'
import resume from "../Teddy_Software_Resume.pdf";
import { PDFViewer, Document } from '@react-pdf/renderer';

// TODO - Make the PdfViewer work for those who don't wish to download resume
function CvWebViewer() {
  return (
    <div>
        <PDFViewer>
        <Document file={resume}></Document>
        </PDFViewer>
    </div>
  )
}

export default CvWebViewer