const fs = require('fs');

const inputPath = 'input.txt';
const outputPath = 'output.txt';

fs.readFile(inputPath, 'utf8', (readErr, data) => {
  if (readErr) {
    if (readErr.code === 'ENOENT') {
      console.error(`File not found: ${inputPath}`);
    } else {
      console.error('Error reading file:', readErr.message);
    }
    return;
  }

  const lines = data.split(/\r?\n/);
  const totalLines = lines.filter((line, index) => index < lines.length - 1 || line.length > 0).length;
  const totalWords = data.trim().split(/\s+/).filter(Boolean).length;

  const output = `Total Lines: ${totalLines}\r\nTotal Words: ${totalWords}`;

  fs.writeFile(outputPath, output, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing output file:', writeErr.message);
      return;
    }
    console.log(`Results written to ${outputPath}`);
  });
});