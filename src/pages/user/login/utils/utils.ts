import { parse } from 'qs';

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function setAuthority(response: any) {
  const authority = 'admin';
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  localStorage.setItem('access_token', response.access_token);
  return localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority));
}
