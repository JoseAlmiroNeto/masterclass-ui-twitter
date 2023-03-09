import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState({
    content: "",
    img: "https://github.com/JoseAlmiroNeto.png",
    name: "José Almiro",
    hashtag: "@joséNeto",
  });

  const [tweets, setTweets] = useState([
    {
      content:
        "A mudança começa dentro de nós. Se queremos ver um mundo melhor, precisamos ser a mudança que queremos ver",
      img: "https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg",
      name: "Carolina Gardol",
      hashtag: "@Caroldol",
    },
    {
      content:
        "O tempo é o nosso recurso mais valioso. Use-o com sabedoria e sempre terá o suficiente.",
      img: "https://i.pinimg.com/originals/b5/dc/a9/b5dca9fac1361023498d6cb66e4d8b13.jpg",
      name: "Fabio Shivtz",
      hashtag: "@fabioschivtzz",
    },
    {
      content:
        "A persistência é a chave para o sucesso. Se você continuar tentando, eventualmente alcançará seus objetivos.",
      img: "https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg",
      name: "Bruna Aguida",
      hashtag: "@brunaguida56",
    },
    {
      content:
        "A mudança começa dentro de nós. Se queremos ver um mundo melhor, precisamos ser a mudança que queremos ver",
      img: "https://i.pinimg.com/474x/73/50/e6/7350e6498c0b754f2fd718e16c677356.jpg",
      name: "Julia Fernandes",
      hashtag: "@julialol33",
    },
    {
      content:
        "O respeito é a base de todas as relações saudáveis. Trate os outros como gostaria de ser tratado e verá o mundo com outros olhos.",
      img: "https://focalizando.com.br/sites/default/files/inline-images/Fotos-para-perfil-do-Whatsapp-masculino-1170x700.webp",
      name: "Henrique Macedo",
      hashtag: "@henriquerr",
    },
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet({ ...newTweet, content: "" });
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet({ ...newTweet, content: "" });
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/JoseAlmiroNeto.png" alt="user" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet.content}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) =>
              setNewTweet({ ...newTweet, content: event.target.value })
            }
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, index) => {
        return (
          <Tweet
            key={index}
            content={tweet.content}
            img={tweet.img}
            name={tweet.name}
            hashtag={tweet.hashtag}
          />
        );
      })}
    </main>
  );
}
