import React, { Component } from 'react';
import '../assets/components_css/Advertising.css';
class Advertising extends Component {

    //广告投放区
    constructor() {
        super();
        this.src = [
            'https://res.vmallres.com/pimages//pages/picImages/rqeQJxPNdJBvuCkQkh2q.png',
            "https://res.vmallres.com/pimages//pages/picImages/94UEZmTtTfhS7Ok1Oxcx.jpg",
            "https://res.vmallres.com/pimages//pages/picImages/fMgiHqXVrdXkmSydCNL8.jpg",
            "https://res.vmallres.com/pimages//pages/picImages/5xpM0e3EJ1WwayUHLxEq.png",
            "https://res.vmallres.com/pimages//pages/picImages/MuhztKi17Hi2nxKhEOJ0.jpg",
            "https://res.vmallres.com/pimages//pages/picImages/Qk3GaFmWCcSNpiLVPcdg.jpg",
            "https://res.vmallres.com/pimages//pages/picImages/MB72KCyt7cY0Yjy1O9gW.png"
        ];
        this.ADgoods = [
            {
                src: 'https://res.vmallres.com/pimages//product/6901443393268/428_428_D294EE967746E5FDC3B80AA4E308C064B75F70818BB5BB17mp.png',
                title: 'HUAWEI nova 7 5G ', promotion: "晒单赠好礼", price: '2999'
            },
            { src: "https://res.vmallres.com/pimages//product/6901443404032/428_428_FAD0F5B8C88685D92682D2BD3BDA6641E23B2E2B7D891319mp.png", title: '荣耀 Play4T', promotion: '晒单限量抽好礼', price: '1099' },
            { src: 'https://res.vmallres.com/pimages//product/6901443356133/428_428_3FD06E7E9FCF1C3A6AAA5C15E31867DFC663110C94BEFE35mp.png', title: 'HUAWEI nova 5z', promotion: '4800万AI四摄', price: '1599' }
        ]
    }

    render() {
        return (
            <div>
                <div id='AD'>
                    <ul className='ADbox'>
                        {this.src.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item} alt="" />
                                </li>
                            )
                        }
                        )}

                    </ul>
                    <ul className='promitionGoods'>
                        {this.ADgoods.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.src} alt="" />
                                    <p id='promotion_title'>{item.title}</p>
                                    <p id='promotion_desc'>{item.promotion}</p>
                                    <p id='promotion_price'>￥{item.price}</p>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        )
    }




}
export default Advertising;