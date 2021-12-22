import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user, logout } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );

    if(!username) return;

    setUserData({
        username,
    })
  };

  return (
    <div className="text-sm absolute top-5 right-5 space-x-2">


      <button
        onClick={setUserName}
        disabled={isUserUpdating}
        className="btn-small mr-4"
      >
        Change Username
      </button>
      <button className="btn-small" onClick={logout}>Logout</button>
    </div>
  );
}

export default ChangeUsername;
