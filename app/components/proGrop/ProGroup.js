import React, {Component} from 'react';
import  './ProGroup.less';

class ProGroup extends Component {
    render() {
        return(
            <div className='proGroup'>
                <div className='title'>
                    <h1>您的产品组合</h1>
                    <span>中高风险</span>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>买入明细</th>
                            <th>风险等级</th>
                            <th>购买比例</th>
                            <th>购买金额</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>长信上证港股通指</td>
                            <td>中风险</td>
                            <td>20%</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>中融现金增利货币</td>
                            <td>低风险</td>
                            <td>11%</td>
                            <td>5500</td>
                        </tr>
                        <tr>
                            <td>汇添富恒生指数</td>
                            <td>中高风险</td>
                            <td>59%</td>
                            <td>29500</td>
                        </tr>
                        <tr>
                            <td>汇添富优选回报</td>
                            <td>中风险</td>
                            <td>10%</td>
                            <td>5000</td>
                        </tr>
                        <tr>
                            <td>总计</td>
                            <td>中高风险</td>
                            <td>100%</td>
                            <td>50000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProGroup