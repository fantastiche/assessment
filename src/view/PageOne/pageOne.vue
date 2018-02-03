<template>
  <scroll ref="wrapper">
    <div class="content">
      <div class="block-one">
        <div class="block-one-title">
          <div>
            <span>培训讲师：</span>
            <span>尹尾</span>
          </div>
          <div>
            <span>培训日期：</span>
            <span>2017-11-18</span>
          </div>
        </div>
        <div class="block-one-intro">评估介绍：</div>
        <div class="block-one-intro-body">您好！感想您参与本次培训。您好！感想您参与本次培训。您好！感想您参与本次培训。您好！感想您参与本次培训。您好！感想您参与本次培训</div>
      </div>
      <div class="block-middle"></div>
      <div class="block-two">
        <div class="block-two-title border-1px">填写人信息</div>
        <div class="block-two-body">
          <div class="block-two-body-content">
            <div>姓名<span>*</span></div>
            <input type="text">
          </div>
          <div class="block-two-body-content">
            <div>门店</div>
            <input type="text">
          </div>
          <div class="block-two-body-content">
            <div>手机<span>*</span></div>
            <input type="text">
          </div>
        </div>
      </div>
      <div class="sub">
        <div @click="next">
          <span>提交</span>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '../../components/Scroll/Scroll'

  export default {
    components: {
      Scroll
    },
    data: function () {
      return {}
    },
    methods: {
      next: function () {
        this.$router.push({
          path: '/pageTwo'
        })
      }
    },
    created: function () {
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .content {
    background: #ffffff;
    position: relative;
    min-height: 100%;
    .dpr-font(14px);
    .block-one {
      padding: 50/@rem 50/@rem 60/@rem 30/@rem;
      margin-bottom: 30/@rem;
      background: #ffffff;
      .block-one-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 60/@rem;
        div {
          display: flex;
          align-items: center;
          span {
            .dpr-font(14px);
            color: #323232;
          }
          span:first-child {
            color: #919191;
          }
        }
      }
      .block-one-intro {
        color: #919191;
        .dpr-font(14px);
        margin-bottom: 25/@rem;
      }
      .block-one-intro-body {
        .dpr-font(14px);
        color: #323232;
        line-height: 58/@rem;
      }
    }
    .block-middle {
      height: 30/@rem;
      width: 100%;
      background: #f7f7f7;
    }
    .block-two {
      background: #ffffff;
      .block-two-title {
        padding: 30/@rem;
        line-height: 28/@rem;
      }
      .block-two-body {
        margin-top: 8/@rem;
        padding-bottom: 290/@rem;
        .block-two-body-content {
          display: flex;
          padding: 0 60/@rem 0 50/@rem;
          margin: 30/@rem 0;
          div {
            width: 90/@rem;
            height: 76/@rem;
            line-height: 76/@rem;
            color: #919191;
            span {
              color: #ff73b7;
            }
          }
          input {
            flex-grow: 1;
            margin-left: 10/@rem;
            height: 76/@rem;
            border: 2/@rem solid #e8e8e8;
            border-radius: 8/@rem;
            .dpr-font(14px);
            color: #323232;
          }
        }
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
</style>
