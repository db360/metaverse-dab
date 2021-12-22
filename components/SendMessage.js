import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    //Create Moralis table db
    const Messages = Moralis.Object.extend("Messages");
    //nueva instancia de messages para mandar
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //The object was saved successfully
        },
        (error) => {
          console.error(error)
          //The save Failed
          //Error = moralis Error code
        }
      );
    // console.log(endOfMessagesRef.current);

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py4 max-w-2xl shadow-xl rounded-full border-2 border-pink-400">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 p-4"
        type="text"
      />
      <button type="submit" onClick={sendMessage} className="btn-small-white">
        Send
      </button>
    </form>
  );
}

export default SendMessage;
