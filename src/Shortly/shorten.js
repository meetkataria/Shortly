import React from "react";
import "./shorten.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Shorten() {
  const baseURL = "https://api.shrtco.de/v2/shorten?url=";

  const [url, setURL] = React.useState("");
  const [linksList, setLinksList] = React.useState([{}]);

  function shorten() {
    if (url) {
      const fetchURLData = async () => {
        const mainURL = `${baseURL}${url}`;

        const res = await fetch(mainURL);
        const jsonRes = await res.json();

        if (jsonRes.ok) {
          const showButton = true;
          const shortLink = jsonRes.result.full_short_link;
          setLinksList((oldList) => {
            return [...oldList, { url, shortLink, showButton }];
          });
        } else {
          const showButton = false;
          const shortLink = "Invalid URL";
          setLinksList((oldList) => {
            return [...oldList, { url, shortLink, showButton }];
          });
        }
      };

      fetchURLData();
    }
  }

  function copied() {
    toast.dark("Copied!", {
      position: "bottom-right",
      autoClose: 1700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <div className="main">
        <div className="outer">
          <div className="shorten">
            <div className="link">
              <input
                type="text"
                className="input"
                placeholder="Shorten a link here"
                onChange={(e) => setURL(e.target.value)}
              ></input>
              <button className="shortenBtn" onClick={shorten}>
                Shorten It!
              </button>
            </div>
          </div>
        </div>

        <div className="linkData">
          {linksList.map((eachLink) => {
            return (
              <div className="eachLink">
                <p className="org">{eachLink.url}</p>
                <p className="short">{eachLink.shortLink}</p>
                {eachLink.showButton == true && (
                  <div>
                    <CopyToClipboard text={eachLink.shortLink}>
                      <button className="copyButton" onClick={copied}>
                        Copy
                      </button>
                    </CopyToClipboard>
                    <ToastContainer />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shorten;
