const fs = require('fs');
const path = require('path');

function findFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = findFiles(path.join(__dirname, '..', 'src', 'app'));
let updated = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Find the exact block starting with <div className="space-y..."> 
  // and ending with </div> just after the {faqs.map(...)}
  const mapRegex = /<div className="space-y-[^"]*">\s*\{faqs\.map\(\(faq,\s*[i|index]+\)\s*=>\s*\([\s\S]*?\)\n?\s*\)\}\n?\s*<\/div>/g;

  if (mapRegex.test(content)) {
    content = content.replace(mapRegex, '<FAQAccordion faqs={faqs} />');
    
    // Check if FAQAccordion is imported
    if (!content.includes('import FAQAccordion from')) {
       // Insert it after the first import
       content = content.replace(/(import .+ from .+;\r?\n)/, '$1import FAQAccordion from "@/components/FAQAccordion";\n');
    }

    fs.writeFileSync(f, content);
    console.log('Updated:', f);
    updated++;
  } else {
    // Some pages might not use map directly within div, let's also try checking just 'faqs.map'
    if (content.includes('faqs.map(')) {
       console.log('Found map but regex missed it in:', f);
    }
  }
});

console.log(`\nDone! Added FAQ accordion to ${updated} pages.`);
