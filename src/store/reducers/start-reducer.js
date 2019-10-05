export default function (state=null, action) {
    switch (action.type) {
        case 'START_TEST':
            // console.log(action.payload)
            return action.payload.question
        default:
            return state
    }
}