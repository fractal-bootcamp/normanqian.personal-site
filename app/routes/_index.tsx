import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from "react";
import gameGif from "../images/gameGif.gif";
import mailGif from "../images/mailGif.gif";
import homepageRedrawCutA from "../images/homepageRedrawCutA.png";
import homepageRedrawCutB from "../images/homepageRedrawCutB.png";
import homepageRedrawCut0 from "../images/homepageRedrawCut0.png";
import homepageRedrawCut1 from "../images/homepageRedrawCut1.png";
import lightcone0 from "../images/lightcone0.png";
import lightcone1 from "../images/lightcone1.png";
import "../styles/shared.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Home() {
  const [project, setProject] = useState("");
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [brightness, setBrightness] = useState(1);

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
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setBrightness(
      isDarkMode ? Math.random() * 0.2 + 0.8 : Math.random() * 0.2 + 1.3
    );
  });

  return (
    <div style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <img
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
          position: "absolute",
          zIndex: -4,
          filter: `brightness(${brightness})`,
        }}
        src={homepageRedrawCut1}
        alt="Background"
      />
      <Controls
        showNextGif={showNextGif}
        enterApp={enterApp}
        toggleImages={toggleImages}
      />

      <BlackboardLG />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "40%",
          width: "20vw",
          height: "20vh",
          zIndex: -2,
          background: "blue",
        }}
      ></div>

      <img
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
          position: "absolute",
          zIndex: -1,
        }}
        src={isDarkMode ? homepageRedrawCutA : homepageRedrawCutB}
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
      <MovingCirclesContainer />
    </div>
  );
}

const Dust = () => {
  const dustRef = useRef<HTMLDivElement>(null);
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const velocity = useRef({
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (dustRef.current) {
        // Update velocity with a small random change
        velocity.current.x += (Math.random() - 0.5) * 0.2;
        velocity.current.y += (Math.random() - 0.5) * 0.2;

        // Limit the velocity to a maximum value
        velocity.current.x = Math.max(-1, Math.min(1, velocity.current.x));
        velocity.current.y = Math.max(-1, Math.min(1, velocity.current.y));

        // Calculate new position
        const newLeft = Math.max(
          0,
          Math.min(
            100,
            parseFloat(dustRef.current.style.left) + velocity.current.x
          )
        );
        const newTop = Math.max(
          0,
          Math.min(
            100,
            parseFloat(dustRef.current.style.top) + velocity.current.y
          )
        );

        // Update the position
        dustRef.current.style.left = `${newLeft}vw`;
        dustRef.current.style.top = `${newTop}vh`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={dustRef}
      style={{
        position: "absolute",
        width: `10px`,
        height: `10px`,
        borderRadius: "50%",
        backgroundColor: "lemonchiffon",
        left: `${left}vw`,
        top: `${top}vh`,
        zIndex: -3,
        transition: "left 1s linear, top 1s linear", // Smooth linear transition
      }}
    />
  );
};

const BlackboardLG = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "46vw",
          color: "lightgray",
          width: "20%",
          fontSize: "2vw",
          fontFamily: "Chalkduster, fantasy",
        }}
      >
        <h3>Norman Qian </h3>
        <h5> &nbsp; Building Software </h5>
        <ProjectItem
          text="github.com/elizasviel"
          link="https://github.com/elizasviel"
        />
        <br />

        <ProjectItem
          text="linkedin.com/in/norman-qian"
          link="https://linkedin.com/in/norman-qian"
        />
        <br />
        <br />
        <ProjectItem
          text="normanqian@gmail.com"
          link="mailto:normanqian@gmail.com"
        />
      </div>
    </>
  );
};

const Controls = ({
  showNextGif,
  enterApp,
  toggleImages,
}: {
  showNextGif: () => void;
  enterApp: () => void;
  toggleImages: () => void;
}) => {
  return (
    <>
      <button
        onClick={showNextGif}
        style={{
          top: "61%",
          left: "48.5%",
          zIndex: 1000,
          position: "absolute",
          background: "gray",
          rotate: "-9deg",
          fontWeight: "bold",
          transform: "scale(1.7)",
        }}
      >
        Show Next ❯
      </button>
      <button
        onClick={enterApp}
        style={{
          top: "64.5%",
          left: "49%",
          zIndex: 1000,
          position: "absolute",
          background: "green",
          rotate: "-9deg",
          fontWeight: "bold",
          transform: "scale(1.7)",
        }}
      >
        Enter App
      </button>
      <button
        onClick={toggleImages}
        style={{
          top: "68%",
          left: "49%",
          zIndex: 1000,
          position: "absolute",
          background: "purple",
          rotate: "-9deg",
          fontWeight: "bold",
          transform: "scale(1.7)",
        }}
      >
        Lightswitch
      </button>
    </>
  );
};

const ProjectItem = ({ text, link }: { text: string; link: string }) => {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <p
        style={{
          cursor: "pointer",
          margin: "0.4em 0",
          transition: "color 0.2s",
          fontSize: "1.2vw",
          paddingLeft: "1em",
          display: "block",
          textDecoration: "none",
          zIndex: 998,
          position: "absolute", // Absolute positioning to layer on top
          top: 0, // Align top
          left: 0, // Align left
          color: hover ? "#a0a0a0" : "lightgray",
          opacity: down ? 0.5 : 1,
        }}
      >
        {text}
      </p>
      <a
        href={link}
        style={{
          cursor: "pointer",
          margin: "0.4em 0",
          transition: "color 0.2s",
          fontSize: "1.2vw",
          paddingLeft: "1em",
          display: "block",
          textDecoration: "none",
          zIndex: 10000,
          color: "transparent",
          position: "absolute", // Absolute positioning to layer on top
          top: 0, // Align top
          left: 0, // Align left
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
      >
        {text}
      </a>
    </div>
  );
};

interface Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  opacity: number;
  inInnerTrapezoid: boolean;
}

const MovingCirclesContainer: React.FC = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const numCircles = 200;
  const speed = 0.1;
  const topEdgeRatio = 0.05;
  const circleSize = 0.3; // Size in percentage

  // Returns the left and right edges of either the inner or outer trapezoid
  const getTrapeziodEdges = (y: number, isInner: boolean) => {
    const width = isInner ? 45 : 100;
    const top = isInner ? 0 : 0;
    const bottom = isInner ? 80 : 100;
    const centerX = isInner ? 50 : 50;

    const progress = (y - top) / (bottom - top);
    const topWidth = width * topEdgeRatio;
    const bottomWidth = width;
    const currentWidth = topWidth + (bottomWidth - topWidth) * progress;

    return {
      left: centerX - currentWidth / 2,
      right: centerX + currentWidth / 2,
    };
  };

  const isPointInTrapezoid = (
    x: number,
    y: number,
    isInner: boolean
  ): boolean => {
    const { left, right } = getTrapeziodEdges(y, isInner);
    const top = isInner ? 0 : 0;
    const bottom = isInner ? 100 : 100;
    return x >= left && x <= right && y >= top && y <= bottom;
  };

  useEffect(() => {
    const initialCircles: Circle[] = Array.from({ length: numCircles }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      dx: 2 * (Math.random() - 0.5) * speed,
      dy: 2 * (Math.random() - 0.5) * speed,
      opacity: Math.random() * 1.5,
      inInnerTrapezoid: false,
    }));
    setCircles(initialCircles);

    const animate = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let { x, y, dx, dy, opacity } = circle;

          x += dx;
          y += dy;

          // Bounce off edges of outer trapezoid
          const outerEdges = getTrapeziodEdges(y, false);
          if (y < 0 || y > 100 - circleSize) dy = -dy;
          if (x < outerEdges.left || x > outerEdges.right - circleSize)
            dx = -dx;

          // Keep within bounds
          x = Math.max(
            outerEdges.left,
            Math.min(x, outerEdges.right - circleSize)
          );
          y = Math.max(0, Math.min(y, 100 - circleSize));

          // Check if circle is in inner trapezoid
          const inInnerTrapezoid = isPointInTrapezoid(
            x + circleSize / 2,
            y + circleSize / 2,
            true
          );

          return { x, y, dx, dy, opacity, inInnerTrapezoid };
        })
      );
    };

    const intervalId = setInterval(animate, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "1800px",
        height: "2300px",
        rotate: "-93deg",
        left: "26vw",
        top: "-40vh",
        overflow: "hidden",
        zIndex: 999,
      }}
    >
      {/* Outer trapezoid */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          clipPath: `polygon(${50 * (1 - topEdgeRatio)}% 0, ${
            50 * (1 + topEdgeRatio)
          }% 0, 100% 100%, 0 100%)`,
          backgroundColor: "transparent",
        }}
      />
      {/* Inner trapezoid */}
      <div
        style={{
          position: "absolute",
          left: "20%",
          top: "0%",
          width: "60%",
          height: "100%",
          clipPath: `polygon(${50 * (1 - topEdgeRatio)}% 0, ${
            50 * (1 + topEdgeRatio)
          }% 0, 100% 100%, 0 100%)`,
          backgroundColor: "transparent",
        }}
      />
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            opacity: `${circle.opacity}`,
            position: "absolute",
            width: `${circleSize}%`,
            height: `${circleSize}%`,
            borderRadius: "50%",
            backgroundColor: circle.inInnerTrapezoid
              ? "lemonchiffon"
              : "transparent",
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            transition: "background-color 0.3s",
          }}
        />
      ))}
    </div>
  );
};
