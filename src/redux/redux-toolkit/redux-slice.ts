import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EmpresasProps {
  id: string;
  nome: string;
  municipio: string;
  estado: string;
  descricao: string;
}

interface InitialState {
  empresas: EmpresasProps[];
  cod_select_empresa: string;
}

const initialState: InitialState = {
  empresas: [],
  cod_select_empresa: "",
};

export const mParkSlice = createSlice({
  name: "loadEmpresa",
  initialState,
  reducers: {
    pushEmpresas: (state, action: PayloadAction<EmpresasProps[]>) => {
      debugger;
      //   state.empresas.push(...action.payload);
      state.empresas = action.payload;
    },
    selectIdEmpresa: (state, action: PayloadAction<string>) => {
      state.cod_select_empresa = action.payload;
    },
  },
});

export const { pushEmpresas, selectIdEmpresa } = mParkSlice.actions;
export const MparkReducer = mParkSlice.reducer;
