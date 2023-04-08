---
to: <% if (category === 'page') { %>pages/<%= name %>/index.tsx<% } else{ %>components/<%= category %>/<%= name %>/<%= name %>.tsx<% } %>
---

export const <%= name %> = () => {
  return (
    <>
      <div className="<%= h.changeCase.param(name) %>"></div>
    </>
  )
}
