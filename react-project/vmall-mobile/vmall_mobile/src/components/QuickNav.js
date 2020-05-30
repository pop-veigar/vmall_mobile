import React, { Component } from 'react';
import '../assets/components_css/QuickNav.css';
import right from '../assets/imgs/right.svg'
import navbg from '../assets/imgs/navbg.png';

class QuickNav extends Component {
    constructor() {
        super();
        this.news = ['[选品试用]青稞智能锁Q7试用申请中，快来']
    }
    render() {
        return (
            <div className="QucikNavBox">
                <ul className="TagBox">
                    <li>
                        <img src={right} alt="" />
                        <span> 官方商城 </span>
                    </li>
                    <li><img src={right} alt="" />
                        <span> 正品保证 </span>
                    </li>
                    <li><img src={right} alt="" />
                        <span> 售后无忧 </span>
                    </li>
                </ul>
                <ul className='NavBar'>
                    <li className='swiper-slid one' >
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >会员领券</p>
                    </li>
                    <li className='swiper-slid two'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >华为数码</p>
                    </li>
                    <li className='swiper-slid three'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >5G频道</p>
                    </li>
                    <li className='swiper-slid four'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >荣耀数码</p>
                    </li>
                    <li className='swiper-slid five'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >以旧换新</p>
                    </li>
                    <li className='swiper-slid six'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >邀请有礼</p>
                    </li>
                    <li className='swiper-slid seven'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >拼团</p>
                    </li>
                    <li className='swiper-slid eight'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >众测</p>
                    </li>
                    <li className='swiper-slid nine'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >积分商城</p>
                    </li>
                    <li className='swiper-slid ten'>
                        <img src={navbg} alt="" />
                        <p className='NavBar_p' >生态产品</p>
                    </li>
                </ul>

                <ul className='News'>
                    <li>商城头条</li>
                    <li>{this.news}</li>
                    <li>更多</li>
                </ul>
            </div>
        )
    }
}
export default QuickNav;

