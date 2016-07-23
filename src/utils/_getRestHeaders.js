// Global Rest Headers.
export default function() {
  let sHeaders = new Headers();
  sHeaders.append('Accept-Language', 'en');
  sHeaders.append('Content-Type', 'application/json;charset=UTF-8');

  return sHeaders;
}
