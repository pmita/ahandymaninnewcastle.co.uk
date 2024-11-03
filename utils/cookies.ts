// PACKAGES
import Cookies from 'js-cookie';

export const getAuthCookie = () => Cookies.get('__firebase__token');

export const removeAuthCookie = () => Cookies.remove('__firebase__token');

export const setAuthCookie = (token:string) => Cookies.set(
  '__firebase__token', 
  token, {
  expires: 5,
  secure: true,
  path: '/',
  http: true
})