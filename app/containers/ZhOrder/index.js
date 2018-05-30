import React, {Component} from 'react';
import OrderInput from '../../components/orderInput/OrderInput';
import ProGroup from '../../components/proGrop/ProGroup';
import TimeAxis from '../../components/timeAxis/TimeAxis';
import Btn from '../../components/btn/Btn';

class ZhOrder extends Component {
    clickBtn(){
        window.location.hash='/complete';
    }
    render() {
        return(
            <div>
                <OrderInput/>
                <ProGroup/>
                <TimeAxis/>
                <Btn btnInfo="去支付" clickBtn={this.clickBtn.bind(this)}></Btn>
            </div>
        )
    }
}

export default ZhOrder