import { useState } from "react";
export function useReactiveState(initialState) {
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    return {
        get value() {
            return state;
        },
        set value(newState) {
            setState(newState);
        },
        reset: function () {
            setState(initialState);
        },
    };
}
