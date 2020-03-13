import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
   state: {
      goodslist: [
         { name: '大鸡腿',id:1, price: 20, sell: 200, img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
         { name: '香辣鸡腿堡',id:2, price: 30, sell: 1000, img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
         { name: '香脆回锅肉',id:3, price: 18, sell: 2000, img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
         { name: '胖哥红烧肉',id:4, price: 30, sell: 3000, img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
         { name: '清水瓢青瓜',id:5, price: 10, sell: 500, img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
         { name: '西域大丰华',id:6, price: 15, sell: 250, img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
         { name: '南珍无奇饭',id:7, price: 5, sell: 5000, img: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png' }
      ],
      arr: [],
      img: [
         { img: 'http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750' },
         { img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
         { img: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png' },
         { img: 'http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750' },
         { img: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750" },
         { img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
      ],
      avtar: { img: 'https://i.loli.net/2017/08/21/599a521472424.jpg' },
      
   },
   mutations: {
      // Tracklist(state, name) {
      //    let app=[]
      //    for (let list of state.goodslist) {
      //       if (list.name == name) {
      //         if(!app.includes(list.name)){
      //            state.arr.push(list)
      //             app.push(name)
      //         }
      //       }
      //    }
      // },
      addlist(state,item){
         //公司最标准的重复判断 判断id
         // for(let i=0;i<state.goodslist.length;i++){
         //    if(state.goodslist[i].id===item.id){
         //       state.arr.splice(i,1)
         //       break
         //    }
         // }
       
         //如果对象存在
         let i= state.arr.indexOf(item)
         if(i!=-1){
            //数组存在就删除
            state.arr.splice(i,1)
         } 
          state.arr.unshift(item)
         
      },
      amend(state, item) {
         state.avtar.img = item.img
      }
   },
})
export default store