<template>
    <div class="page_head">
        <span>{{leftTitle}}</span>
        <div class="right_head">
            <div @click="search" class="searchdiv">
                <img :src="rightFirstImg" alt="">
            </div>
            <div @click="add3" class="searchdiv">
                <img :src="rightSecondImg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        //左侧文字 右侧两张图片
        props:{
            leftTitle:{default:""},
            rightFirstImg:{default:""},
            rightSecondImg:{default:""},
            search:{type:Function},
            add3:{type:Function}
        },
        data(){
            return{}
        }
    }
</script>
<style scoped>
    /*1.最外层父元素*/
    .page_head{
        display:flex;
        position:fixed;
        z-index:999;
        width:100%;
        justify-content:space-between;/*两端对齐*/
        align-items:center;
        background-color:#393A3E;
        padding-left:7px;
        padding-right:7px;
        height:48px;
        color:#fff;
        font-size:17px;
    }
    /*2.右侧图片区域*/
    .right_head{
        display:flex;
    }
    /*3.图片div样式*/
    .searchdiv{
        display:flex;
        align-items:center;
        height:48px;
    }
    /*4.图片img样式*/
    .searchdiv img{
        width:25px;
    }
    .searchdiv:last-child{
        margin-left:20px;
        margin-right:15px;
    }
</style>