import request from '@/utils/request'

const api_name = '/admin/product/attr'

export default {

  getList(groupId) {
    return request({
      url: `${api_name}/list/${groupId}`,
      method: 'get'
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },

  save(attr) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: attr
    })
  },

  updateById(attr) {
    return request({
      url: `${api_name}`,
      method: 'put',
      data: attr
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  removeRows(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  }
}
