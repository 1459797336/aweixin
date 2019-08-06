<template>
    <div>
        <div class="mine">
            <p>个人信息</p>
        </div>
        <div class="alter" style="height:60px;line-height:60px;">
            <p>头像</p>
            <div>
                <img src="../../../assets/my.png" alt="">
            </div> 
        </div>
        <div class="alter">
            <mt-field id="s" label="用户名" placeholder="                       请输入用户名"></mt-field>
        </div>
        <div class="alter" style="border-bottom:1px solid #D9D9D9;">
            <p>微信号</p>
            <p>yanglinan</p> 
        </div>
        <div class="alter" style="border-bottom:1px solid #D9D9D9;">
            <p>我的二维码</p>
            <div>
                <img style="width:20px;height:20px"  src="../../../assets/my.png" alt="">
            </div> 
        </div>
        <div class="alter">
            <p>更多</p>
        </div>
        <div class="mine-bg">
            <div style="height:1px;"></div>
            <div style="width:100%;background:#fff;">
                <div style="border:none;" class="alter">
                <p>我的地址</p>
            </div>
            
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
           
        },
        data(){
            return {
                text: '',
            }
        },
    }
</script>
<style scoped>
#s{
    width:335px;
}
p{
    margin-left:10px;
}
.mine-bg{
    background:#eee;
    height:300px;
}
/*个人信息*/
.mine{
    text-align: center;
    height:50px;
    background:#eee;
    line-height:50px;
}
/*修改信息*/
.alter{
    width:335px;
    height:40px;
    margin:10px 10px 0;
    display: flex;
    line-height:40px;
    justify-content: space-between;
}
/*头像*/
.alter>p{
     margin-right:30px;
}
.alter>div>img{
    width:50px;height:50px;
    margin-right:25px;
}
</style>
