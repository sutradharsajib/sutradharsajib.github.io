/* Makes a single self-contained HTML file.
   Usage:  node bundle.js [output.html]
   Inlines data.js and embeds the portrait as a data URI, so the
   result works as one file with no other files beside it.        */
const fs = require('fs');
const path = require('path');
const dir = __dirname;

let html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const data = fs.readFileSync(path.join(dir, 'data.js'), 'utf8');

html = html.replace('<script src="data.js"></script>', '<script>\n' + data + '\n</script>');

const photo = path.join(dir, 'portrait.jpg');
if (fs.existsSync(photo)) {
  const uri = 'data:image/jpeg;base64,' + fs.readFileSync(photo).toString('base64');
  html = html.replace('photo: "portrait.jpg"', 'photo: "' + uri + '"');
}

const out = process.argv[2] || path.join(dir, 'bundled.html');
fs.writeFileSync(out, html);
console.log('wrote', out, Math.round(html.length / 1024) + 'KB');
