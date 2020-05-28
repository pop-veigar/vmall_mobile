import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lightning from "../assets/imgs/light_1.svg";
import '../assets/components_css/CountDowm.css';
class CountDowm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: "",
            hour: "",
            minute: "",
            seconds: "",
            left: 0,
            lefttime: ""
        };
        this.deadLine = "2020/05/28 18:00:00";
        this.countTime = setInterval(this.countDowm.bind(this), 1000);
    }
    componentDidMount() {
        this.dom = document.getElementById('desc');
    }
    timeOut() {
        console.log(this.state.lefttime)
        if (this.state.lefttime <= 0) {
            console.log(this)
            // clearInterval(this.countTime);
            let a = ReactDOM.findDOMNode(this.dom);
            a.innerHTML = "本场已结束";
        }
    }
    countDowm() {
        function addZero(i) {
            return i < 10 ? '0' + i : i + ''
        }
        let nowtime = new Date();
        let endtime = new Date(this.deadLine);
        let lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000, 10);
        if (lefttime > 0) {
            let d = parseInt(lefttime / (24 * 60 * 60), 10)
            let h = parseInt(lefttime / (60 * 60) % 24, 10);
            let m = parseInt(lefttime / 60 % 60, 10)
            let s = parseInt(lefttime % 60, 10);
            let day = addZero(d);
            let hour = addZero(h);
            let minute = addZero(m);
            let seconds = addZero(s);
            this.setState({
                day: day,
                hour: hour,
                minute: minute,
                seconds: seconds,
                lefttime: lefttime
            })
        } else {
            clearInterval(this.countTime);
            this.setState({
                day: "00",
                hour: "00",
                minute: '00',
                seconds: '00',
                lefttime: '00'
            })
        }
    }
    render() {
        // console.log(this.state)
        return (
                <div className='countDowm'>
                    <p id='countDowmdesc'>限时购</p>
                    <div className='logoBox'>
                        <img className='logo' src={lightning} alt="小米闪购" />
                    </div>
                    <div className='timerBox'>
                        <span className='timer-H'>{this.state.hour}</span>:
                    <span className='timer-M'>{this.state.minute}</span>:
                    <span className='timer-S'>{this.state.seconds}</span>
                        <span>后结束</span>
                    </div>
                </div>
        )
    }
}
export default CountDowm;