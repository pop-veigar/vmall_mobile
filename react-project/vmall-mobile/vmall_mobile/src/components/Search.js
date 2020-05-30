import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import "../assets/components_css/Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.HotSearch = [
      'nova 7 5G', '荣耀X10', 'P40 Pro', '荣耀30', 'P40', "荣耀路由3", 'Mate 30', '荣耀30S', '荣耀Play4T', 'Mate XS', '智慧屏', '荣耀V30 5G'
    ]
  }
  render() {
    return (
      <div>
        <div className='serachBox'>
          <div className="goback">&lt;</div>
          <SearchBar
            placeholder="nova 7 5G"
            cancelText='搜索'
            value={this.state.value}
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onCancel={() => console.log('onCancel')}
            showCancelButton
            onChange={this.onChange}
          />
        </div>

        <p className='hotText'>热门搜索</p>
        <div className='HotSearch'>
          <ul>
            {this.HotSearch.map(
              (item, index) => {
                return (<li key={index}>{item}</li>)
              }
            )}
          </ul>
        </div>
        <div className='searchHistory'>
          <span className='history'>搜索历史</span>

          <span className='delHistory'>清空</span>
        </div>
      </div >);

  }
}

export default Search;