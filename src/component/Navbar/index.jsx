import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <h1>logo</h1>
        </div>

        <div className="navbar-menu">
          <p>Home</p>
          <p>About</p>
          <p>Project</p>
          <p>Services</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;