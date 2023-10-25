<template>
  <el-card>
    <div class="shop">
      <div class="shopInfo">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="哈尔滨道里区百年阜康旗舰店"
          placement="top"
        >
          <div class="shopname line-overflow">哈尔滨道里区百年阜康旗舰店</div>
        </el-tooltip>
        <div class="evaluate">
          <router-link to="/" class="evaluateLink">
            <div class="label">综合服务</div>
            <div class="score">9.9</div>
            <div class="info">超62.3%商家</div>
          </router-link>
          <router-link to="/" class="evaluateLink">
            <div class="label">用户评价</div>
            <div class="score">9.9</div>
            <div class="info">落后62.3%商家</div>
          </router-link>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.shop {
  .shopInfo {
    width: 100%;
    // width: 221px;
    background-color: #ffedd5;
    border-radius: 8px;
    padding: 16px;
    .shopname {
      font-size: 22px;
      margin-bottom: 15px;
    }
    .evaluate {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      height: 68px;
      .evaluateLink {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 15px;
        &:hover {
          opacity: 0.7;
        }
        .label {
          color: #646464;
          font-size: 14px;
        }
        .score {
          font-size: 28px;
          color: #fe6200;
          font-weight: 700;
        }

        .info {
          color: #646464;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
