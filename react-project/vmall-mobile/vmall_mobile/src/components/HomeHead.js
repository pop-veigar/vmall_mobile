import React, { Component } from 'react';
import Vmalllogo from '../assets/imgs/logo_vmall.png';
import Search from '../assets/imgs/search.svg';
import Msg from '../assets/imgs/Msg.svg';
import '../assets/components_css/HomeHead.css';

class HomeHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0
        };
        this.nav = ['推荐', '华为新品', '荣耀5G新品', 'P40系列　∨'];
        this.hotKyeWord = ['超级618', '老用户福利', '荣耀30系列', '荣耀平板V6', 'Nova 7 5G', '荣耀X10'];
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentPosition: this.state.currentPosition + 1
            })
        }, 2000)
    }


    render() {
        return (
            <div>
                <div className='headBox'>
                    <ul className='headUl'>
                        <li className='headLi_1'>
                            <img src={Vmalllogo} alt="" />
                        </li>
                        <li className='headLi_2'>
                            <img src={Search} alt="" />
                            <span className='keywords'> {this.hotKyeWord[this.state.currentPosition % 6]} </span>
                        </li>
                        <li className='headLi_3'>
                            <img src={Msg} alt="" />
                            <span className='headLiMsg' >登录</span>
                        </li>
                    </ul>
                    <div>
                        <ul className='textUl'>
                            {/* {this.nav.map(
                            (item,index) => {
                                return (
                                    <li key={index}> {item.onClick=()=>{
                                        console.log(item);
                                    }} </li>
                                )
                            }
                        )} */}
                            <li>推荐</li>
                            <li>华为新品</li>
                            <li>荣耀5G新品</li>
                            <li>P40系列　∨</li>
                        </ul>
                    </div>
                </div>
                <div className='emptydiv'></div>
            </div>
        )
    }
}
export default HomeHead;