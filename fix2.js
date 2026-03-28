const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(file));
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    });
  } catch (e) {}
  return results;
}

const files = walk('./src/app/admin');
files.push('./src/components/admin/Sidebar.tsx');
files.push('./src/components/admin/AdminLayout.tsx');

let count = 0;
files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  
  // Remove all literal whitespace text nodes {" "} that Prettier inserted due to 
  // the previous regex squashing.
  // We'll specifically target {" "} or { " " }
  content = content.replace(/\{\s*\"\s*\"\s*\}/g, '');

  if (content !== original) {
     fs.writeFileSync(f, content, 'utf8');
     count++;
     console.log('Fixed hydration error in:', f);
  }
});
console.log('Total fixed:', count);
