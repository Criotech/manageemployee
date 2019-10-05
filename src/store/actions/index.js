import axios from 'axios';

export const allQuestions = () => {
    return(dispatch)=>{
        return axios.get("http://localhost:5000/questions").then((response)=>{
            // console.log(response.data)
            dispatch({ type: 'ALL_QUESTIONS', payload: response.data})
        }).catch((err) => {
            console.log("the error is", err)
        })
    }
};

export const startTest = (ques) => {
    return(dispatch)=>{
        return axios.get("http://localhost:5000/questions").then((response)=>{
            // console.log(response.data)
            dispatch({ type: 'START_TEST', payload: response.data})
        }).catch((err) => {
            console.log("the error is", err)
        })
    }
}

export const userAns = (data) => {
     return(dispatch)=>{
        return axios.post(`http://localhost:5000/questions/${data._id}`, {userAns: data.userAns}).then((response)=>{
            // console.log(response.data)
            dispatch({ type: 'USER_ANS', payload: response.data})
        }).catch((err) => {
            console.log("the error is", err)
        })
    }
}

export const resultTest = () => {
    return(dispatch)=>{
        return axios.get("http://localhost:5000/questions").then((response)=>{
            // console.log(response.data)
            dispatch({ type: 'RESULT_TEST', payload: response.data})
        }).catch((err) => {
            console.log("the error is", err)
        })
    }
}

export default {allQuestions, startTest, resultTest }

