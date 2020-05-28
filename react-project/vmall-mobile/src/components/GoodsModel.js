import React, { Component } from 'react';
import "../assets/components_css/GoodsModel.css";
class GoodsModel extends Component {

    render() {
        return (
            <div className='bigbox'>
                <div id='goods_Box'>
                    <div className='picBox'>
                        <img src={this.props.src} alt="" />
                    </div>
                    <p>{this.props.title}</p>
                </div>
                <b>{this.props.activity}</b>
            </div>
        )
    }
}
export default GoodsModel;