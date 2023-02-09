import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../redux/store/hook"
import { GetEmpresas } from "./util"


interface SelectOption {
    descricao: string,
    estado: string,
    id: string,
    municipio: string,
    nome: string,

}

export function Form() {
    const [token, setToken] = useState("")
    const [select, setSelect] = useState('')

    const { empresas, cod_select_empresa } = useAppSelector(state => state.mparkLoad)
    const dispatch = useDispatch()

    // const [empresasLoad, setEmpresasLoad] = useState<SelectOption[]>([])

    useEffect(() => {
        if (token !== "") {
            LoadEmpresas()

        }

    }, [token])

    async function LoadEmpresas() {
        const response = await GetEmpresas(token)
        console.log(response)
        if (!response.statusCode) {
            dispatch({ type: "pushEmpresas", payload: response })

        }

    }

   

    return (
        <div >

            <div>

                <input style={{ height: "2rem", width: "50%", paddingLeft: "0.5rem" }} type="text" placeholder="Token" value={token} onChange={(event) => setToken(event.target.value)} />
            </div>

            <div>
                <p>Quantidade de itens no arry redux:{empresas.length}</p>
                <select
                    value={select}

                    onChange={(event) => setSelect(event.target.value)}
                    style={{ height: "2rem", width: "50%", paddingLeft: "0.5rem", marginTop: "2rem" }}>

                    {empresas.map((index)=>{
                        return(
                            <option key={index.id} value={index.id} >{index.nome}</option>

                        )
                    })}

                    {/* {empresas.map((index) => {
                        return (
                            <option key={index} value={index} >{index}</option>

                        )
                    })} */}

                </select>
                    
            </div>
        </div>
    )
}

