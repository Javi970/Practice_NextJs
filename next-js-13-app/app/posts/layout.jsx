import { Counter } from "./Counter";

export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: "#fff", color: "purple" }}>
        El mejor canal de Twitch de programación: @midudev
      </marquee>
      {children}
    </div>
  );
}
