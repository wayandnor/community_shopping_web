import request from '@/utils/request'

const api_name = '/admin/activity/activityInfo'

export default {

  getPageList(page, limit) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get'
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },

  save(activityInfo) {
    return request({
      url: `${api_name}`,
      method: 'post',
      data: activityInfo
    })
  },

  updateById(role) {
    return request({
      url: `${api_name}`,
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

  findActivityRuleList(id) {
    return request({
      url: `${api_name}/rules/${id}`,
      method: 'get'
    })
  },
  saveActivityRule(rule) {
    return request({
      url: `${api_name}/rules`,
      method: 'post',
      data: rule
    })
  },

  findSkuInfoByKeyword(keyword) {
    return request({
      url: `${api_name}/findSkuInfoByKeyword/${keyword}`,
      method: 'get'
    })
  }
}
