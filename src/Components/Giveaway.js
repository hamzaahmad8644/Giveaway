import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Giveaway.css";

export default class Giveaway extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallets: [],
      submitted: false,
      wallet: "",
    };
  }

  walletPushHandler = event => {
    event.preventDefault();
    if (this.state.wallets.includes(this.state.wallet) === true) {
      toast.warn("You already Participated With this Wallet", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (this.state.wallet === "" || this.state.wallet.length < 1) {
      toast.warn("Enter Valid Address", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      this.setState(prevState => ({
        wallets: [this.state.wallet, ...prevState.wallets],
      }));
    }
  };
  ValueInputHandler = event => {
    this.setState({ wallet: event.target.value });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <div className="contact-us">
          <form onSubmit={this.walletPushHandler}>
            <input type="text" onChange={this.ValueInputHandler} />
            <button type="submit">Submit You BNB BEP20 Address</button>
          </form>
        </div>
        <div className="wallets">
          <ol className="style_1">
            {this.state.wallets.map((wallet, i) => {
              return (
                <>
                  <li key={i}>
                    {wallet}
                    {/* <small>
                      Note: Some tost to expand verticle height
                      <br />
                      and some more lines
                    </small> */}
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      </>
    );
  }
}
