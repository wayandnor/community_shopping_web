import request from '@/utils/request'

const api_name = '/admin/product/attrGroup'

export default {

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },

  save(attrGroup) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: attrGroup
    })
  },

  updateById(attrGroup) {
    return request({
      url: `${api_name}`,
      method: 'put',
      data: attrGroup
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
  },

  findAllList() {
    return request({
      url: `${api_name}/all`,
      method: 'get'
    })
  }
}
