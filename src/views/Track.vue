<template>
  <div>
       <div class="like-guess">
        <h1>猜你喜欢</h1>
        <div class="guess-love">
           <div class="guessLove-list" v-for="(item,i) in goodsTrackList" :key="i">
               <img :src="item.img" alt="">
               <div  class="guessList">
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
  computed:{
    goodsTrackList(){
      return this.$store.state.arr
    }
  }
}
</script>

<style lang="less" scoped>
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