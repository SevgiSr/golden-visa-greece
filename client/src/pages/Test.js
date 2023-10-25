import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components";
import StyledHome from "./styles/Home.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isStickyActivated, setIsStickyActivated] = useState(false);
  const godRef = useRef(null);
  //////////
  useEffect(() => {
    console.log(isStickyActivated);
    const element = godRef.current;
    const computedStyles = window.getComputedStyle(element);
    const transitionProperty = computedStyles.getPropertyValue("transition");

    console.log("Transition Property:", transitionProperty);
  }, [isStickyActivated]);

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
    <StyledTest>
      <main></main>

      <img
        ref={godRef}
        className={"god " + (isStickyActivated ? "sticky" : "parallax")}
        data-speedx="0.05"
        data-speedy="0.02"
        data-speedz="0.5"
        data-rotation="0.1"
        data-distance="1200"
        src={"/greek-god.png"}
        alt="Greek God"
      />

      <section></section>

      <section></section>
    </StyledTest>
  );
}

const StyledTest = styled.div`
  overflow-x: hidden;
  position: relative;

  main {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .parallax {
    pointer-events: none;
    transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99);
  }

  .god {
    border: 1px solid red;
    position: absolute;
    width: 800px;
    top: calc(50% - 600px);
    left: calc(50% + 550px);
    z-index: 3;
    transform: translate(-50%, -50%);
  }

  section {
    height: 100vh;
  }
`;

export default Home;
