import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'probetek',
  title: 'Probetek Engineering',
  projectId: 'hzyg8msu',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
