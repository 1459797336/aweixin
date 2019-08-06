<template>
    <div>
        
        <!--中间内容-->
        <mt-index-list :show-indicator='true'>  
        
            <mt-index-section index="" >
                <!--顶部四项-->                
                <mt-cell id="new_friend" title="新的朋友"></mt-cell>
                <mt-cell id="chatAll" title="群聊"></mt-cell>
                <mt-cell id="icon" title="标签"></mt-cell> 
                <mt-cell id="common" title="公众号"></mt-cell>
            </mt-index-section>
                        
            <mt-index-section v-for="(item,i) of data" :key="i" :index="item" >
                <!--联系人列表-->
                <mt-cell title='爱芝音' @touchstart="colora" @touchend="colorb"></mt-cell>
                <mt-cell title="Air火" @touchstart="colora" @touchend="colorb"></mt-cell>
             </mt-index-section>
        </mt-index-list>
    </div>
</template> 
<script>
    //1.引入顶部导航条 子组件  
    
    export default{
        data(){
            return{
                data:['A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
            }
        },
        methods:{
            mysearch(){
                console.log('搜索...')
            },
            myadd3(){
                console.log('添加+++')
            },    
            colora(e){
                e.currentTarget.style.background="#eee"; 
            },
            colorb(e){
                e.currentTarget.style.background="#fff";
            }         
        }
        
    }
</script> 
<style scope> 
/*公众号 群聊 标签 加好友*/
#new_friend .mint-cell-title:before{
    background: url("../../../assets/ic_new_friends.png");
    background-size:38px 38px;
    background-repeat:no-repeat;
    border-radius:8%;
}
#chatAll .mint-cell-title:before{
    background: url("../../../assets/ic_group_chat.png");
        background-size:38px 38px;
    background-repeat:no-repeat;
    border-radius:8%;
}
#icon .mint-cell-title:before{
    background: url("../../../assets/ic_tag.png");
    background-size:38px 38px;
    background-repeat:no-repeat;
    border-radius:8%;
}
#common .mint-cell-title:before{
    background: url("../../../assets/ic_common.png");
    background-size:38px 38px;
    background-repeat:no-repeat;
    border-radius:8%;
}
/*修改索引默认样式 设置联系人列表样式*/
.mint-indexlist-nav{
    border-left:0!important;
    background-color:rgba(f,f,f,1)
}
.mint-indexlist-content{
    margin-right:0!important;
}
.mint-cell-title:before{
    content: " ";
    display: inline-block;
    height: 40px;
    width: 40px;
    background: url("../../../assets/01.png");
    background-size: 100%;  
    vertical-align: middle;
 }
.mint-cell-text{
    margin-left:5px;    
}
/*.mint-indexlist{
    padding-top:7px;
}*/
.mint-indexsection:first-child>.mint-indexsection-index{
    padding:0px;
}

</style>