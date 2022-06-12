import { HiChevronDown } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

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
            type="button"
            id="login"
            value="Log in"
            onClick={() => {
              navigate("../login");
            }}
          />
          <input className="buttonField2" type="button" id="free" value="Get Trello For Free" />
        </div>
      </nav>
    </div>
  );
}
