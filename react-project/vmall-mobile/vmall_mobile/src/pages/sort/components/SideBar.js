import React, { Component } from 'react';
import './css/SideBar.css';


class SideBar extends Component {
    constructor(props) {
        super(props);
        
        this.targs = ['新品', '华为手机', '荣耀手机', '笔记本&平板', '智能穿戴&VR', '智慧屏', '智能家居', '耳机音响', '专属配件', '通用配件', '生态产品', '增值服务', '智能计算'];

        this.newP = [
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/ffEJ8HPgQ9lQuPpjcJ7a.jpg",
            "https://res.vmallres.com/pimages/pages/mobile/frontCategory/Wfl3BIjCAgKiRsErdL3y.jpg"];
        this.type = [
            'https://res.vmallres.com/pimages/pages/mobile/frontCategory/h3L4I8l2aiagNMadVhDc.png',
            'https://res.vmallres.com/pimages/pages/mobile/frontCategory/pd0V6oNJd2KxNHG57KkY.png',
            'https://res.vmallres.com/pimages/pages/mobile/frontCategory/H8WqOg8YoocPRHxzkMkl.png',
            'https://res.vmallres.com/pimages/pages/mobile/frontCategory/f9izYS4lPGwuwlYURu8M.png',
            'https://res.vmallres.com/pimages/pages/mobile/frontCategory/0pQl3RYd3aHEifcZGPUB.png'];

        this.phone = {
            modeltype: '手机',
            allproduct: [
                { title: 'HUAWEI P40 5G', src: 'https://res.vmallres.com/pimages/product/6901443381395/428_428_3D49606EC05C3B4ED89368F84D0B672CF5B647187113B9A2mp.png' },
                { title: 'HUAWEI P40 Pro 5G', src: 'https://res.vmallres.com/pimages/product/6901443381562/428_428_3DC878A1E93F224EA2FE1EE52785ED4F05586CCA2B1EA98Amp.png' },
                { title: '荣耀X10', src: 'https://res.vmallres.com/pimages/product/6972453163196/428_428_F629DE2D9E2935F90F18F5F2FE21B5B4B72451B835FD54CDmp.png' },
                { title: '荣耀30S', src: 'https://res.vmallres.com/pimages/product/6901443388110/428_428_7FE71A428795890C8C51DA3EF3921ADDD66AF0EDF19BE042mp.png' },
                { title: '华为畅享Z 5G', src: 'https://res.vmallres.com/pimages/product/6972453164919/428_428_9C70CAD1194FC2E1D40612916E164420D767B3E34FA15EE3mp.png' },
                { title: '荣耀30 5G', src: 'https://res.vmallres.com/pimages/product/6901443391943/428_428_5FCE0D08D969B6FEA3D8A1724EF92AC5D996215FCACD0EC6mp.png' },
                { title: '荣耀30 Pro 5G', src: 'https://res.vmallres.com/pimages/product/6901443393640/428_428_9C99CA5C6E5F7A5F813D26AA3D5B70022992EB1A4A10FC49mp.png' },
                { title: 'HUAWEI Mate 30 Pro 5G', src: 'https://res.vmallres.com/pimages/product/6901443353224/428_428_BBB155FB6C09744712785FB380EA616E967F4F8F8CAEC76Amp.png' },
                { title: '荣耀 Play4T Pro', src: 'https://res.vmallres.com/pimages/product/6901443386451/428_428_E008716749454F878551D09785164FA1DD1742C36857F752mp.png' },
                { title: 'HUAWEI nova 7 Pro', src: 'https://res.vmallres.com/pimages/product/6901443393039/428_428_7484AB32CD916B697FED5DE343A4384247FC1B9D7159B022mp.png' },
                { title: 'HUAWEI nova 7 SE', src: 'https://res.vmallres.com/pimages/product/6901443387984/428_428_CA16AD0891C031C45C53FB3909E9FF609CCA6C46C2581A76mp.png' }
            ]
        }
    }


    render() {
        return (
            <div className='sidebarbox'>
                <ul className='sidebar_left'>
                    {this.targs.map((item,index) => {
                        return ( <li className='sidebarLi' key={index}><span>{item}</span></li>)
                    })}
                </ul>
                <ul className='sidebar_right'>
                    <li className='sidebarAD'>
                        {this.newP.map((item, index) => {
                            return (<img key={index} src={item} alt='' />)
                        })}
                    </li>
                    <ul className='modeltype'>
                        <li className='modeltypeLi'>
                            {this.type.map((item, index) => {
                                return (<img key={index} src={item} alt='' />)
                            })}
                        </li>
                    </ul>
                    <ul className='phonebox'>
                        <li><h3>{this.phone.modeltype}</h3></li>
                        {this.phone.allproduct.map((item, index) => {
                            return (<li className='phone' key={index}>
                                <img src={item.src} alt='' />
                                <p className='phonetitle'>{item.title}</p>
                            </li>)
                        })}
                    </ul>
                    <ul className='phonebox'>
                        <li><h3>{this.phone.modeltype}</h3></li>
                        {this.phone.allproduct.map((item, index) => {
                            return (<li className='phone' key={index}>
                                <img src={item.src} alt='' />
                                <p className='phonetitle'>{item.title}</p>
                            </li>)
                        })}
                    </ul>




                </ul>
            </div>
        )
    }
}
export default SideBar;