import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'probetek',
  title: 'Probetek Engineering',
  projectId: 'hzyg8msu',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
