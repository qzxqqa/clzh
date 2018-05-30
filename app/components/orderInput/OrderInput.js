import React, {Component} from 'react';
import  './OrderInput.less';

class OrderInput extends Component {
    render() {
        return(
            <div className='orderInput'>
                <p className='title'>买入金额</p>
                <div className='main'>
                    <span className='icon'>￥</span>
                    <input type="text" className='num' defaultValue='50000'/>
                    <span className='zhongwen'>人民币<b></b>元</span>
                </div>
                <div className='start'>5万元起</div>
            </div>
        )
    }
}

export default OrderInput