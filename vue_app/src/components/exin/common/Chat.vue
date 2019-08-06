<template>
    <div>
        <message v-for="(item,i) of list.data" :key="i"
        :imgurl="require('../../../assets/a_7.png')"
        :title="item.title"
        :subtitle="item.subtitle"
        :sendtime="item.time"
        :id="item.id"
        :itemClick="itemClick"
        class="m1"
        :start="start"
        :end="end"></message>
    </div>
</template>
<script>
//引子组件
import Message from "./Message"
//引入json数据
import messagejson from "../json/messagelist.json"
export default{
    data(){
        return{
            list:messagejson,
        }
    },
    components:{
        "message":Message
    },
    methods:{
        itemClick(id){
            //console.log(id);
        },
        start(e){
            e.currentTarget.className="root_style m2"
            console.log(e.target)
        },
        end(e){
            e.currentTarget.className="root_style m1"
        }
    }
}
</script>
<style scoped>
    .m1{
        background-color:transparent;
    }
    .m2{
        background-color:rgba(200,200,200,0.3)
    }
</style>