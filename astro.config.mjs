// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig( {
  site: 'https://mrjark.com',
  integrations: [ tailwind(), mdx() ],
  /*
  Tiene sentido que sea hybrid porque las páginas que yo tengo son estáticas
  y solo cuando sea necesario tendrá que hacer la carga de las mismas. 
  En casos de APIs y demás, cosa que por ahora no
  */
  output: 'hybrid',
  adapter: vercel()
} );