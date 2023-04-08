---
to: '<%= spec? `components/${category}/${name}/${name}.spec.ts` : null %>'
---
import { <%= name %> } from '@/components/<%= category %>/<%= name %>/<%= name %>';

describe('<%= name %>', () => {
  test('is a React instance', () => {})
})
