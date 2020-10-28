<template>
  <div>
    recommend
  </div>
</template>

<script>
  import { getRecommend } from 'api/recommend'

  export default {
    name: 'recommend',
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
