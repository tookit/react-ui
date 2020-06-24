import request from '@/utils/request';

export async function queryItem(params) {
  return request('/api/mall/quote', {
    params,
  });
}
export async function removeItem(params) {
  return request('/api/mall/quote', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addItem(params) {
  return request('/api/mall/quote', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateItem(params) {
  return request('/api/mall/quote', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
