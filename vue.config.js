import axios from 'axios'

app.get('/api/getTopBanner', function(req, res) {
  const url = 'https://u.y.qq.com/cgi-bin/musics.fcg'
  const jumpPrefix = 'https://y.qq.com/n/yqq/album/'

  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/',
      host: 'y.qq.com'
    },
    params: req.query
  }).then((response) => {
    response = response.data
    if (response.code === 0) {
      const slider = []
      const content = response.focus.data.shelf.v_niche && response.focus.data.shelf.v_niche.v_card
      if (content) {
        for (let i = 1; i < content.length; i++) {
          const item = content[i]
          const sliderItem = {}
          sliderItem.id = item.id
          sliderItem.linkUrl = jumpPrefix + item.cover + '.html'
          sliderItem.picUrl = item.cover
          slider.push(sliderItem)
        }
      }
      res.json({})
    } else {
      res.json(response)
    }
  }).catch((e) => {
    console.log(e)
  })
})