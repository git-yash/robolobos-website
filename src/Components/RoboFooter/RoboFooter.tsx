import "./RoboFooter.css"

const RoboFooter = () => {
  return(
      <footer className="containerCenter">
          <div className="centerContainer">
              <button>Support Us</button>
              <button> <img
                  src="/logo512.png"
                  width="45"
                  height="45"
                  className="d-inline-block align-top"
                  alt="Robolobos logo"
              /> Instagram
              </button>
              <button> <img
                  src="/logo512.png"
                  width="45"
                  height="45"
                  className="d-inline-block align-top"
                  alt="Robolobos logo"
              /> Twitter
              </button>
              <button> <img
                  src="/logo512.png"
                  width="45"
                  height="45"
                  className="d-inline-block align-top"
                  alt="Robolobos logo"
              /> Facebook
              </button>
          </div>
      </footer>
  );
}

export default RoboFooter;