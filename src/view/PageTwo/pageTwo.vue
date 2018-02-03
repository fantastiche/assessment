<template>
  <scroll ref="wrapper">
    <div class="content">
      <div class="assessment-wrap" v-for="(item, index) in list">
        <div class="assessment-main-title">{{item.title}}</div>
        <div class="assessment border-1px" v-for="(ass, assIndex) in item.secondQuestions">
          <div class="assessment-title"><span>*</span>课程的目标明确</div>
          <div class="assessment-body">
            <div class="assessment-star">
            <span :class="{'star-none':!star,'star-full':star}" @click="grade(index, assIndex, starIndex)"
                  :src="star.src"
                  v-for="(star, starIndex) in ass.stars"></span>
            </div>
            <div class="assessment-score">
              <span>很好</span>
              <span>10分</span>
            </div>
          </div>
        </div>
      </div>
      <div class="block"></div>
      <div class="sub-anonymity">
        <img src="./unchoose.png" alt="">
        <span>是否匿名提交</span>
      </div>
      <div class="sub">
        <div>
          <span>提交</span>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '../../components/Scroll/Scroll'
  import {detail} from '../../models/common-model'
  import {TS, structureKey} from '../../util/util'

  export default {
    components: {
      Scroll
    },
    data: function () {
      return {
        stars: [
          {
            chosen: false
          },
          {
            chosen: false
          },
          {
            chosen: false
          },
          {
            chosen: false
          },
          {
            chosen: false
          }
        ],
        list: [
          {
            stars: [{chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}]
          },
          {
            stars: [{chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}]
          },
          {
            stars: [{chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}]
          },
          {
            stars: [{chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}, {chosen: false}]
          }
        ]
      }
    },
    methods: {
      grade: function (index, assIndex, starIndex) {
        this.list[index].secondQuestions[assIndex].stars.forEach((item, index, array) => {
          item = false
        })
        for (let i = 0; i <= starIndex; i++) {
//          this.$set(this.list[index].stars, i, !this.list[index].stars[i])
//          console.log(this.list)
          this.list[index].secondQuestions[assIndex].stars[i] = true
          console.log(this.list[index].secondQuestions[assIndex].stars[i])
        }
      }
    },
    created: function () {
      let params = {
        ID: '15',
        DEVICECODE: 'web',
        TS: TS,
        KEY: structureKey('web' + TS + '/eva/detail.do')
      }
      detail(params, (res) => {
        console.log(res)
        this.list = res.pd.fisrtQuestions
        this.list.forEach((item, index, array) => {
          item.secondQuestions.forEach((item1, index1, array1) => {
            item1.stars = [false, false, false, false, false]
          })
        })
      })
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .content {
    .dpr-font(15px);
    min-height: 100%;
    position: relative;
    line-height: 30/@rem;
    .assessment-main-title {
      padding: 30/@rem;
      background: #f7f7f7;
      margin-bottom: 20/@rem;
    }
    .assessment {
      padding: 50/@rem;
      .assessment-title {
        span {
          color: #ff6ab0;
        }
      }
      .assessment-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30/@rem;
        .assessment-star {
          span {
            display: inline-block;
            width: 58/@rem;
            height: 58/@rem;
            margin-left: 50/@rem;
            background-size: 58/@rem;
          }
          span:first-child {
            margin-left: 0;
          }
        }
        .assessment-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          span:first-child {
            color: #ff6ab0;
          }
          span:last-child {
            color: #919191;
            .dpr-font(12px);
            margin-top: 10/@rem;
          }
        }
      }
    }
    .block {
      width: 100%;
      height: 400/@rem;
    }
    .sub-anonymity {
      display: flex;
      align-items: center;
      position: absolute;
      left: 30/@rem;
      bottom: 200/@rem;
      img {
        width: 28/@rem;
        height: 28/@rem;
      }
      span {
        color: #323232;
        margin-left: 30/@rem;
      }
    }
    .sub {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      div {
        padding: 0 30/@rem 30/@rem 30/@rem;
        span {
          display: block;
          background: #ff6ab0;
          border-radius: 12/@rem;
          text-align: center;
          .dpr-font(15px);
          height: 88/@rem;
          line-height: 88/@rem;
          color: #ffffff;
        }
      }
    }
  }

  .star-none {
    background: url("./star-none.png") no-repeat center;
  }

  .star-full {
    background: url("./star-full.png") no-repeat center;
  }
</style>
