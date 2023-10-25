import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components";
import StyledHome from "./styles/Home.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);
  const [isStickyActivated, setIsStickyActivated] = useState(false);

  // parallax code
  const parallaxRef = useRef({});

  const handleMouseMove = (e) => {
    setXValue(e.clientX - window.innerWidth / 2);
    setYValue(e.clientY - window.innerHeight / 2);
    setClientX(e.clientX);
  };

  useEffect(() => {
    setRotateDegree((xValue / (window.innerWidth / 2)) * 20);
  }, [xValue]);

  useEffect(() => {
    Object.keys(parallaxRef.current).forEach((key) => {
      const currentElement = parallaxRef.current[key];
      if (currentElement && currentElement.classList.contains("parallax")) {
        const isInLeft =
          parseFloat(getComputedStyle(currentElement).left) <
          window.innerWidth / 2
            ? 1
            : -1;

        const zValue =
          (clientX - parseFloat(getComputedStyle(currentElement).left)) *
          isInLeft *
          0.1;

        const speedx = currentElement.dataset.speedx;
        const speedy = currentElement.dataset.speedy;
        const speedz = currentElement.dataset.speedz;
        const rotationSpeed = currentElement.dataset.rotation;

        currentElement.style.transform = `translateX(calc(-50% + ${
          -xValue * speedx
        }px)) translateY(calc(-50% + ${
          yValue * speedy
        }px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${
          rotateDegree * rotationSpeed
        }deg)`;
      }
    });
  }, [clientX]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //////////

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".god",
      start: "top top",
      end: "+=1000px",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        setIsStickyActivated(true); // Set to sticky
      },
      onLeaveBack: () => {
        setIsStickyActivated(false); // Set to not sticky
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <StyledHome>
      <Navbar />
      <main>
        <img
          ref={(el) => (parallaxRef.current["background"] = el)}
          data-speedx="0.17"
          data-speedy="0.1"
          data-speedz="0"
          data-rotation="0"
          data-distance="-200"
          className="background parallax"
          src={"/greece-background-2.png"}
          alt="background"
        />
        <img
          ref={(el) => (parallaxRef.current["mountain"] = el)}
          data-speedx="0.10"
          data-speedy="0.08"
          data-speedz="0.3"
          data-rotation="0.07"
          data-distance="850"
          className="mountain parallax"
          src={"/original-removebg.png"}
          alt="mountain"
        />
        <header>
          <h1>Golden Visa</h1>
          <h2>Greece</h2>
        </header>
      </main>

      <img
        className={"god " + (isStickyActivated ? "sticky" : "parallax")}
        data-speedx="0.05"
        data-speedy="0.02"
        data-speedz="0.5"
        data-rotation="0.1"
        data-distance="1200"
        ref={(el) => (parallaxRef.current["god"] = el)}
        src={"/greek-god.png"}
        alt="Greek God"
      />

      <section></section>

      <section></section>
    </StyledHome>
  );
}

export default Home;
