
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface EmpresasProps {
    id: string
    nome: string
    municipio: string,
    estado: string
    descricao: string
}

interface InitialState{
    empresas:EmpresasProps[],
    cod_select_empresa: string
}

const initialState:InitialState = {
    empresas:[],
    cod_select_empresa: ""
}


export const mParkSlice = createSlice({
    name: 'loadEmpresa',
    initialState,
    reducers:{
        pushEmpresas: (state, action: PayloadAction<EmpresasProps[]>) =>{
            console.log(action.payload)
            state.empresas.push(...action.payload)
        }
    }

})

export const { pushEmpresas } = mParkSlice.actions
export const MparkReducer = mParkSlice.reducer