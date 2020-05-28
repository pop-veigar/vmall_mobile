import React, { Component } from 'react';
import './Home.css';
import HomeHead from '../../components/HomeHead';
import Carousel from '../../components/Carousel';
import QuickNav from '../../components/QuickNav';
import CountDowm from '../../components/CountDowm';
import ProductModel from '../../components/ProductModel';
import GoodsModel from '../../components/GoodsModel';
import Advertising from '../../components/Advertising';

import g1 from '../../assets/imgs/goods/HWZHP.png';
import g2 from '../../assets/imgs/goods/RYplay4T.png';
import g3 from '../../assets/imgs/goods/FreeBuds3.png';
import g4 from '../../assets/imgs/goods/MateBook14.png';
import g5 from '../../assets/imgs/goods/HWAIYX.png';
import g6 from '../../assets/imgs/goods/FlyPods3.png';
import g7 from '../../assets/imgs/goods/wifi6+.png';
import g8 from '../../assets/imgs/goods/GMeye.png';
import g9 from '../../assets/imgs/goods/FreeLace.png';
import g10 from '../../assets/imgs/goods/FlyPodsYoung.png';
import g11 from '../../assets/imgs/goods/RybookPro2020.png';
import g12 from '../../assets/imgs/goods/zhpX1.png';



class Home extends Component {
    constructor(props) {
        super(props);
        this.GoodsDetail = [
            { src: g1, title: "华为智慧屏V65i", activity: "新品预订省500" },
            { src: g2, title: "荣耀 Play4T Pro", activity: "会员购机赠耳机" },
            { src: g3, title: "FreeBuds 3", activity: "新品预订价749" },
            { src: g4, title: "荣耀笔记本14", activity: "最高直降400元" },
            { src: g5, title: "华为AI音箱 2", activity: "订金40抵60" },
            { src: g6, title: "FlyPods3真无线耳机", activity: "¥699预订", del: "¥799" },
            { src: g7, title: "Wifi6+路由", activity: "10元抵30元" },
            { src: g8, title: "GM眼镜新品", activity: "新品12期免息" },
            { src: g9, title: "HUAWEI FreeLace 无线耳机（曜石黑）", activity: "提前预订优惠150元" },
            { src: g10, title: "荣耀FlyPods青春版 真无线耳机（铃兰白）", activity: "预订省100元" },
            { src: g11, title: "荣耀笔记本MagicBook Pro 2020  ", activity: "订金100抵500元" },
            { src: g12, title: "荣耀智慧屏X1 65英寸4K超清全面屏", activity: "订金100抵400元" },
        ]
    }

    render() {
        return (
            <div>
                <HomeHead />
                <Carousel />
                <QuickNav />
                <CountDowm />
                <div className='goodsbox'>
                    {this.GoodsDetail.map(
                        (item, index) => {
                            return (<GoodsModel key={index} src={item.src} title={item.title} activity={item.activity} del={item.del} />)
                        }
                    )}
                </div>
                <Advertising />
                <ProductModel />


            </div>
        )
    }
}
export default Home;