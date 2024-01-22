import React, { useState } from "react";
import style from "./Cadastro.module.css";
import axios from "axios";

/**
 * Componente Cadastro: Responsável por exibir e processar um formulário de cadastro de pets.
 *
 * Este componente utiliza o estado local para controlar os dados do formulário e faz
 * uma requisição HTTP POST para o endpoint "http://localhost:3000/posts" ao enviar o formulário.
 */

function Cadastro() {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    petName: "",
    petBreed: "",
    petAge: "",
    petDetails: "",
    petPhoto: "",
  });

  //Função handleChange: Atualiza o estado local com os dados do formulário quando um campo é alterado.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Faz uma requisição POST para o servidor com os dados do formulário

    const placeholderImageUrl = "https://via.placeholder.com/150";

    try {
      const response = await axios.post(
        "http://localhost:3000/posts",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao Enviar ao formulário:", error);
    }
  };

  return (
    <div className={style.container}>
      <form className={style["pet-form"]}>
        <label className={style.label} htmlFor="petName">
          Qual o Nome do Pet?
        </label>
        <input
          className={style.input}
          type="text"
          id="petName"
          placeholder="Insira o Nome"
          value={formData.petName}
          onChange={handleChange}
        />

        <label className={style.label} htmlFor="petBreed">
          Qual a Raça do Pet?
        </label>
        <input
          className={style.input}
          type="text"
          id="petBreed"
          placeholder="Insira a Raça"
          value={formData.petBreed}
          onChange={handleChange}
        />

        <label className={style.label} htmlFor="petAge">
          Qual a idade do Pet?
        </label>
        <input
          className={style.input}
          type="number"
          id="petAge"
          placeholder="Insira a Idade"
          value={formData.petAge}
          onChange={handleChange}
        />
        <label className={style.label} htmlFor="petPhoto">
          Foto do Pet
        </label>
        <input
          className={style.input}
          type="text"
          id="petPhoto"
          placeholder="Insira a URL da foto"
          value={formData.petPhoto}
          onChange={handleChange}
        />

        <label className={style.label} htmlFor="petDetails">
          Insira detalhes do Pet
        </label>
        <textarea
          className={style.textarea}
          id="petDetails"
          cols="30"
          rows="10"
          value={formData.petDetails}
          onChange={handleChange}
        ></textarea>

        <button className={style.button} type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
