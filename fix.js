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
  
  // Fix 'er' typography
  content = content.replace(/ er\"/g, '\"');
  content = content.replace(/\ser\s/g, ' ');
  content = content.replace(/\"er leading/g, '\"leading');
  content = content.replace(/\s+er$/gm, '');

  content = content.replace(/text-\[8px\]/g, 'text-[11px]');
  content = content.replace(/text-\[9px\]/g, 'text-xs');
  content = content.replace(/text-\[10px\]/g, 'text-sm');
  content = content.replace(/text-\[11px\]/g, 'text-sm');
  content = content.replace(/text-\[12px\]/g, 'text-[15px]');

  if (content !== original) {
     fs.writeFileSync(f, content, 'utf8');
     count++;
     console.log('Fixed:', f);
  }
});
console.log('Total fixed:', count);
