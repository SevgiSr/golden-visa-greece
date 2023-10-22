import StyledNavbar from "./styles/Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <div id="logo">
        <h1>Logo</h1>
      </div>

      <div id="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div id="buttons">
        <button className="btn">Sign In</button>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
