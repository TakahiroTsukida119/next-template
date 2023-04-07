---
to: '<%= story? `components/${category}/${name}/${name}.story.ts` : null %>'
---

storiesOf('<%= name %>', module).add('default', () => ({
  components: { <%= name %> },
}))
