import React, {Component} from 'react';
import SuccessInfo from '../../components/successInfo/SuccessInfo';
import Btn from '../../components/btn/Btn';

class Complete extends Component {
    clickBtn(){
        window.location.hash='/';
    }
    render() {
        return(
            <div>
                <SuccessInfo/>
                <Btn btnInfo="确定" clickBtn={this.clickBtn.bind(this)}></Btn>
            </div>
        )
    }
}

export default Complete