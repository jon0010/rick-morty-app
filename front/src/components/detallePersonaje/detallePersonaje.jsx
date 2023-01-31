import { getCharacterDetail, limpiarDetalle } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DetallePersonaje = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detallePersonaje = useSelector((state) => state.detallePersonaje);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    return () => dispatch(limpiarDetalle());
  }, []);

  return (
    <div>
      <img src={detallePersonaje?.image} />
      <h1>{detallePersonaje?.name}</h1>
      <label>Status:</label>
      <p>{detallePersonaje?.status}</p>

      <label>Gender:</label>
      <p>{detallePersonaje?.gender}</p>

      <label>Origin:</label>
      <p>{detallePersonaje?.origin?.name}</p>

      <button>
        <Link to="/home">Volver</Link>
      </button>
    </div>
  );
};

export default DetallePersonaje;
