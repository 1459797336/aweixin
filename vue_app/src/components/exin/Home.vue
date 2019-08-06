<template>
    <div class="exin_container">
        <div class="page_wrap">
            <!-- 顶部标题栏 -->
            <titlebar
            :leftTitle="leftTop[i]"
            :rightFirstImg="require('../../assets/titlebar/ic_search.png')"
            :rightSecondImg="require('../../assets/titlebar/ic_add.png')"
            :search="search"
            :add3="add3"></titlebar>
            <!-- 防止顶部溢出 -->
            <div style="margin-top:48px;"></div>
            <!-- 面板组件 -->
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="chat">
                    <chat></chat>
                </mt-tab-container-item>
                <mt-tab-container-item id="addresslist">
                    <addresslist></addresslist>
                </mt-tab-container-item>
                <mt-tab-container-item id="discover">
                    <discover></discover>
                </mt-tab-container-item>
                <mt-tab-container-item id="mine">
                    <mine></mine>
                </mt-tab-container-item>
            </mt-tab-container>
            <!-- 底部导航条 -->
            <mt-tabbar v-model="active" fixed>
                <mt-tab-item id="chat" @click.native="changeState(0)">
                    <tabbaricon :normalImage="require('../../assets/tabbar/ic_weixin_normal.png')"
                    :selectedImage="require('../../assets/tabbar/ic_weixin_selected.png')"
                    :focused="currentIndex[0].isSelected"></tabbaricon>
                    e信
                </mt-tab-item>
                <mt-tab-item id="addresslist" @click.native="changeState(1)">
                    <tabbaricon :normalImage="require('../../assets/tabbar/ic_contacts_normal.png')"
                    :selectedImage="require('../../assets/tabbar/ic_contacts_selected.png')"
                    :focused="currentIndex[1].isSelected"></tabbaricon>
                    通讯录
                </mt-tab-item>
                <mt-tab-item id="discover" @click.native="changeState(2)">
                    <tabbaricon :normalImage="require('../../assets/tabbar/ic_find_normal.png')"
                    :selectedImage="require('../../assets/tabbar/ic_find_selected.png')"
                    :focused="currentIndex[2].isSelected"></tabbaricon>
                    发现
                </mt-tab-item>
                <mt-tab-item id="mine" @click.native="changeState(3)">
                    <tabbaricon :normalImage="require('../../assets/tabbar/ic_me_normal.png')"
                    :selectedImage="require('../../assets/tabbar/ic_me_selected.png')"
                    :focused="currentIndex[3].isSelected"></tabbaricon>
                    我
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
//导入子组件
import TitleBar from "./common/TitleBar.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
import Chat from "./common/Chat.vue"


import AddressList from "./common/AddressList.vue"
import Discover from "./common/Discover.vue"
import Mine from "./common/Mine.vue"
export default {
    data(){
        return{
            //子组件id
            active:"chat",
            //使用数组保存图片焦点状态
            currentIndex:[
                {isSelected:true},
                {isSelected:false},
                {isSelected:false},
                {isSelected:false}
            ],
            leftTop:["e信","通讯录","发现"],
            i:0
        }
    },
    //注册子组件
    components:{
        "titlebar":TitleBar,
        "tabbaricon":TabBarIcon,
        "chat":Chat,

        "addresslist":AddressList,
        "discover":Discover,
        "mine":Mine,
    },
    created(){  //生命周期
        if(this.i==0){
            this.leftTop[0]=this.leftTop[0]+"(11)";
        }
    },
    methods:{
        search(){
            console.log("搜索");
        },
        add3(){
            console.log("添加");
        },
        changeState(n){
            //n为当前按钮下标
            for(var i=0;i<this.currentIndex.length;i++){
                if(n==i){
                    this.currentIndex[i].isSelected=true;
                }else{
                    this.currentIndex[i].isSelected=false;
                }
            }
            this.i=n;
            console.log(this.leftTop[n]);
        }
    }
}
</script>
<style scoped>
    /*.exin_container{
        overflow:hidden;
    }*/
    .page_wrap{
        overflow:auto;
        padding-bottom:60px;
    }
    /*修改tabbar 默认文字颜色*/
    .mint-tabbar>.mint-tab-item{
        color:#999;
    }
    /*修改tabbar 选中文字颜色*/
    .mint-tabbar>.mint-tab-item.is-selected{
        color:#45C018;
        background-color:transparent;
    }
</style>