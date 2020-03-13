<template>
<div>
  <router-view />
   <div class="bottom" >
       <!-- <div class="contnet"> -->
          <router-link v-for="(item,i) in list" :key="i" :to="item.to">{{item.name}}</router-link>     
       <!-- </div>   -->
   </div>
</div>
  
</template>

<script>
export default {
   data(){
       return {
           list:[{name:'首页',to:'/Index'},{name:'足迹',to:'/Track'},{name:'我的',to:'/Mine'}]
       }
   }
}
</script>

<style lang="less">
.router-active{
 color: red;
}
 .bottom{
     position: fixed;
     width: 100%;
     height: auto;
     bottom: 0px;
     padding: 10px 0px 10px 0px;
     background-color:orange;
     display: flex; 
    justify-content: space-around;
     a{
         color: #ffffff
     }
     .router-link-active {
    color: red;
  }
 }
</style>