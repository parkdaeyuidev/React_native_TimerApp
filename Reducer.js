//reducer를 생성, redux ducks 라는 방식으로

//1.Import

//2.Actions 정의 

//타이머를 시작
const START_TIMER = 'START_TIMER';
//타이머를 재시작
const RESTART_TIMER = 'RESTART_TIMER';
//현재 카운트에서 추가하는것
const ADD_SECOND = 'ADD_SECOND';

//3.Action Creators 정의

function startTimer(){
    return {
        type: START_TIMER
    }
}

function restartTimer(){
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}
//4.Reducer 정의

const TIME_DURATION = 10;

const initialState = {
    isPlaying : false,
    elapsedTime : 0,
    timeDuration: TIME_DURATION
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

//5.Reducer Functions 생성

function applyStartTimer(state){
    return {
        ...state,
        isPlaying:true,
    };
}

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying:false,
        elapsedTime: 0
    }
}

function applyAddSecond(state){
    if(state.elapsedTime < TIME_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    }else{
        return {
            ...state,
            isPlaying: false,
            elapsedTime: 0
        }
    }
}

//6.Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}
export { actionCreators};
//7.Export Reducer

export default reducer