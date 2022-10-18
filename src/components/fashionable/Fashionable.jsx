import "./Fashionable.css";
import img from "../../assets/imgs/HandQr.png";


export const Fashionable = () => {
    return (
        <div>
            <div className="fashionable">
                <div className="fashionableContent">
                    <div className="img">
                        <img src={img} className="logo" alt="img" />
                    </div>
                    <div className="texts">
                        <h1 className="fashionableTitle">Make it look fashionable</h1>
                        <p className="fashionableSubtitle">
                        If you are going to have it in your wallet everyday, might as well make it fancy.
                        You can choose from an array of options whichever suits your style better.
                        </p>
                        <div className="buttonPage">
                            <button>Try it now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };