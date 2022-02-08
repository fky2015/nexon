// your_nextjs_sitemap_generator.js
import sitemap from 'nextjs-sitemap-generator';
import { domain } from 'lib/config';

const url = domain.startsWith('http') ? domain : 'https://' + domain

sitemap({
  baseUrl: url,
  ignoredPaths: ['[fallback]'],
  extraPaths: [''],
  pagesDirectory: '.next/server/pages/',
  targetDirectory: './.next/static/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: process.cwd() + '/next.config.js',
  ignoredExtensions: ['js', 'map'],
  pagesConfig: {
    '': {
      priority: '1',
    },
  },
});

console.log(`✅ sitemap.xml generated!`);