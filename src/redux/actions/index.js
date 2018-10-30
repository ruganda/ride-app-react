import {ERROR, PROCESSING} from "./types";

export const errorAction = payload =>({
    type:ERROR,
    payload
})

export const processingAction =payload=>({
    type: PROCESSING,
    payload
})
