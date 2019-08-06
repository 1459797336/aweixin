<template>
    <div class="root_style" @click="itemClick(id)" :id="id" @touchstart="start" @touchend="end">
        <div class="portrait">
            <img :src="imgurl" alt="">
        </div>
        <div class="txt">
            <div class="left_txt">
                <span class="title">{{title}}</span>
                <span class="subtitle">{{subtitle}}</span>
            </div>
            <span class="sendtime">{{sendtime}}</span>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        //声明接收元素数据
        imgurl:{default:""},
        title:{default:""},
        subtitle:{default:""},
        sendtime:{default:""},
        id:{default:""},
        itemClick:{type:Function},
        start:{type:Function},
        end:{type:Function},
    },
    data(){
        return{}
    }
}
</script>
<style scoped>
    .root_style{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .txt{
        width:100%;
        height:55px;
        display:flex;
        justify-content:space-between;
        border-bottom:1px solid #d9d9d9;
        padding-top:16px;
    }
    .left_txt{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        margin-left:3px;
    }
    .title{
        color:#000;
        font-size:17px;
        margin-top:-4px;
        font-weight:bolder;
    }
    .subtitle{
        color:gray;
        margin-bottom:12px;
        font-size:0.9rem;
    }
    .sendtime{
        color:gray;
        font-size:0.8rem;
        padding-right:13px;
        margin-top:-3px;
    }
    .portrait{
        display:flex;
        margin:9px;
    }
    .portrait img{
        width:55px;
        height:55px;
        border-radius:8%;
    }
</style>