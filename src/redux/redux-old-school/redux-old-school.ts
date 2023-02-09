import { createStore } from "redux"

const initialState = {
    mpark:{
        value: []
    }
}

function reducer(state = initialState, action:any){
    switch(action.type){
        case "mpark/carregar":{
            return{
                ...state,
                mpark:{
                    value: ["500501 - Candeias", "500504 - Barcarena"]
                }
            }
        }
        default:{
            return state
        }
    }
}

export const store = createStore(reducer)