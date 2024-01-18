import React from "react";
import style from "./Cadastro.module.css"; // Importe seu módulo de estilos aqui

function SeuComponente() {
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
        />

        <label className={style.label} htmlFor="petBreed">
          Qual a Raça do Pet?
        </label>
        <input
          className={style.input}
          type="text"
          id="petBreed"
          placeholder="Insira a Raça"
        />

        <label className={style.label} htmlFor="petAge">
          Qual a idade do Pet?
        </label>
        <input
          className={style.input}
          type="number"
          id="petAge"
          placeholder="Insira a Idade"
        />

        <label className={style.label} htmlFor="petDetails">
          Insira detalhes do Pet
        </label>
        <textarea
          className={style.textarea}
          id="petDetails"
          cols="30"
          rows="10"
        ></textarea>

        <button className={style.button} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default SeuComponente;
