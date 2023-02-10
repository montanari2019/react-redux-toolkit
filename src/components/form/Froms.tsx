import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store/hook";
import { GetEmpresas } from "./util";
import { EMPRESAS } from "../../ultil";
import {
  pushEmpresas,
  selectIdEmpresa,
} from "../../redux/redux-toolkit/redux-slice";

interface SelectOption {
  descricao: string;
  estado: string;
  id: string;
  municipio: string;
  nome: string;
}

export function Form() {
  const [token, setToken] = useState("");

  const { empresas, cod_select_empresa } = useAppSelector(
    (state) => state.mparkLoad
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: "pushEmpresas", payload: EMPRESAS });
    dispatch(pushEmpresas(EMPRESAS));
  }, []);

  async function LoadEmpresas() {
    const response = await GetEmpresas(token);
    console.log(response);
    if (!response.statusCode) {
      dispatch({ type: "pushEmpresas", payload: [] });
    }
  }

  return (
    <div>
      <div>
        <input
          style={{ height: "2rem", width: "50%", paddingLeft: "0.5rem" }}
          type="text"
          placeholder="Token"
          value={token}
          onChange={(event) => setToken(event.target.value)}
        />
      </div>

      <div>
        <p>Quantidade de itens no arry redux: -- {empresas.length}</p>
        <select
          value={cod_select_empresa}
          onChange={(event) => dispatch(selectIdEmpresa(event.target.value))}
          style={{
            height: "2rem",
            width: "50%",
            paddingLeft: "0.5rem",
            marginTop: "2rem",
          }}
        >
          {empresas.map((index) => {
            return (
              <option key={index.id} value={index.id}>
                {index.nome}
              </option>
            );
          })}

          {/* {empresas.map((index) => {
                        return (
                            <option key={index} value={index} >{index}</option>

                        )
                    })} */}
        </select>
      </div>
    </div>
  );
}
