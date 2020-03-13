<template>
   <div>
       <div class="demo-avatar" @click="flag=!flag">
        <Avatar  :src="imgavtar.img"/>
</div>

<div v-show="flag"  class="imgList">
   <div  v-for="(item,i) in imglist" :key="i">
     <img @click="clickimg(item)" :src="item.img" alt="">
   </div>
</div>
   </div>

</template>

<script>
export default {
    data(){
         return {
             flag:false
         }
    },
  methods:{
      clickimg(item){
         this.$store.commit('amend',item);
      }
  },
  computed:{
     imglist(){
         return this.$store.state.img
     },
     imgavtar(){
         return this.$store.state.avtar
     }
  }
}
</script>

<style lang="less">
.demo-avatar{
   display: flex;
   justify-content: center;
   margin-top: 10px;
}
.imgList{
    height: 200px;
    width: 100px;
    margin: auto;
    overflow: scroll;
   div{
         display: flex;
      justify-content: center;
   }
    img{
        width: 50px;
        border-radius: 50%;
        height: 50px;
    }
}


</style>