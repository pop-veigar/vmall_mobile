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
            <div >
                <div className="QucikNavBox">
                    <div className="TagBox">
                        <ul>
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
                    </div>
                    <div className='NavBar'>
                        <div className='swiper-slid one' >
                            <img src={navbg} alt="" />
                            <p>会员领券</p>
                        </div>
                        <div className='swiper-slid two'>
                            <img src={navbg} alt="" />
                            <p>华为数码</p>
                        </div>
                        <div className='swiper-slid three'>
                            <img src={navbg} alt="" />
                            <p>5G频道</p>
                        </div>
                        <div className='swiper-slid four'>
                            <img src={navbg} alt="" />
                            <p>荣耀数码</p>
                        </div>
                        <div className='swiper-slid five'>
                            <img src={navbg} alt="" />
                            <p>以旧换新</p>
                        </div>
                        <div className='swiper-slid six'>
                            <img src={navbg} alt="" />
                            <p>邀请有礼</p>
                        </div>
                        <div className='swiper-slid seven'>
                            <img src={navbg} alt="" />
                            <p>拼团</p>
                        </div>
                        <div className='swiper-slid eight'>
                            <img src={navbg} alt="" />
                            <p>众测</p>
                        </div>
                        <div className='swiper-slid nine'>
                            <img src={navbg} alt="" />
                            <p>积分商城</p>
                        </div>
                        <div className='swiper-slid ten'>
                            <img src={navbg} alt="" />
                            <p>生态产品</p>
                        </div>
                    </div>
                    <div className='NewsBox'>
                        <ul className='News'>
                            <li>商城头条</li>
                            <li>{this.news}</li>
                            <li>更多</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default QuickNav;

