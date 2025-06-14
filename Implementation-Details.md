# SEO Implementation Details

## 1. URL Normalization & Canonicals (Alta Prioridad, 2h)
### Tasks:
1. Update `next-sitemap.config.js`
   - Convert siteUrl to lowercase: `https://altascapacidadesintelectuales.org`
   - Add hreflang configuration
   - Files: `next-sitemap.config.js`

2. Implement hreflang in metadata
   - Add hreflang="es-AR" to all pages
   - Add optional hreflang="es" for broader reach
   - Files: `src/app/layout.tsx`, all page metadata files

3. Normalize URLs across all files
   - Replace uppercase domain in sitemap config
   - Update canonical URLs
   - Update alternate link tags
   - Files: 
     - `next-sitemap.config.js`
     - `src/lib/metadata.ts`
     - `src/app/layout.tsx`
     - All page metadata files

### Validation:
- [ ] Verify lowercase URLs in sitemap
- [ ] Check hreflang tags in page source
- [ ] Validate with Google Search Console
- [ ] Confirm no duplicate content warnings

## 2. Schema Markup Implementation (Alta Prioridad, 4h)
### Tasks:
1. Create JsonLd component
   - Files: `src/components/JsonLd.tsx`

2. Implement schema types
   - Article schema
   - FAQ schema
   - WebPage schema
   - Files: `src/lib/schema.ts`

3. Update page metadata
   - Add schema to each page's generateMetadata
   - Files: All page metadata files

### Validation:
- [ ] Test with Google's Rich Results Test
- [ ] Verify JSON-LD structure
- [ ] Check schema.org validator

## 3. PDF Sitemap Integration (Media Prioridad, 3h)
### Tasks:
1. Implement recursive PDF scanning
   ```js
   const walk = async (dir) => {
     const dirents = await fs.readdir(dir, { withFileTypes: true });
     const files = await Promise.all(
       dirents.map((d) => {
         const res = path.resolve(dir, d.name);
         return d.isDirectory() ? walk(res) : res;
       })
     );
     return Array.prototype.concat(...files);
   };
   ```

2. Update next-sitemap config
   - Add PDF scanning logic with dynamic lastmod
   - Set priority: 0.4, changefreq: 'monthly'
   - Files: `next-sitemap.config.js`

3. Add PDF alternate links
   - Files: All pages with PDFs

4. Dependencies & Performance
   - Add `date-fns` for date formatting (≈ 6 kB treeshakeado)
   - Alternative: Use native `fileStat.mtime.toISOString().split('T')[0]`
   - Files: `package.json`, `next-sitemap.config.js`

### Validation:
- [ ] Run `pnpm build` and verify PDFs in sitemap.xml
- [ ] Check "Indexable" status in Google Search Console
- [ ] Run PDF ↔ sitemap comparison tests
- [ ] Measure build time impact (< +15%)

### Build Time Monitoring:
1. Establish baseline:
   ```bash
   npm run build && jq '.total' .next/trace > baseline-build.json
   ```

2. Compare after changes:
   ```bash
   npm run build && jq '.total' .next/trace > current-build.json
   diff baseline-build.json current-build.json
   ```

### PDF Coverage Testing:
1. Install test dependencies:
   ```bash
   pnpm add -D xml2js fast-glob jest
   ```

2. Create test file `__tests__/seo/pdf-sitemap.test.js`:
   ```js
   const { parseString } = require('xml2js');
   const glob = require('fast-glob');
   const fs = require('fs').promises;
   const path = require('path');

   describe('PDF Sitemap Coverage', () => {
     it('should include all PDFs from public directory', async () => {
       // Get all PDFs
       const pdfs = await glob('public/**/*.pdf');
       const pdfUrls = pdfs.map(p => p.replace('public', ''));

       // Parse sitemap
       const sitemap = await fs.readFile('dist/sitemap.xml', 'utf8');
       const { urlset } = await new Promise((resolve, reject) => {
         parseString(sitemap, (err, result) => {
           if (err) reject(err);
           else resolve(result);
         });
       });

       // Check each PDF
       const missingPdfs = pdfUrls.filter(pdf => 
         !urlset.url.some(u => u.loc[0].endsWith(pdf))
       );

       expect(missingPdfs).toHaveLength(0);
     });
   });
   ```

3. Add test script to package.json:
   ```json
   {
     "scripts": {
       "test:seo": "jest __tests__/seo"
     }
   }
   ```

### Risks & Mitigations:
- Build time increase → Measure before/after
- Quick rollback if build time increases >15%
- Bundle size impact from date-fns → Use native alternative if needed

### Dependencies:
- None blocking
- Can run after URL normalization

## 4. Image Optimization (Alta Prioridad, 3h)
### Tasks:
1. Update Image component usage
   - Add priority to hero images
   - Add lazy loading to others
   - Files: All components using images

2. Implement OG image generation
   - Files: `src/app/api/og/route.ts`

3. Add alt text to all images
   - Files: All components with images

### Validation:
- [ ] Check image loading performance
- [ ] Verify OG images
- [ ] Test alt text coverage

## 5. Breadcrumb Implementation (Media Prioridad, 2h)
### Tasks:
1. Create BreadcrumbList schema
   - Files: `src/lib/schema.ts`

2. Implement breadcrumb component
   - Files: `src/components/Breadcrumb.tsx`

3. Add to second-level pages
   - Files: All second-level page layouts

### Validation:
- [ ] Test breadcrumb schema
- [ ] Verify visual implementation
- [ ] Check mobile responsiveness

## 6. RSS Feed Implementation (Baja Prioridad, 2h)
### Tasks:
1. Create RSS generator
   - Files: `src/lib/rss.ts`

2. Add feed route
   - Files: `src/app/feed.xml/route.ts`

### Validation:
- [ ] Verify feed.xml output
- [ ] Test feed validation
- [ ] Check feed reader compatibility

## 7. TOC & Internal Linking (Media Prioridad, 3h)
### Tasks:
1. Create TOC component
   - Files: `src/components/TableOfContents.tsx`

2. Implement heading ID generation
   - Files: `src/lib/markdown.ts`

3. Add internal linking logic
   - Files: `src/lib/linking.ts`

### Validation:
- [ ] Test TOC generation
- [ ] Verify heading IDs
- [ ] Check internal link coverage

## 8. Meta Optimization (Alta Prioridad, 2h)
### Tasks:
1. Update metadata generation
   - Implement character limits
   - Remove keywords
   - Files: All page metadata files

2. Create metadata helper
   - Files: `src/lib/metadata.ts`

### Validation:
- [ ] Check title lengths
- [ ] Verify description lengths
- [ ] Test meta tag output

## 9. Performance Optimization (Alta Prioridad, 2h)
### Tasks:
1. Implement font preloading
   - Files: `src/app/layout.tsx`

2. Update image loading strategy
   - Files: All image components

### Validation:
- [ ] Check LCP metrics
- [ ] Verify font loading
- [ ] Test performance scores

## 10. E-E-A-T Implementation (Media Prioridad, 4h)
### Tasks:
1. Create About section
   - Files: `src/app/acerca/page.tsx`

2. Add update timestamps
   - Files: All content pages

3. Implement external link handling
   - Files: `src/components/ExternalLink.tsx`

4. Add staging noindex
   - Files: `next.config.js`

### Validation:
- [ ] Verify About page content
- [ ] Check timestamps
- [ ] Test external links
- [ ] Verify staging noindex

## 11. Monitoring Setup (Baja Prioridad, 1h)
### Tasks:
1. Document verification steps
   - Files: `SEO_IMPLEMENTATION.md`

2. Create monitoring checklist
   - Files: `MONITORING.md`

### Validation:
- [ ] Complete Search Console setup
- [ ] Verify Bing WMT
- [ ] Check Page Speed Insights

## Dependencies & Notes:
- Schema implementation depends on JsonLd component
- PDF sitemap requires next-sitemap updates
- TOC implementation needs heading ID system
- All changes compatible with Next.js 14/15
- Consider implementing changes in phases to minimize disruption

### Version Pinning
```json
{
  "dependencies": {
    "date-fns": "3.3.1"  // Pin exact version
  },
  "devDependencies": {
    "xml2js": "0.6.2",
    "fast-glob": "3.3.2",
    "jest": "29.7.0"
  }
}
```

### License Verification
Required licenses to add to `NOTICE`:
- date-fns: MIT
- xml2js: MIT
- fast-glob: MIT

## CI Configuration
Add to `.github/workflows/seo.yml`:
```yaml
name: SEO Validation

on:
  pull_request:
    paths:
      - 'public/**/*.pdf'
      - 'next-sitemap.config.js'
      - 'src/**/*.ts'
      - 'src/**/*.tsx'

jobs:
  seo:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Run SEO tests
        run: pnpm test:seo
        
      - name: Build and compare times
        run: |
          pnpm build
          jq '.total' .next/trace > current-build.json
          if [ -f baseline-build.json ]; then
            diff baseline-build.json current-build.json
            if [ $? -ne 0 ]; then
              echo "Build time changed significantly"
              exit 1
            fi
          fi
```

## Risks:
- Schema validation might require multiple iterations
- PDF sitemap generation might impact build time
- TOC generation might affect page load performance
- Font preloading might increase initial bundle size
- CI might fail if build time increases >15%

## QA Checklist

### PDF Sitemap Validation
- [ ] Run `pnpm build` and verify all PDFs in sitemap.xml
- [ ] Check "Indexable" status in Google Search Console for PDFs
- [ ] Run `pnpm test:seo` to verify PDF coverage
- [ ] Compare build times with baseline (< +15%)
- [ ] Verify date-fns bundle impact (or switch to native)

### General SEO Validation
- [ ] Verify all URLs are lowercase (no AltasCapacidadesIntelectuales.org)
- [ ] Check hreflang tags presence
- [ ] Validate schema markup
- [ ] Test OG images
- [ ] Verify breadcrumbs
- [ ] Check RSS feed
- [ ] Test TOC generation
- [ ] Validate meta tags
- [ ] Measure performance metrics
- [ ] Verify E-E-A-T elements
- [ ] Complete monitoring setup 