import request from '@/utils/request';
import { FormDataType } from './index';

export async function fakeAccountLogin(params: FormDataType) {
  return request('http://47.100.234.9:9999/security/oauth/token?client_id=client&grant_type=password&username=' + params.username + '&password=' + params.password + '&client_secret=123456', {
    method: 'POST',
    data: {},
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
