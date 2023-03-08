import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetsProps {
  content: string;
}

export function Tweet(props: TweetsProps) {
  return (
    <Link to="/tweet" className="tweet">
      <img src="https://github.com/diego3g.png" alt="user" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Diego Fernandes</strong>
          <span>@dieegosf</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
