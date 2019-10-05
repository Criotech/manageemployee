export default function (state=null, action) {
    switch (action.type) {
        case 'ALL_QUESTIONS':
                // console.log(action.payload)               
                return action.payload
        default:
            return state
    }
}