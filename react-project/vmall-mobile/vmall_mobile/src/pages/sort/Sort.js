import React,{ Component } from 'react';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import './Sort.css';


class Sort extends Component {
    render(){
        return(
            <div className='sortpage'>
                <SearchBar />
                <SideBar />
            </div>
        )
    }
}
export default Sort;