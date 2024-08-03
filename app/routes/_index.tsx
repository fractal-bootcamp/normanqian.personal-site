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
        }}
        src="/bright0cut.png"
        alt="Background"
      />
      <img
        style={{
          width: "150vw",
          height: "150vh",
          transform: "scale(0.2)",
          top: "-10vh",
          left: "-25vw",
          position: "absolute",
          zIndex: -1,
          objectFit: "cover",
        }}
        src="/gameGif.gif"
        alt="Plant"
      />
      <BlackboardLG />
      <BlackboardSM />
    </div>
  );
}

/*
      <button
        onClick={() =>
          brightness < 3 ? setBrightness(brightness + 1) : setBrightness(0)
        }
      >
        Increase brightness
      </button>
*/

const BlackboardLG = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10vh",
        left: "45vw",
        transform: "translate(-30%, -110%) scale(clamp(0.5, 1vw, 1.5))",
        zIndex: 10,
        color: "gray",
        backgroundColor: "transparent",
        padding: "clamp(1vh, 2vw, 3vh)",
        borderRadius: "1vw",
        boxShadow: "0 0.4vh 0.6vh rgba(0, 0, 0, 0.1)",
        fontSize: "clamp(1.6vh, 3vw, 3vh)",
        fontFamily: "Chalkduster, fantasy",
      }}
    >
      <h3>Select Project </h3>
      <p>&nbsp; Spinner</p>
      <p>&nbsp; Tic Tac Toe</p>
    </div>
  );
};

const BlackboardSM = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "15vh",
        left: "0",
        transform: "perspective(50vw) rotateY(22deg)",
        zIndex: 10,
        color: "gray",
        backgroundColor: "transparent",
        padding: "1vh",
        borderRadius: "1vw",
        boxShadow: "0 0.4vh 0.6vh rgba(0, 0, 0, 0.1)",
        fontFamily: "Chalkduster, fantasy",
        maxWidth: "90vw",
        fontSize: "clamp(1.6vh, 1.5vw, 2.4vh)",
      }}
    >
      <h2 style={{ fontSize: "clamp(2vh, 2vw, 3vh)", marginBottom: "0.5em" }}>
        Norman Qian
      </h2>
      <h3
        style={{
          fontSize: "clamp(1.8vh, 1.8vw, 2vh)",
          marginBottom: "0.5em",
        }}
      >
        Links
      </h3>
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
            fontSize: "clamp(1.4vh, 1.4vw, 1.8vh)",
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
