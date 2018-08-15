import { connect } from 'react-redux'; //나의 컴포넌트를 스토어에 연결할 수 있도록 도와준다.
import { bindActionCreators } from 'redux';
import { actionCreators as timerActions } from '../../Reducer';
import Timer from './presenter';


function mapStateToProps(state){
    const{ isPlaying,elapsedTime, timeDuration} = state;
    return{
        isPlaying,
        elapsedTime,
        timeDuration
    };
}

//dispatch는 action을 reducer로 보내는 function
function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(timerActions.startTimer, dispatch),
        restartTimer: bindActionCreators(timerActions.restartTimer, dispatch),
        addSecond: bindActionCreators(timerActions.addSecond, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);