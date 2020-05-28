import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../assets/components_css/TabBarList.css'
import shopingcar from '../assets/imgs/shopingcar.svg';
import s_shopingcar from '../assets/imgs/s_shopingcar.svg';
import Mine from '../assets/imgs/Mine.svg';
import s_mine from '../assets/imgs/s_mine.svg';
import home from '../assets/imgs/home.svg';
import s_home from '../assets/imgs/s_home.svg';
import sort from '../assets/imgs/sort.svg';
import s_sort from '../assets/imgs/s_sort.svg';
import discover from '../assets/imgs/discover.svg';
import s_discover from '../assets/imgs/s_discover.svg';



class TabBarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    return (
        <div className='tabBarBox'>
      <TabBar        
        unselectedTintColor="#949494"
        tintColor="red"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="首页"
          key="home"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${home}) center center /  21px 21px no-repeat`
          }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${s_home}) center center /  21px 21px no-repeat`
          }}
          />
          }
          selected={this.props.history.location.pathname === '/'}
          onPress={() => {
            this.props.history.push('/');
          }}
        >

        </TabBar.Item>
        <TabBar.Item
          title="分类"
          key="sort"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${sort}) center center /  21px 21px no-repeat`
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${s_sort}) center center /  21px 21px no-repeat`
            }}
            />
          }
          selected={this.props.history.location.pathname === '/sort'}
          onPress={() => {
            this.props.history.push('/sort');
          }}
        >

        </TabBar.Item>
        <TabBar.Item
          title="发现"
          key="discover"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${discover}) center center /  21px 21px no-repeat`
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${s_discover}) center center /  21px 21px no-repeat`
            }}
            />
          }
          selected={this.props.history.location.pathname === '/discover'}
          onPress={() => {
            this.props.history.push('/discover');
          }}
        >

        </TabBar.Item>
        <TabBar.Item
          title="购物车"
          key="shopingcar"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${shopingcar}) center center /  21px 21px no-repeat`
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${s_shopingcar}) center center /  21px 21px no-repeat`
            }}
            />
          }
          selected={this.props.history.location.pathname === '/shopingcar'}
          onPress={() => {
            this.props.history.push('/shopingcar');
          }}
        >

        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="mine"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${Mine})center center /  21px 21px no-repeat`
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: `url(${s_mine}) center center /  21px 21px no-repeat`
            }}
            />
          }
          selected={this.props.history.location.pathname === '/mine'}
          onPress={() => {
            this.props.history.push('/mine');
          }}
        >

        </TabBar.Item>
      </TabBar>
      </div>
    )
  }
}

export default TabBarList;