import request from '@/utils/request'

const api_name = '/admin/sys/regionWare'

export default {

  getPageList(page, limit,searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    })
  },

  save(regionWare) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: regionWare
    })
  },

  updateStatus(id, status) {
    return request({
      url: `${api_name}/${id}/${status}`,
      method: 'put'
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
