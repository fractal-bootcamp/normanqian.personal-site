import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [brightness, setBrightness] = useState(0);
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="/gameGif.gif"
        style={{
          position: "absolute",
          width: "40%",
          height: "auto",
          top: "45%",
          left: "30%",
          zIndex: -1,
        }}
      />
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        src={`/bright${brightness}cut.png`}
      />
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
        top: "50%",
        left: "50%",
        transform: "translate(-25%, -110%)",
        zIndex: 10,
        color: "gray",
        backgroundColor: "transparent",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontSize: "30px",
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
        transform: "translate(-2%, -320%) perspective(500px) rotateY(22deg)",
        zIndex: 10,
        color: "gray",
        backgroundColor: "transparent",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontSize: "13px",
        fontFamily: "Chalkduster, fantasy",
      }}
    >
      <h2>Norman Qian</h2>
      <h3>Links</h3>
      {[
        "normanqian@gmail.com",
        "github.com/elizsviel",
        "linkedin.com/in/norman-qian",
      ].map((link) => (
        <p
          key={link}
          style={{ cursor: "pointer" }}
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

const Plant = () => {
  return (
    <div className="plant">
      <img src="/plant.png" alt="Plant" />
    </div>
  );
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
