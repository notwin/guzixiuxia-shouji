import { defineConfig } from 'astro/config';

const repo = 'guzixiuxia-shouji';
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://notwin.github.io',
  output: 'static',
  base: isProd ? `/${repo}/` : '/',
  trailingSlash: 'always'
});
