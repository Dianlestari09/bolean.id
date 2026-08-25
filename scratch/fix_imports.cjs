const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Prepend '../' to any import path that starts with '../'
      let newContent = content.replace(/import\s+(?:.*?\s+from\s+)?['"](\.\.\/.+?)['"]/g, (match, p1) => {
        return match.replace(p1, `../${p1}`);
      });

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated imports in ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, '../src/pages/en'));
console.log("Done");
