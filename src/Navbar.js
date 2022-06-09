import { HiChevronDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import Signup from "./Signup";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <IconContext.Provider value={{ size: ".7em" }}>
          <ul>
            <li>
              <a href="/" className="title">
                Trello
              </a>
            </li>
            <div className="links">
              <li>
                <a href="/features">
                  Features <HiChevronDown />
                </a>
              </li>
              <li>
                <a href="/solutions">
                  Solutions <HiChevronDown />
                </a>
              </li>
              <li>
                <a href="/plans">
                  Plans <HiChevronDown />{" "}
                </a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/resources">
                  Resources <HiChevronDown />
                </a>
              </li>
            </div>
          </ul>
        </IconContext.Provider>
        <div className="login">
          <input
            className="buttonField1"
            type="submit"
            id="login"
            value="Log in"
          />
          <input
            className="buttonField2"
            type="submit"
            id="free"
            value="Get Trello For Free"
          />
        </div>
      </nav>
      <Signup />
    </div>
  );
}
