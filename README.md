# react-router-6-scrimba

Created with CodeSandbox

# Learning

## Nested Routes

1. What is the primary reason to use a nested route?

Nested routes are primarily used when we need to share some UI between different pages. Sometimes nested routes can be used to
write the code more succinctly, but that should be exercised with care.

2. What is a "Layout Route"?

Layout route is a helper/wrapper component that provides the shared UI bits for the children components.
It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.

3. What does the <Outlet /> component do? When do you use it?

The Outlet component renders the child component of the matching path.

4. What is an "Index Route"?

Index route is a route at the top level "/" of the layout/parent route.
Index route is a route that matches the path of the parent route.
