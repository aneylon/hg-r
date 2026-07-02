import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

const Messages = () => {
  // TODO : get message from server.
  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
    request: userRequest,
  } = useFetch();

  useEffect(() => {
    console.log("get them users");
    userRequest("http://localhost:4200/user");
  }, []);
  // Create New message component

  return (
    <div>
      <h1>Messages</h1>
      <div>
        <h2>New Message</h2>
        {userIsLoading && <div>...loading users...</div>}
        {userData && (
          <select name="recipient" id="recipient">
            <option value="userId">User Name</option>
          </select>
        )}
        <textarea
          name="newMessage"
          id="newMessage"
          placeholder="New Message"
        ></textarea>
      </div>
      <div>
        <h2>Message List</h2>
        <ul>
          <li>Message Example</li>
        </ul>
      </div>
    </div>
  );
};

export default Messages;
