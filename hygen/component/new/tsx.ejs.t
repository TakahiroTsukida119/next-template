---
to: <% if (category === 'page') { %>pages/<%= name %>/index.tsx<% } else{ %>components/<%= category %>/<%= name %>/<%= name %>.tsx<% } %>
---

export default function <%= name %>(): JSX.Element {
  return (
    <>
      <div className="<%= h.changeCase.param(name) %>"></div>
    </>
  )
}
