// import Header from "../Header";
import Logo from "../Image/Aifpu.jpg";
import Landing from "../Image/slog.jpeg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <header className="bg-dark heading ps-5">
        <div>
          <img src={Logo} alt="Aifpu logo" className="Logo" />
        </div>
        <div className="pe-5 d-flex mt-3">
          <li className="cate">category</li>
          <li>
            <Link
              to="/science"
              className="text-decoration-none text-capitalize"
            >
              school of science
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              className="text-decoration-none text-capitalize"
            >
              school of business
            </Link>
          </li>
        </div>
      </header>
      <img src={Landing} alt="landing logo" className="landing" />
    </>
  );
};

export default HomePage;
