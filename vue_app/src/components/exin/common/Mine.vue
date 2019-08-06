<template>
    <div>
        <!--头部相机-->
        <div class="page-wrap">
            <img style="width:30px;height:30px;margin-right:10px;" src="../../../assets/my.png" alt="">
        </div>
        <!--头像信息-->
        <router-link to="/Alter">
            <div class="head-portrait">
            <img src="../../../assets/my.png" alt="" style="width:50px;height:50px;margin-left:20px;">
            <!--微信号-->
            <div class="h-name">
                <h4>manman</h4>
                <p>微信号:yanglinan</p>
            </div>
            </div>
        </router-link>
            
            <!--背景灰色-->  
        <div class="bg" @touchstart="colora()" @touchend="colorb()">
            <div style="height:8px;"></div>
            <ul class="middle">
                <li    :style="bg">
                    <img src="../../../assets/menu2.png" alt="">
                    <span>支付</span>
                </li>
            </ul>
            <div style="height:8px;"></div>
            <div>
           <div class="item">
               <div>
                   <img class="png" src="../../../assets/menu4.png" alt="">
                </div>
                <div class="line">
                   <span>收藏</span>
               </div>
           </div>
           <div class="item">
               <div>
                   <img class="png" src="../../../assets/menu4.png" alt="">
                </div>
                <div class="line">
                   <span>相册</span>
               </div>
           </div>
           <div class="item">
               <div>
                   <img class="png" src="../../../assets/menu4.png" alt="">
                </div>
                <div class="line">
                   <span>卡包</span>
               </div>
           </div>
           <div class="item">
               <div>
                   <img class="png" src="../../../assets/menu4.png" alt="">
                </div>
                <div class="line">
                   <span>表情</span>
               </div>
           </div>
       </div>
            <div style="height:8px;"></div>
            <ul class="middle">
                <li>
                    <img src="../../../assets/menu2.png" alt="">
                    <span>设置</span>
                </li>
            </ul>
        </div>   
    </div> 
</template>
<style scoped>
/*中间部位*/
.png{
     width:30px;
     vertical-align:middle;
     margin:0 15px;
 }
 .item{
     display:flex;
     height:50px;
     line-height:50px; 
     background: #fff;
 }
 .line{
     width:100%;
     border-bottom:1px solid #eee;
 }
.middle{display: flex;
    flex-wrap: wrap;
}
.middle li{
    width:100%;
    height:40px;
    line-height:40px;
    background: #fff;
}
.middle img{
    width:30px;
   vertical-align:middle;
   margin:0 15px;
}
.bg{
    width:100%;
    height:550px;
    background: #eee;
}
/*全部左右边距*/
body{background:red;}

/*相机导航*/
.page-wrap{
    display: flex;
    overflow:auto;/*溢出显示滚动条 */
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }  
  /*头像信息*/
    .head-portrait{
        display: flex;
        flex-wrap: wrap;
        height:85px;
       /* background:rosybrown;*/
    }
    .head-portrait li{
        list-style: none;
    }
    /*微信*/
     .h-name{margin-left:20px;}
    .h-name h4{
        margin-top:2px;
        margin-bottom:10px;
    }
    /*微信号*/
    .h-name p{
        font-size:13px;
        color:#404040;
    }
   
</style>

<script>
//1 引入子组件alter
import TabBarlcon from "./Alter.vue"
//3 调用子组件
    export default{
        data(){
            return {
                bg:{background:"#fff"},
                
            }
        },
        props:{
            //声明接收元素数据
           
        },
        //2 注册alter子组件
       components:{
           // "alter":Alter,
        },
        methods:{
           // headClick(){
           //     console.log("修改信息");
           // },
            pay(){
                console.log("支付")
            },
            colora(e){
                this.bg.background="rgba(157,157,157,0.5)";           
           },
           colorb(e){
                this.bg.background="#fff"; 
           },
        }
    }
</script>



