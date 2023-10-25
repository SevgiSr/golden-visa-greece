import styled from "styled-components";

const StyledHome = styled.div`
  overflow-x: hidden;
  position: relative;
  /*   background-image: url("/greece-background.avif");
  background-size: cover;
  background-position: center; */

  main {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .parallax {
    pointer-events: none;
    /* transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99); */
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

  .background {
    position: absolute;
    width: 2800px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mountain {
    position: absolute;
    min-width: 100%;
    top: calc(50% + 100px);
    left: calc(50% - 200px);
    z-index: 1;
    transform: translate(-50%, -50%);
  }

  header {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    h1 {
      font-size: 7vw;
    }
    h2 {
      font-size: 5vw;
    }
  }

  section {
    height: 100vh;
  }
`;

export default StyledHome;
