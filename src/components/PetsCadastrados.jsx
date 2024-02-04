import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./PetsCadastrados.module.css";
import { Link } from "react-router-dom";

function PetsCadastrados() {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPetsData(response.data);
      } catch (error) {
        console.log("Erro ao Obter Dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pets Para Adoção</h1>
      {petsData.length === 0 ? (
        <h2>Nenhum pet cadastrado!</h2>
      ) : (
        <div className={style.cardContainer}>
          {petsData.map((pet) => (
            <div key={pet.id} className={style.card}>
              <img src={pet.petPhoto} alt={`Foto de ${pet.petName}`} />

              <h2 className={style.cardTitle}>Nome:</h2>
              <p className={style.cardText}>{pet.petName}</p>

              <h2 className={style.cardTitle}>Raça:</h2>
              <p className={style.cardText}>{pet.petBreed}</p>

              <h2 className={style.cardTitle}>Idade:</h2>
              <p className={style.cardText}>{pet.petAge} anos</p>

              <h2 className={style.cardTitle}>Detalhes:</h2>
              <p className={style.cardText}>
                {pet.petDetails.length > 50
                  ? `${pet.petDetails.slice(0, 50)}...`
                  : pet.petDetails}
              </p>

              <Link
                to={`/pet/${pet.id}/${encodeURIComponent(
                  pet.petName
                )}/${encodeURIComponent(pet.petBreed)}/${encodeURIComponent(
                  pet.petAge
                )}/${
                  pet.petDetails ? encodeURIComponent(pet.petDetails) : ""
                }/${pet.petPhoto ? encodeURIComponent(pet.petPhoto) : ""}`}
                className={style.buttonDetails}
              >
                Ver Mais
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PetsCadastrados;
