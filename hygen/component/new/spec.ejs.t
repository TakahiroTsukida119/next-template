---
to: '<%= spec? `components/${category}/${name}/${name}.spec.ts` : null %>'
---

describe('<%= name %>', () => {
  test('is a React instance', () => {})
})
