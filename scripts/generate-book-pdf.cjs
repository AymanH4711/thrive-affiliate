/**
 * Script to generate PDF from BloodSugarResetBook component
 * Usage: node scripts/generate-book-pdf.js
 * 
 * Requirements:
 * - puppeteer: npm install puppeteer
 * OR
 * - wkhtmltopdf: https://wkhtmltopdf.org/
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Configuration
const PDF_OUTPUT_PATH = path.join(__dirname, '../public/downloads/7-day-blood-sugar-reset.pdf');
const BOOK_HTML_PATH = path.join(__dirname, '../public/books/blood-sugar-reset.html');

/**
 * Generate PDF from HTML file using Puppeteer
 */
async function generatePDF() {
  try {
    console.log('🔄 Starting PDF generation...');

    // Launch browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport for better rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2
    });

    // Load HTML file
    const htmlPath = `file://${BOOK_HTML_PATH}`;
    await page.goto(htmlPath, { waitUntil: 'networkidle2' });

    // Generate PDF
    await page.pdf({
      path: PDF_OUTPUT_PATH,
      format: 'A4',
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm'
      },
      printBackground: true
    });

    await browser.close();

    console.log('✅ PDF generated successfully!');
    console.log(`📄 File saved: ${PDF_OUTPUT_PATH}`);
    console.log(`📊 File size: ${getFileSizeInMB(PDF_OUTPUT_PATH)} MB`);

  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

/**
 * Get file size in MB
 */
function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats.size;
  const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
  return fileSizeInMB;
}

// Run the script
generatePDF();