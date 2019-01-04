import request from './request'

export const movieList = (params) => {
  return request({
    url: '/movie/in_theaters',
    method: 'GET',
    params
  })
}