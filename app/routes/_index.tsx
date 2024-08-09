import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Home() {
  const [project, setProject] = useState("");
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
        src="/homepageRedraw1.png"
        alt="Background"
      />
      <img
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
          position: "absolute",
          zIndex: -1,
        }}
        src="/homepageRedraw2.png"
        alt="Background"
      />
      <img
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
          position: "absolute",
          zIndex: -1,
          paddingLeft: "2px",
        }}
        src="/lightcone0.png"
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
        src="/gameGif.gif"
        alt="Plant"
      />
      <BlackboardLG />
    </div>


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
      <h3>Select Project </h3>
      <p
        onMouseEnter={(e) => (e.currentTarget.style.color = "#a0a0a0")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
        onMouseDown={(e) => (e.currentTarget.style.color = "#707070")}
        onMouseUp={(e) => (e.currentTarget.style.color = "#a0a0a0")}
      >
        &nbsp; Spinner
      </p>
      <p
        onMouseEnter={(e) => (e.currentTarget.style.color = "#a0a0a0")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
        onMouseDown={(e) => (e.currentTarget.style.color = "#707070")}
        onMouseUp={(e) => (e.currentTarget.style.color = "#a0a0a0")}
      >
        &nbsp; Email Sender
      </p>
      <p
        onMouseEnter={(e) => (e.currentTarget.style.color = "#a0a0a0")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
        onMouseDown={(e) => (e.currentTarget.style.color = "#707070")}
        onMouseUp={(e) => (e.currentTarget.style.color = "#a0a0a0")}
      >
        &nbsp; Tic Tac Toe
      </p>
    </div>
  );
};

const BlackboardSM = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "16vh",
        left: "0",
        transform: "perspective(50vw) rotateY(22deg)",
        zIndex: 10,
        color: "lightgray",
        width: "15%",

        fontFamily: "Chalkduster, fantasy",
      }}
    >
      <p>Norman Qian</p>

      {[
        "normanqian@gmail.com",
        "github.com/elizsviel",
        "linkedin.com/in/norman-qian",
      ].map((link) => (
        <p
          key={link}
          style={{
            cursor: "pointer",
            margin: "0.3em 0",
            transition: "color 0.2s",
            fontSize: "1.2vw",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#a0a0a0")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
          onMouseDown={(e) => (e.currentTarget.style.color = "#707070")}
          onMouseUp={(e) => (e.currentTarget.style.color = "#a0a0a0")}
        >
          {link}
        </p>
      ))}
    </div>
  );
};

const Whiteboard = () => {
  return (
    <div className="whiteboard">
      <img src="/whiteboard.png" alt="Whiteboard" />
    </div>
  );
};

const Computer = () => {
  return <div className="computer"></div>;
};

const Lamp = ({
  brightness,
  setBrightness,
}: {
  brightness: number;
  setBrightness: (brightness: number) => void;
}) => {
  return (
    <img
      style={{
        position: "absolute",
        top: "50%",
        left: "17%",
        zIndex: 10,
        transform: "scale(0.8)",
        opacity: 0,
        transition: "transform 0.1s, opacity 0.1s",
      }}
      alt="Lamp"
      src="/lampOn.png"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(0.85)";
        e.currentTarget.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(0.8)";
        e.currentTarget.style.opacity = "0";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.75)";
        e.currentTarget.style.opacity = "0.5";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(0.8)";
        e.currentTarget.style.opacity = "1";
      }}
      onClick={() => {
        if (brightness < 3) setBrightness(brightness + 1);
        else setBrightness(0);
      }}
    />
  );
};
