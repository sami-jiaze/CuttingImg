import requests from './request'
export function reqUpload (url) {
  return requests({
    url: 'http://124.221.114.203:8080/api/uploadfile',
    method: 'post',
    data: url
  })
}