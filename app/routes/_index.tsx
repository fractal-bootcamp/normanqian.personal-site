import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import gameGif from "../images/gameGif.gif";
import mailGif from "../images/mailGif.gif";
import homepageRedrawCut0 from "../images/homepageRedrawCut0.png";
import homepageRedrawCut1 from "../images/homepageRedrawCut1.png";
import lightcone0 from "../images/lightcone0.png";
import lightcone1 from "../images/lightcone1.png";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Home() {
  const [project, setProject] = useState("");
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isAlternateImage, setIsAlternateImage] = useState(false);

  const gifs = [
    {
      src: mailGif,
      link: "https://norman-mailing-list.vercel.app/",
    },
    { src: gameGif, link: "https://norman-art.vercel.app" },
    // Add more gifs and links as needed
  ];

  const showNextGif = () => {
    setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
  };

  const enterApp = () => {
    window.open(gifs[currentGifIndex].link, "_blank");
  };

  const toggleImages = () => {
    setIsAlternateImage(!isAlternateImage);
  };

  return (
    <div style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <img
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
          position: "absolute",
          zIndex: -1,
        }}
        src={isAlternateImage ? homepageRedrawCut1 : homepageRedrawCut0}
        alt="Background"
      />

      <img
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
          position: "absolute",
          zIndex: 1,
          paddingLeft: "2px",
        }}
        src={isAlternateImage ? lightcone1 : lightcone0}
        alt="Background"
      />

      <img
        style={{
          width: "40vw",
          height: "45vh",
          right: "0.8%",
          top: "9.2%",
          position: "absolute",
          zIndex: 1,
          objectFit: "cover",
          transform:
            "perspective(80vw) rotateY(-50deg) rotateZ(-1deg) scale(0.95)",
          opacity: 0.5,
          border: "1px solid black",
        }}
        src={gifs[currentGifIndex].src}
        alt="Project Preview"
      />
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          zIndex: -10,
          background: "blue",
        }}
      ></div>

      <button
        onClick={showNextGif}
        style={{
          top: "61%",
          left: "47%",
          zIndex: 10,
          position: "absolute",
          background: "gray",
          rotate: "-9deg",
        }}
      >
        Show Next ❯
      </button>
      <button
        onClick={enterApp}
        style={{
          top: "64.5%",
          left: "47.7%",
          zIndex: 10,
          position: "absolute",
          background: "green",
          rotate: "-9deg",
          fontWeight: "bold",
        }}
      >
        Enter App
      </button>
      <button
        onClick={toggleImages}
        style={{
          top: "68%",
          left: "48%",
          zIndex: 10,
          position: "absolute",
          background: "purple",
          rotate: "-9deg",
          fontWeight: "bold",
        }}
      >
        Lightswitch
      </button>
      <BlackboardLG />
    </div>
  );
}

const BlackboardLG = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10vh",
        left: "46vw",
        zIndex: 10,
        color: "lightgray",
        width: "20%",
        fontSize: "2vw",
        fontFamily: "Chalkduster, fantasy",
      }}
    >
      <h3>Norman Qian </h3>
      <h5> &nbsp; Building Software </h5>
      <div style={{ paddingLeft: "0.5em" }}>
        {[
          {
            text: "github.com/elizasviel",
            href: "https://github.com/elizasviel",
          },
          {
            text: "linkedin.com/in/norman-qian",
            href: "https://linkedin.com/in/norman-qian",
          },
          { text: "normanqian@gmail.com", href: "mailto:normanqian@gmail.com" },
        ].map(({ text, href }) => (
          <a
            key={text}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: "pointer",
              margin: "0.4em 0",
              transition: "color 0.2s",
              fontSize: "1.2vw",
              paddingLeft: "1em",
              display: "block",
              textDecoration: "none",
              color: "lightgray",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a0a0a0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "lightgray")}
            onMouseDown={(e) => (e.currentTarget.style.color = "#707070")}
            onMouseUp={(e) => (e.currentTarget.style.color = "#a0a0a0")}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
};
