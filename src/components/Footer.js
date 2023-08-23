import logo from "../images/footer-img.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="one">
          <img src={logo} alt="Secondary Logo" />
        </div>
        <div className="two">
          <ul>
            <h5>Navigation</h5>
            <li>
              <a href="/" className="a">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="a">
                About
              </a>
            </li>
            <li>
              <a href="/menu" className="a">
                Menu
              </a>
            </li>
            <li>
              <a href="/reservations" className="a">
                Reservations
              </a>
            </li>
            <li>
              <a href="/order" className="a">
                Order Online
              </a>
            </li>
            <li>
              <a href="/login" className="a">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Contact</h5>
            <li>
              <a id="nav" href="#">
                Phone Number
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Email
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>

            <li>
              <a id="nav" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                LinkedIn
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
