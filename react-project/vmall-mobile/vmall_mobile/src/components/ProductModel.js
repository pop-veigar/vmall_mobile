import React, { Component } from 'react';
import '../assets/components_css/ProductModel.css'

class ProductModel extends Component {

    constructor() {
        super();
        this.product = [
            { src: "https://res0.vmallres.com/pimages//product/6901443353279/428_428_F23055642D59B61C0038B9B6015570AC05A35A7E3838809Emp.png", desc: '12期免息|限量赠礼', title: 'HUAWEI Mate 30 Pro 5G ', price: '6399', oldprice: '' },
            { src: "https://res0.vmallres.com/pimages//product/6901443321339/428_428_1563503515663mp.png", desc: '最高优惠300', title: '荣耀9X', price: '1199', oldprice: '¥1399' },
            { src: "https://res0.vmallres.com/pimages//product/6901443387984/428_428_CA16AD0891C031C45C53FB3909E9FF609CCA6C46C2581A76mp.png", desc: '晒图赠好礼', title: 'HUAWEI nova 7 SE 5G ', price: '2399', oldprice: '' },
            { src: "https://res0.vmallres.com/pimages//product/6901443330089/428_428_40B400F6978F30299BAEAD3FB31C97EF8694128D28B041A2mp.png", desc: '最高优惠300元', title: '荣耀Play3', price: '999', oldprice: '¥1299' }
        ]
    }



    render() {
        return (
            <div id='productBox'>
                <h4 id='p_title'>手机</h4>
                <ul id='productUl'>
                    {this.product.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="productBox">
                                    <img src={item.src} alt="" />
                                    <span id='desc'>{item.desc}</span>
                                </div>
                                <p>{item.title}</p>
                                <span>￥{item.price}</span>
                                <del>{item.oldprice}</del>
                            </li>                      
                        )
                    })}
                </ul>
                <ul className='more'>
                {this.product.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="moreBox">
                                    <div id='picbox'> 
                                    <img src={item.src} alt="" />
                                    </div>
                                    <span id='moredesc' className="dadaxiao">{item.desc}</span>
                                </div>
                                <p className="ziticolor">{item.title}</p>
                                <span className="colorr">￥{item.price}</span>
                                <del className="del">{item.oldprice}</del>
                            </li>                      
                        )
                    })}
                </ul>
                <div className="faxian">发现更多手机></div>
            </div>
        )
    }
}
export default ProductModel;