import { configureStore} from "@reduxjs/toolkit"
import { MparkReducer } from "../redux-toolkit/redux-slice"

export const storeMpark = configureStore({
    reducer:{
        mparkLoad: MparkReducer,
    }
})

export type RootState = ReturnType<typeof storeMpark.getState>