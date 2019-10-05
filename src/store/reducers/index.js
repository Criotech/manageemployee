import { combineReducers } from 'redux';
import Questions from './reducer-questions';
import Test from './start-reducer';
import Result from './result_reducer'


const allReducers = combineReducers({
    questions: Questions,
    test: Test,
    result: Result
})

export default allReducers;