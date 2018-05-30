import React, {Component} from 'react';
import OrderInput from '../../components/orderInput/OrderInput';
import ProGroup from '../../components/proGrop/ProGroup';
import TimeAxis from '../../components/timeAxis/TimeAxis';
import Btn from '../../components/btn/Btn';

class ZhOrder extends Component {
    render() {
        return(
            <div>
                <OrderInput/>
                <ProGroup/>
                <TimeAxis/>
                <Btn btnInfo="去支付" ></Btn>
            </div>
        )
    }
}

export default ZhOrder