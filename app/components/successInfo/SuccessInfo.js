import React,{Component} from 'react';
import './SuccessInfo.less';

class SuccessInfo extends Component{
    render(){
        return(
            <div className="successInfo">
                <p>
                    <b>下单成功！</b>
                    <span>请在“交易>理财>查询订单”中查看订单状态</span>
                </p>
            </div>
        )
    }
}
export default SuccessInfo;
