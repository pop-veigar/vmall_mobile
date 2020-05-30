import Home from '../pages/home/Home';
import Sort from '../pages/sort/Sort';
import Discover from '../pages/discover/Discover';
import ShopingCar from '../pages/shopingcar/ShopingCar';
import MinePage from '../pages/mine/MinePage';
// import Search from '../components/Search';


const router = [
    {
        path:'/',
        exact:true,
        component:Home,
        title:'首页'
    },
    {
        path:'/discover',
        component:Discover,
        title:'发现'
    },
    {
        path:'/sort',
        component:Sort,
        title:'分类'
    },
    {
        path:'/shopingcar',
        component:ShopingCar,
        title:'购物车'
    },
    {
        path:'/mine',
        component:MinePage,
        title:'我的'
    }
    ,
    // {
    //     path:'/search',
    //     component:Search,
    //     title:'搜索'
    // }

]
export default router;