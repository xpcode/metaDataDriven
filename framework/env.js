/**
 * Created by c on 2017/3/8.
 */
export default {
  HTTP_METADATA_BYMODULE: '/api/metadata/',
}

export function combine(baseurl, pathname) {
  const separator = (/\/$/.test(baseurl) === false && /^\//.test(pathname) === false) ? '/' : ''
  return Array.prototype.slice.call(arguments, 0).join(separator)
}

function gen(url) {
  return combine('/api-unsure', url)
}
