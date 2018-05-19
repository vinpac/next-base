export default (app, server) => {
  const page = (pathname, path, props) => {
    const isFunction = typeof props === 'function'
    server.get(path, (req, res) =>
      app.render(req, res, pathname, isFunction ? props(req) : props || req.params),
    )
  }

  page('/home', '/')
  page('/about', '/about')
}
