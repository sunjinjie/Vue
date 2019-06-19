<template>
  <div class="data-card">
    <el-row :span="24">
      <el-col :span="span" v-for="(item,index) in data" :key="index">
        <div class="item">
          <img :src="item.src" class="item-img" />
          <div class="item-text" :style="{color:colorText,backgroundColor:bgText}">
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'card',
  data() {
    return {
      span: 6,
      data: [
        {
          name: '姓名1',
          src: 'static/images/card/boss1.jpg',
          text: '介绍1'
        },
        {
          name: '爱因斯坦',
          src: 'static/images/card/boss2.jpg',
          text: '爱因斯坦1879年出生于德国乌尔姆市的一个犹太人家庭（父母均为犹太人），1900年毕业于苏黎世联邦理工学院，入瑞士国籍。1905年，获苏黎世大学哲学博士学位，爱因斯坦提出光子假设，成功解释了光电效应，因此获得1921年诺贝尔物理奖，1905年创立狭义相对论。1915年创立广义相对论。1955年4月18日去世，享年76岁。'
        },
        {
          name: '牛顿',
          src: 'static/images/card/boss3.jpg',
          text: '在力学上，牛顿阐明了动量和角动量守恒的原理，提出牛顿运动定律。' +
          '在光学上，他发明了反射望远镜，并基于对三棱镜将白光发散成可见光谱的观察，发展出了颜色理论。他还系统地表述了冷却定律，并研究了音速。\n' +
          '在数学上，牛顿与戈特弗里德·威廉·莱布尼茨分享了发展出微积分学的荣誉。他也证明了广义二项式定理，提出了“牛顿法”以趋近函数的零点，并为幂级数的研究做出了贡献。\n' +
          '在经济学上，牛顿提出金本位制度。'
        },
        {
          name: '黑洞',
          src: 'static/images/card/boss4.jpg',
          text: '黑洞是现代广义相对论中，宇宙空间内存在的一种天体。黑洞的引力很大，使得视界内的逃逸速度大于光速。“黑洞是时空曲率大到光都无法从其事件视界逃脱的天体”。'
        }
      ],
      colorText: '#fff',
      bgText: '#2e323f',
      borderColor: '#2e323f'
    }
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
}
</script>

<style scoped>
  div {
    display: block;
  }
  .el-row::after, .el-row::before {
    display: table;
    content: "";
    clear: both;
  }
  .el-col-6 {
    width: 25%;
  }
  [class*=el-col-] {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .data-card .item {
    position: relative;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 230px;
    height: 340px;
    overflow: hidden;
    border-radius: 5px;
    border-color: #fff;
    border-width: 1px;
    border-style: solid;
  }
  .data-card .item-img {
    width: 100%;
    background: red;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-style: none;
  }
  .data-card .item-text {
    position: absolute;
    top: 150px;
    padding: 20px 15px;
    width: 100%;
    height: 340px;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    opacity: 0.9;
    -webkit-transition: top 0.4s;
    transition: top 0.4s;
  }
  .data-card .item:hover .item-text{
    top: 0;
  }
  h3 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  .data-card .item-text > p {
    font-size: 12px;
    line-height: 25px;
    text-indent: 2em;
  }
</style>
