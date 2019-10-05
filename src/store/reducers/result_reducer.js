export default function (state=null, action) {
    switch (action.type) {
        case 'RESULT_TEST':
            // console.log(action.payload)
            return action.payload.question
        default:
            return state
    }
}