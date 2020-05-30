import React, { Component } from 'react';
import "./MinePage.css";
import Youhui from "../../components/youhuifangshi";
import Dingdan from "../../components/dingdan";



class MinePage extends Component {
    render() {
        return (
            <div className="waimian">
                <div className="hezi">

                    <img src={require("../../assets/imgs/mine/head.png")} alt="" className="headd"></img>

                    <div className="gaibainzi">
                        <h2>登录/注册</h2>

                        <h5 className="xaiohezi"> 签 到 领 积 分</h5>
                    </div>

                    <img src={require("../../assets/imgs/mine/shezhi.png")} alt="" className="shezhii"></img>
                    <img src={require("../../assets/imgs/mine/xinxi.png")} alt="" className="shezhii"></img>




                </div>
                <Youhui />
                <Dingdan />
            </div>

        )
    }
}
export default MinePage;