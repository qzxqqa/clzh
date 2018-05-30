import React, {Component} from 'react';
import  './Btn.less';

class Btn extends Component {
    render() {
        return(
            <div className="btn" onClick={this.props.clickBtn}>
                {this.props.btnInfo}
            </div>
        )
    }
}

export default Btn