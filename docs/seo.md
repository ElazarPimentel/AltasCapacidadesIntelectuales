# SEO Documentation

## Implementation Details

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

## SEO Implementation

# 🚀 SEO Implementation for Universal Search Engine Indexation

## ✅ Completed Implementation

### 1. **Sitemap and Robots.txt**
- ✅ `sitemap.xml` automatically generated at build time using `next-sitemap`
- ✅ `robots.txt` with directives for all crawlers including AI bots
- ✅ Explicit permissions for PerplexityBot, GPTBot, ClaudeBot, etc.
- ✅ Accessible at: 
  - `https://altascapacidadesintelectuales.org/sitemap.xml`
  - `https://altascapacidadesintelectuales.org/robots.txt`

### 2. **Enhanced Metadata**
- ✅ Comprehensive metadata utility in `src/lib/metadata.ts`
- ✅ Open Graph and Twitter Card support
- ✅ Page-specific metadata for all routes
- ✅ Canonical URLs and proper meta tags
- ✅ Language and locale specification (es-AR)

### 3. **Structured Data (JSON-LD)**
- ✅ Website schema for enhanced rich snippets
- ✅ Organization schema for entity recognition
- ✅ Properly formatted structured data in `<head>`

### 4. **IndexNow Integration**
- ✅ IndexNow key file: `/f1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.txt`
- ✅ API endpoint: `/api/indexnow` for automated URL submission
- ✅ Ready for Bing Webmaster Tools integration

### 5. **Crawler-Friendly Architecture**
- ✅ SSR/SSG implementation (no JavaScript required for content)
- ✅ Clean HTML structure with semantic markup
- ✅ All navigation using Next.js `<Link>` components
- ✅ Proper heading hierarchy (H1, H2, H3...)

### 6. **Performance & Accessibility**
- ✅ Optimized build with static generation
- ✅ Proper font loading with `display: swap`
- ✅ SCSS styling with CSS variables
- ✅ Responsive design with mobile-first approach

## 🎯 Next Steps for Complete Indexation

### Google Search Console
1. Verify ownership at https://search.google.com/search-console/
2. Submit sitemap: `https://altascapacidadesintelectuales.org/sitemap.xml`
3. Request indexing for main pages manually
4. Monitor indexation status and fix any issues

### Bing Webmaster Tools
1. Verify ownership at https://www.bing.com/webmasters/
2. Submit sitemap and enable IndexNow
3. Use IndexNow API for real-time updates:
   ```bash
   curl -X POST https://altascapacidadesintelectuales.org/api/indexnow \
   -H "Content-Type: application/json" \
   -d '{"urls": ["https://altascapacidadesintelectuales.org/"]}'
   ```

### Perplexity AI Indexation
- ✅ **Already optimized**: Perplexity uses Bing's index
- ✅ **No JavaScript dependency**: Content is fully SSR
- ✅ **Crawler permissions**: PerplexityBot explicitly allowed
- ✅ **Clean HTML**: All content accessible to crawlers

### Other Search Engines
- **DuckDuckGo**: Automatically indexed via Bing
- **Brave Search**: Uses multiple sources including Bing
- **Yandex**: May require manual submission at https://webmaster.yandex.com/

## 📊 Monitoring and Verification

### Tools to Use
1. **Google Search Console**: Primary indexation monitoring
2. **Bing Webmaster Tools**: Microsoft ecosystem indexation
3. **Site crawlers**: Use tools like Screaming Frog to verify
4. **Search operators**: Test with `site:altascapacidadesintelectuales.org`

### Key Metrics to Track
- Pages indexed vs. submitted
- Crawl errors and warnings
- Search appearance (rich snippets)
- Click-through rates from search results

## 🔧 Technical Details

### Built With
- **Next.js 15.3.3**: SSR/SSG for crawler accessibility
- **next-sitemap**: Automatic sitemap generation
- **TypeScript**: Type-safe implementation
- **SCSS**: Styling without JavaScript dependencies

### Key Files
```
├── next-sitemap.config.js          # Sitemap configuration
├── src/lib/metadata.ts             # Metadata utility
├── src/components/JsonLd.tsx       # Structured data
├── src/app/robots.txt/route.ts     # Dynamic robots.txt
├── src/app/api/indexnow/route.ts   # IndexNow integration
└── public/
    ├── sitemap.xml                 # Generated sitemap
    ├── robots.txt                  # Generated robots.txt
    └── f1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.txt  # IndexNow key
```

### Deployment Notes
- ✅ Build process includes automatic sitemap generation
- ✅ All metadata is statically generated at build time
- ✅ No client-side dependencies for SEO features
- ✅ Vercel deployment optimized for search engines

## 🎉 Success Indicators

Your site is now technically ready for universal indexation:

1. **Google**: Will index via sitemap submission and natural crawling
2. **Bing**: Enhanced with IndexNow for real-time updates
3. **Perplexity**: Will access content via Bing's index and direct crawling
4. **DuckDuckGo/Brave**: Automatically included via Bing federation
5. **Other AI search engines**: Can access clean HTML content

The implementation ensures maximum compatibility with all major search engines and AI-powered search platforms. 