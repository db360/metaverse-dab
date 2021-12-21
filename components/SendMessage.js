import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage() {
  const { user, Moralis } = useMoralis();
  const { message, setMessage } = useState("");

  const sendMessage = (e) => {
      e.preventDefault();

      if(!message) return;

      
  }

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py4 max-w-2xl shadow-xl rounded-full border-2 border-pink-400">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5 p-4"
        type="text"
      />
      <button type="submit" onClick={sendMessage} className="btn-small-white">Send</button>
    </form>
  );
}

export default SendMessage;
