<!--
 * @Author: Riman
 * @Date: 2021-04-01 15:20:25
 * @LastEditTime: 2021-04-02 09:09:39
 * @LastEditors: Riman
 * @Description: 
-->
<template>
  <div class="about">
    <div class="introduce">
      <div class="introduce-item">
        <p class="title">公司介绍</p>
        <div>
          上海建功思域信息科技有限公司是一家长期致力于为客户提供先进、可靠的信息系统应用解决方案的高新技术企业。公司注册于是上海市浦东新区，注册资金壹仟万人民币。
          上海建功思域信息科技有限公司是一家集IT基础架构实施、系统集成与企业商业化应用解决方案的股份制高新技术企业。我们以创新的技术、完善的应用解决方案和完备的支持体系，与我们的客户一起创造价值、提升效率。
          上海建功思域信息科技有限公司成立于2003年，与Lenovo、HP、Cisco、Commscope、Panduit等多家国际知名IT企业建立了合作伙伴关系，并在增值服务领域形成了自己的核心竞争力。公司现有员工80人，近年来的年均销售额达到6000万人民币。
          随着18年的成长历程，建功为几百家企业提供了优质的服务和解决方案，客户遍及制造业、快速消费品行业、化工行业，其中不乏全球500强企业及国内知名企业，建立了良好的声誉及口碑。
        </div>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <h1 class="title home-service">合作伙伴</h1>
        <div class="text">
          <p>
            上海和天津技术团队70%的核心员工在公司的时间都超过8年并具有微软各项认证、80%的团队成员拥有5年以上的相关经验。
          </p>
          <p>
            我们拥有快速消费品十年以上的业务咨询顾问，并在多年的合作中持续得到用户的认可。我们天津的维护中心提供7X24小时的支持以提高客户的体验。
          </p>
        </div>
        <img src="../../../static/img/bg/about_parter.png" alt="" />
      </div>
      
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about {
  .introduce {
    position: relative;
    height: 60vh;
    background-image: url("../../../static/img/bg/about_bg.jpg");
    background-repeat: no-repeat;
    .introduce-item {
      // float:right;
      line-height: 30px;
      width: 500px;
      position: absolute;
      top: 100px;
      right: 430px;
      .title {
        text-align: left;
        font-size: 20px;
      }
    }
  }

  .main {
    width: 70%;
    margin: 0 auto;
    .content {
      .text {
        line-height: 30px;
      }
      img {
        margin: 25px 0;
      }
      .title {
        line-height: 60px;
        font-size: 30px;
        margin-top: 30px;
      } 
    }
    
  }

}
</style>
