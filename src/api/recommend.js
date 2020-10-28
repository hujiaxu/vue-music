import { debug } from 'webpack'
import { commonParams } from './config'
import axios from 'axios'

export function getRecommend () {
  const url = debug ? '/api/getTopBanner' : 'http://ustbhuangyi.com/music/api/getTopBanner'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq.json',
    hostUin: 0,
    needNewCode: 0,
    inCharset: 'utf8',
    format: 'json',
    '-': 'recom' + (Math.random() + '').replace('0.', ''),
    data: {}
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data
  })
}