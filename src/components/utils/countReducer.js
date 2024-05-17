const TYPE = {
    CHANGE_VALUE: "change-value",
    CHANGE_COLOR: "change-color",
}

const countReducer = (state, action) => {

    switch (action.type) {
        case TYPE.CHANGE_VALUE:
            return {
                ...state,
                value: state.value + action.payload
            }
        case TYPE.CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            }
        default:
            return state;
    }

    // switch (action) {
    //     case 'increment':
    //         return {
    //             ...state,
    //             value: state.value + 1
    //         }
    //     case 'decrement':
    //         return {
    //             ...state,
    //             value: state.value - 1
    //         }
    //     case 'palegoldenrod':
    //         return {
    //             ...state,
    //             bg: "palegoldenrod"
    //         }
    //     case 'palegreen':
    //         return {
    //             ...state,
    //             bg: "palegreen"
    //         }
    //     default: break;
    // }

    // if (action === 'increment') {
    //     return {
    //         ...state,
    //         value: state.value + 1
    //     }
    // } else if (action === 'decrement') {
    //     return {
    //         ...state,
    //         value: state.value - 1
    //     }
    // } else if (action === 'palegoldenrod') {
    //     return {
    //         ...state,
    //         bg: "palegoldenrod"
    //     }
    // } else if (action === 'palegreen') {
    //     return {
    //         ...state,
    //         bg: "palegreen"
    //     }
    // }

}

export default countReducer;
export {
    TYPE
}