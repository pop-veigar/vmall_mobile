import React, { Component } from "react";
import "../css/dingdan.css";
import p1 from '../assets/imgs/mine/pay.png'
import p2 from '../assets/imgs/mine/daishouhuo.png'
import p3 from '../assets/imgs/mine/pingjia.png'
import p4 from '../assets/imgs/mine/huishou.png'
import p5 from '../assets/imgs/mine/tuihuo.png'

import p6 from '../assets/imgs/mine/datu1.jpg'
import p7 from '../assets/imgs/mine/datu2.png'
import p8 from '../assets/imgs/mine/datu3.jpg'



class Dingdan extends Component {
    constructor(props) {
        super(props);
        this.Picc = [
            { src: p1, name: "待付款" },
            { src: p2, name: "待收货" },
            { src: p3, name: "待评价" },
            { src: p4, name: "退换/退款" },
            { src: p5, name: "回收单" }
        ];
        this.Datu = [
            { src: p6 }, { src: p7 }, { src: p8 }
        ]
    }

    render() {
        return (
            <div>
                <div className="bigboxx">
                    <div className="xiaohezii">
                        <h3 >我的订单</h3>
                        <div className="xiangyou">全部订单 ></div>
                    </div>
                    <div >

                        <ul className="bigtupian">

                            {this.Picc.map((item, index) => {
                                return (
                                    <li className="tupian">
                                        <img key={index} src={item.src} alt="" />
                                        <h4>{item.name}</h4>
                                    </li>
                                )
                            })}


                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="juzhongg">为你推荐</h2>
                </div>
                <div className="tuijian">
                    <ul >
                        {this.Datu.map((item, index) => {
                            return (
                                <li className="tupianpp">
                                    <img key={index} src={item.src} alt="" />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="dibubiankuang">
                    <div>登录</div>
                    <div>反馈</div>
                </div>


            </div>

        )
    }



}
export default Dingdan;