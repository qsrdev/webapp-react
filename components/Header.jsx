import { NavLink } from "react-router-dom";

const Header = () => {
  const headerLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Movie List",
      url: "/movies",
    },
  ];

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to={headerLinks[0].url}>
              Movies
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {headerLinks.map((curLink, index) => (
                  <li key={index} className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={curLink.url}>
                      {curLink.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
