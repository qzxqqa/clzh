import React, {Component} from 'react';
import './TimeAxis.less';

class TimeAxis extends Component {
    seekService(){
        window.location.href="gtjayyz://jumpfunc?funid=30006";
    }
    render() {
        return(
            <div>
                <div className='timeAxis'>
                    <div className="item">
                        <div>刚刚</div>
                        <div>输入购买金额，点击“确认下单”后将按照以上基金及购买比例下单</div>
                    </div>
                    <div className="item">
                        <div>15:00前</div>
                        <div>完成支付，在“我的订单”中查看订单状态</div>
                    </div>
                    <div className="item">
                        <div>05-30</div>
                        <div>基金净值确认份额确认</div>
                    </div>
                    <div className="item">
                        <div>05-31</div>
                        <div>可在“理财规划”中查看已确认份额及收益</div>
                    </div>
                    <div className="item">
                        <div>卖出</div>
                        <div>确认份额后下一交易日即可在“我的持仓”中卖出组合或赎回单支基金</div>
                    </div>
                    <div className="item">
                        <div></div>
                        <div>卖出后3个交易日内资金到账</div>
                    </div>
                </div>
                <div className='seekService' onClick={this.seekService.bind(this)}>
                    <p>还不清楚？联系客服问一问</p>
                </div>
            </div>
        )
    }
}

export default TimeAxis