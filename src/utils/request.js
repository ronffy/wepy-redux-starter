import wepy from 'wepy'

export default function request(url, opts) {
  return wepy.request({
    url,
    method: 'get',
    ...opts,
  }).then(data => {
    if (data.statusCode === 200) {
      return data.data;
    } else {
      return Promise.reject(data)
    }
  })
}
