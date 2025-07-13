import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 mt-4">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ maxWidth: "120px", height: "auto" }}
              alt="Smallcase"
            />
            <p className="text-small text-muted">
              Thematic investment platform
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 mt-4">
            <img
              src="media/images/streakLogo.png"
              style={{ maxWidth: "120px", height: "auto" }}
              alt="Streak"
            />
            <p className="text-small text-muted">Algo & strategy platform</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 mt-4">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ maxWidth: "120px", height: "auto" }}
              alt="Sensibull"
            />
            <p className="text-small text-muted">Options trading platform</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 mt-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ maxWidth: "120px", height: "auto" }}
              alt="Zerodha Fundhouse"
            />
            <p className="text-small text-muted">Asset management</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 mt-4">
            <img
              src="media/images/goldenpiLogo.png"
              style={{ maxWidth: "120px", height: "auto" }}
              alt="GoldenPi"
            />
            <p className="text-small text-muted">Bonds trading platform</p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 p-3 mt-4">
            <img
              src="media/images/dittoLogo.png"
              style={{ maxWidth: "120px", height: "auto" }}
              alt="Ditto"
            />
            <p className="text-small text-muted">Insurance</p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
