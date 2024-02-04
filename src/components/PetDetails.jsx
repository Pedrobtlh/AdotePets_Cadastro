import { useParams } from "react-router-dom";
import style from "./PetDetails.module.css";

function PetDetails() {
  const { id, petName, petBreed, petAge, petDetails, petPhoto } = useParams();

  return (
    <div className={style.container}>
      <div className={style.petInfos}>
        <h1>Detalhes do Pet</h1>
        <p>Nome: {decodeURIComponent(petName)}</p>
        <p>Raça: {decodeURIComponent(petBreed)}</p>
        <p>Idade: {decodeURIComponent(petAge)} anos</p>
        <p className={style.petDetails}>
          Detalhes: {decodeURIComponent(petDetails)}
        </p>
      </div>
      <div>
        <img className={style.petImage} src={petPhoto} />
      </div>
    </div>
  );
}

export default PetDetails;
