import React, { Component } from 'react';
import SearchLogo from '../../../assets/imgs/search.svg';
import MsgLogo from '../../../assets/imgs/Msg.svg';
import './css/SearchBar.css';

// import { Link } from 'react-router-dom';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 0
        };
        this.hotKyeWord = ['超级618', '老用户福利', '荣耀30系列', '荣耀平板V6', 'Nova 7 5G', '荣耀X10'];
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentPosition: this.state.currentPosition + 1
            })
        }, 2000)
    }

    search(){
        // return (<Link to='/search'></Link>)
    }

    render() {
        return (
            <div>
                <div className='searchbar_empty'> </div>
                <div className='searchbarbox'>
                    <ul className='searchbarUl'>
                        <li className='searclbarLi search' onClick={this.search.bind(this)}>
                            <img src={SearchLogo} alt="" />
                            <p>{this.hotKyeWord[this.state.currentPosition % 6]}</p>
                        </li>
                        <li className='searclbarLi msg'>
                            <img src={MsgLogo} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default SearchBar;