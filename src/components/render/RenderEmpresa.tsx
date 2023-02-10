import { useAppSelector } from "../../redux/store/hook";
import style from "./render.module.css";

export function RenderEmpresa() {
  const { empresas, cod_select_empresa } = useAppSelector(
    (state) => state.mparkLoad
  );

  const selectEmpresa = empresas.find((e) => e.id === cod_select_empresa);
  return (
    <div className={style.contianer}>
      {!!selectEmpresa && (
        <div className={style.card}>
          <h4>{selectEmpresa.nome}</h4>
          <br />

          <div className={style.cardItem}>
            <strong>Descricao</strong>
            <span>{selectEmpresa.descricao}</span>
          </div>

          <div className={style.cardItem}>
            <strong>Estado</strong>
            <span>{selectEmpresa.estado}</span>
          </div>

          <div className={style.cardItem}>
            <strong>Cidade</strong>
            <span>{selectEmpresa.municipio}</span>
          </div>
        </div>
      )}
    </div>
  );
}
