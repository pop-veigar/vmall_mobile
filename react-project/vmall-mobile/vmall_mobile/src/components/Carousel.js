import React, { Component } from 'react';
import "../assets/components_css/Carousel.css";
import qm5G from '../assets/imgs/5g.png';
import HW618 from '../assets/imgs/618.jpg';
import nova7 from '../assets/imgs/nova7.jpg';
import p40 from '../assets/imgs/P40.jpg';
import RyX10 from '../assets/imgs/rongyaoX10.png';
import Ry30 from '../assets/imgs/RY30.jpg';
import super618 from '../assets/imgs/super618.jpg';
import ZHSH from '../assets/imgs/zhihuishenghuo.jpg';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.srcArr = [{ src: qm5G }, { src: HW618 }, { src: nova7 }, { src: p40 }, { src: RyX10 }, { src: Ry30 }, { src: super618 }, { src: ZHSH }];
        this.state = {
            left: 0,
            currentPosition: 0
        }
    }
    componentDidMount() {
        //    setInterval(this.PicMove.bind(this),5000) ;
        setInterval(() => {
            this.setState({
                currentPosition: this.state.currentPosition + 1
            })
        }, 2000)

    }

    //     PicMove() {     
    //             this.setState({
    //                 left:this.state.left -375      
    //     })
    // }



    render() {
        return (
                <div className='carouselBox'>
                    {/* <ul className='carouselUl'>
                    {this.srcArr.map(
                        (item, index) => {
                            return (
                                <li key={index} style={{ transform: `translateX(${this.state.left}px)` }}><img src={item} alt='' /></li>
                            )
                        }
                    )}
                </ul> */}
                    <img src={this.srcArr[this.state.currentPosition % 8].src} alt="" />
                    

                </div>
        )
    }


}
export default Carousel;