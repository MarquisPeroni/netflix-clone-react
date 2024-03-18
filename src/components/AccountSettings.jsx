// questa pagina del Edit Profile viene dal mio progetto precedente di netflix, 
// e da qualche errore per via del CSS nativo che avevo aggiunto la,
// spero non dia troppo noia lo stile becero ma tenevo a precisare che è così poichè 
// avrei avuto troppe modifiche da fare e ho preferito lasciarlo così,
// ora sto tentando di collegare la pagina edit nella header con questa pagina. 

import React from "react";
import fatKid from "../assets/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";


const AccountSettings = () => {
  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="mb-3">
              <div className="row">
                <h1>Edit Profile</h1>
                <hr className="mt-0 mb-4" />
                <div className="col-md-4 gradient-custom text-center text-white">
                <img src={fatKid} alt="propic" width={200} height={200} />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-3">
                    <div className="col-12 mb-3">
                      <h6 className="bg-secondary p-2">Strive Student</h6>
                      <p className="text-muted">Language:</p>
                      <button
                        type="button"
                        className="btn btn-black bg-black btn btn-outline-light rounded-0"
                      >
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          English
                        </a>
                        <ul className="dropdown-menu border-light rounded-0 bg-black">
                          <li>
                            <a className="dropdown-item" href="#">
                              Italian
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Japanese
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              French
                            </a>
                          </li>
                        </ul>
                      </button>
                    </div>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-12 mb-3">
                        <h6 className="text-muted">Maturity Settings</h6>
                        <p className="bg-secondary p-1 col-6">
                          ALL MATURITY RATINGS
                        </p>
                        <p className="text-muted">
                          Show titles of all maturity ratings for this profile.
                        </p>
                        <button className="btn btn text-left bg-black border border-secondary text-secondary rounded-0">
                          E D I T
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-0 mb-4" />
                  <div className="checkbox-div">
                    <div className="form-check checkbox-xl mb-3">
                      <input
                        className="form-check-input rounded-0 bg-dark border-secondary"
                        type="checkbox"
                        value=""
                        id="checkbox-3"
                        checked
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="checkbox-3"
                      >
                        Autoplay next episode in a series on all devices.
                      </label>
                    </div>
                    <div className="form-check checkbox-xl mb-3">
                      <input
                        className="form-check-input rounded-0 bg-dark border-secondary"
                        type="checkbox"
                        value=""
                        id="checkbox-3"
                        checked
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="checkbox-3"
                      >
                        Autoplay previews while browsing on all devices.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-0 mb-2" />
            <div className="row justify-content-center">
              <div className="col col-4">
                <a className="btn btn-outline-secondary bg-black rounded-0 ms-2 mb-4 px-2">
                  {" "}
                  SAVE{" "}
                </a>
              </div>
              <div className="col col-4">
                <a className="btn btn-outline-secondary bg-black rounded-0 ms-2 mb-4 px-2">
                  {" "}
                  CANCEL{" "}
                </a>
              </div>
              <div className="col col-4">
                <a className="btn btn-outline-secondary bg-black rounded-0 ms-2 mb-4 px-2">
                  {" "}
                  DELETE PROFILE{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
