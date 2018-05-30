import React, {Component} from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

import './PieChart.less'

class PieChart extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return(
            <section id='pieChart'>
                <h2>行业分布&nbsp;&nbsp;<span>您的风险等级：积极型</span></h2>
                <div ref='pieChart' style={{height: '180px'}}></div>
            </section>
        )
    }
}

export default PieChart