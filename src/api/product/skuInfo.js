import request from '@/utils/request'

const api_name = '/admin/product/skuInfo'

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
      method: 'get'/api/product
    })
  },

  save(role) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: role
    })
  },

  updateById(role) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
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

  //商品上架
  publish(id, status) {
    return request({
      url: `${api_name}/publish/${id}/${status}`,
      method: 'put'
    })
  },

  //商品审核
  check(id, status) {
    return request({
      url: `${api_name}/check/${id}/${status}`,
      method: 'put'
    })
  },

  //新人专享
  isNewPerson(id, status) {
    return request({
      url: `${api_name}/isNewPerson/${id}/${status}`,
      method: 'put'
    })
  },
}
