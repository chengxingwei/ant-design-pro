import request from '@/utils/request';
import { TableListParams } from './data.d';
import { message } from 'antd';

export async function queryRule(params: TableListParams) {
  const response = request('http://47.100.234.9:9999/security/userinfo/list', {
    params,
  });
  return response;
}

export async function removeRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('http://47.100.234.9:9999/security/userinfo/save', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
