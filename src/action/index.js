const actionType = 'test'
export const sendAction = (value) => {
    return {
        type: actionType,
        value: value,
    }
}