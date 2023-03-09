import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

export function Status() {
  const [newAnswers, setNewAnswers] = useState({
    content: "",
    img: "https://github.com/JoseAlmiroNeto.png",
    name: "José Almiro",
    hashtag: "@joséNeto",
  });
  const [answers, setAnswers] = useState([
    {
      content: "na outra vez tambem foi a msm coisa.",
      img: "https://i.pinimg.com/474x/73/50/e6/7350e6498c0b754f2fd718e16c677356.jpg",
      name: "Julia Fernandes",
      hashtag: "@julialol33",
    },
    {
      content: "eu ouvi falar que nao é bem assim",
      img: "https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg",
      name: "Bruna Aguida",
      hashtag: "@brunaguida56",
    },
    {
      content: "Concordo plenamente!!",
      img: "https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg",
      name: "Carolina Gardol",
      hashtag: "@Caroldol",
    },
    {
      content: "Sera msm?",
      img: "https://i.pinimg.com/originals/b5/dc/a9/b5dca9fac1361023498d6cb66e4d8b13.jpg",
      name: "Fabio Shivtz",
      hashtag: "@fabioschivtzz",
    },
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswers, ...answers]);
    setNewAnswers({ ...newAnswers, content: "" });
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers]);
      setNewAnswers({ ...newAnswers, content: "" });
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxU2Uh_HkAue3ZpgTltBywAypMS39yrMWEDw&usqp=CAU"
        }
        name={"Fernando Comin"}
        hashtag={"@fernandanimco"}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequuntur, vitae ullam nam sed autem eum, harum at laborum dicta blanditiis facilis, est nemo quod explicabo sit labore ex fugit."
      />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/JoseAlmiroNeto.png" alt="user" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer?"
            value={newAnswers.content}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) =>
              setNewAnswers({ ...newAnswers, content: event.target.value })
            }
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer, index) => {
        return (
          <Tweet
            img={answer.img}
            name={answer.name}
            hashtag={answer.hashtag}
            key={index}
            content={answer.content}
          />
        );
      })}
    </main>
  );
}
