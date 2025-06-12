#!/bin/bash

# Directory containing the pages
APP_DIR="src/app"

# Find all page.tsx files for arquetipos, legislacion, acerca, and profesionales
for file in $APP_DIR/arquetipos/page.tsx $APP_DIR/legislacion/page.tsx $APP_DIR/acerca/page.tsx $APP_DIR/profesionales/page.tsx; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Step 1: Add the import statement
    if ! grep -q "import { getSectionVariant } from '@/lib/utils';" $file; then
      # Find the last import line
      last_import_line=$(grep -n "import" $file | tail -1 | cut -d':' -f1)
      sed -i "${last_import_line}a import { getSectionVariant } from '@/lib/utils';" $file
      echo "  Added import statement"
    else
      echo "  Import statement already exists"
    fi
    
    # Step 2: Update section class names
    section_count=0
    
    # First find all section lines
    section_lines=$(grep -n 'className="content-section"' $file | cut -d':' -f1)
    
    # Process each section line
    for line in $section_lines; do
      # Special case for references section (usually the last one)
      if grep -A 3 -B 3 "referencias" $file | grep -q "$line"; then
        sed -i "${line}s/className=\"content-section\"/className=\"content-section variant-b\"/" $file
        echo "  Updated references section to variant-b"
      else
        # Regular sections get the getSectionVariant function
        sed -i "${line}s/className=\"content-section\"/className={\`content-section \${getSectionVariant($section_count)}\`}/" $file
        echo "  Updated section $section_count"
        section_count=$((section_count + 1))
      fi
    done
    
    echo "Completed $file: updated $section_count sections"
    echo "--------------------------------------------------"
  else
    echo "File $file does not exist, skipping"
  fi
done

echo "All files have been processed!" 