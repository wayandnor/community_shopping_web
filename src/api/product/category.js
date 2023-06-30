import request from '@/utils/request'

const api_name = '/admin/product/category'

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

  save(category) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: category
    })
  },

  updateById(category) {
    return request({
      url: `${api_name}`,
      method: 'put',
      data: category
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
