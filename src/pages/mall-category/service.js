import request from '@/utils/request';

export async function queryItem(params) {
  return request('/api/mall/category', {
    params,
  }).then(resp => {
    resp.total = resp.meta.total
    return resp
  });
}
export async function removeItem(params) {
  return request('/api/mall/category', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addItem(params) {
  return request('/api/mall/category', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateItem(params) {
  return request('/api/mall/category', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
