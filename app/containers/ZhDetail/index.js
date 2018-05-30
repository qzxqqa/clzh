import React, {Component} from 'react'
import PieChart from '../../components/echarts/PieChart';
import Btn from '../../components/btn/Btn';

class ZhDetail extends Component {
    clickBtn(){
        window.location.hash='/zhOrder';
    }
    render() {
        return(
            <div>
                <PieChart />
                <Btn btnInfo="去下单" clickBtn={this.clickBtn.bind(this)}></Btn>
            </div>
        )
    }
}

export default ZhDetail