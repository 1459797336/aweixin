<template>
    <div class="bg">
        <!-- 朋友圈 -->
        <div class="friend" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_friends_circle.png" alt="">
            </div>
            <div>
                <span>朋友圈</span>
            </div>
        </div>
        <!--间隔-->
        <div class="zone"></div>
        <!--相册-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_scan.png" alt="">
            </div>
            <div class="line">
                <span>扫一扫</span>
            </div>
        </div>
        <!--摇一摇-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_shake.png" alt="">
            </div>
            <div>
                <span>摇一摇</span>
            </div>
        </div>
        <!--间隔-->
        <div class="zone"></div>
        <!--看一看-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_game.png" alt="">
            </div>
            <div class="line">
                <span>看一看</span>
            </div>
        </div>
        <!--搜一搜-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_program.png" alt="">
            </div>
            <div>
                <span>搜一搜</span>
            </div>
        </div>
        <!--间隔-->
        <div class="zone"></div>
        <!--附近的人-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_nearby.png" alt="">
            </div>
            <div>
                <span>附近的人</span>
            </div>
        </div>
        <!--间隔-->
        <div class="zone"></div>
        <!--购物-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_wallet.png" alt="">
            </div>
            <div class="line">
                <span>购物</span>
            </div>
        </div>
        <!--游戏-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_collect.png">
            </div>
            <div>
                <span>游戏</span>
            </div>
        </div>
        <!--间隔-->
        <div class="zone"></div>
        <!--小程序-->
        <div class="item" @touchstart="colora" @touchend="colorb">
            <div>
                <img class="png" src="../../../assets/ic_program.png" alt="">
            </div>
            <div>
                <span>小程序</span>
            </div>
        </div>
        <!--间隔-->
        <div class="zoned"></div>
    </div>
</template>
<script>
export default{
    data(){
        return{}
    },
    methods:{
        colora(e){
            e.currentTarget.style.background="#eee"; 
        },
        colorb(e){
            e.currentTarget.style.background="#fff";
        }
    }
}
</script>
<style scoped>
.bg{
    background-color:#eee;
}
 .friend{
     display:flex;
    
     height:50px;
     line-height:50px;
     background-color:#fff;
 }
 .png{
     width:30px;
     vertical-align:middle;
     margin:0 15px;
 }
 .zone{
     height:8px;
     background:#eee !important;
 }
 .item{
     display:flex;
     height:50px;
     line-height:50px;
     background-color:#fff;
 }
 .line{
     width:100%;
     border-bottom:1px solid #eee;
 }
 .zoned{
     height:40px;
     background:#eee; 
 }
</style>