const setUrlParam = (param, value) => {
  const params = new URLSearchParams(window.location.search)
  params.set(param, value)
  window.history.pushState(value, value, '?' + params)
}

export default setUrlParam
