import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  /*   background-image: url("/greece-background.avif");
  background-size: cover;
  background-position: center; */

  main {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .parallax {
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99);
  }

  .god {
    position: absolute;
    width: 800px;
    top: calc(50% - 100px);
    left: calc(50% + 500px);
  }

  .background {
    position: absolute;
    width: 2800px;
    top: 50%;
    left: 50%;
  }

  .mountain {
    position: absolute;
    width: 100%;
    top: calc(50% + 100px);
    left: calc(50% - 200px);
  }

  h2 {
    text-align: center;
    font-weight: 400;
    color: white;
    font-size: 10vw;
  }
`;

export default StyledHome;
