<template>
  <div>
    <div class="demo-avatar">
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>美食</p>
      </div>
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>运动</p>
      </div>
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>电影</p>
      </div>
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>骑行</p>
      </div>
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>速度</p>
      </div>
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>美食</p>
      </div>
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>美食</p>
      </div>
      <div>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <p>美食</p>
      </div>
    </div>
    <div class="spree">
        <div class="title">
            <h1>超值特惠</h1>
        </div>
        <div class="spree-list">
            <div>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </div>
         <div>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </div>
         <div>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        </div>  
        </div>
      
    </div>
    <div class="like-guess">
        <h1>猜你喜欢</h1>
        <div class="guess-love">
           <div class="guessLove-list" v-once v-for="(item,i) in goodsList" :key="i">
               <img :src="item.img" alt="">
               <div @click="clickTrcak(item)" class="guessList">
                   <h1>{{item.name}}</h1>
                   <div>
                       <p>价格￥{{item.price}}</p>
                       <p>销量{{item.sell}}</p>
                   </div>
               </div>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        clickTrcak(item){
         this.$router.push({path:'/Track'})
         this.$store.commit('addlist',item)
        }
    },
    computed:{
      goodsList(){
          return this.$store.state.goodslist
      }
    }
};
</script>

<style lang="less" scoped>
.demo-avatar {
  display: flex;
  flex-wrap: wrap;
  div{
      text-align: center;
  }
  span {
    width: 50px;
    height: 50px;
    margin: 0px 20px 0px 20px;
  }
}
h1{
    font-size: 20px;
    color: red;
}
.spree{
    margin: 10px;
    .spree-list{
    display: flex;
    justify-content: space-around;
}
}

.like-guess{
    h1{
        margin-top: 20px;
        margin-left: 10px;
        color: orangered;
    }
    .guess-love{
        width: 100%;
        height: auto;
        background-color: #f5f5f5;
        padding: 10px;
        .guessLove-list {
            display: flex;
            padding: 10px;
            width: 100%;
            .guessList{
                width: 60%;
                margin-left: 20px;
                h1{
                margin: 0px;
              } 
              div   {
                  display: flex;
                  justify-content: space-between;
              }
            }
            img{
                width: 40%;
                width: 80px;
                height: 80px;
            }
        }
    }
}
</style>