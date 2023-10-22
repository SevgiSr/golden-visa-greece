import styled from "styled-components";

//implement mobile first design

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5% 3.5%;
  background-color: transparent;
  font-size: 0.7rem;
  z-index: 999;
  color: white;

  ul {
    list-style-type: none;
    display: flex;
    li {
      text-align: center;
      margin: 0 5vw;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      padding: 5px 0;
    }
    li:hover {
      border-bottom: 1px solid white;
    }
  }

  #nav {
    margin: 0 auto;
  }

  @media only screen and (min-width: 450px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 520px) {
    font-size: 1rem;
  }
`;

export default StyledNavbar;
