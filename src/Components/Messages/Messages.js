import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";

const Messages = () => {
  const userId = 123; // TODO : get user id from logged in user
  const [newMessageContent, setNewMessageContent] = useState(null);
  const [newMessageTitle, setNewMessageTitle] = useState(null);
  const [recipient, setRecipient] = useState(null);

  const formIsValid = () => {
    if (
      newMessageContent !== null &&
      newMessageTitle !== null &&
      recipient !== null
    )
      return true;
    else return false;
  };

  const {
    data: userData,
    isLoading: userIsLoading,
    error: userError,
    request: userRequest,
  } = useFetch();

  const {
    data: messageData,
    isLoading: messageIsLoading,
    error: messageError,
    request: messageRequest,
  } = useFetch();

  const sendNewMessage = () => {
    const newMessage = {
      newMessageTitle,
      newMessageContent,
      authorId: userId,
      recipient,
    };
    console.log("sending new message", newMessage);
    // TODO : Actually send the message.
    // TODO : Side effects there in...
  };

  useEffect(() => {
    userRequest("http://localhost:4200/user");
    messageRequest(`http://localhost:4200/message/${userId}`);
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <div>
        <h2>New Message</h2>
        <div>
          {userError && <div>Error fetching users : {userError.message}</div>}
          {userIsLoading && <div>...loading users...</div>}
          {userData && (
            <>
              <div className="formElement">
                <select
                  name="recipient"
                  id="recipient"
                  value={recipient}
                  onChange={(e) => {
                    setRecipient(e.target.value);
                  }}
                >
                  <option selected value disabled>
                    Choose a Recipient
                  </option>
                  {userData.map((user) => {
                    console.log({ user });
                    return <option value={user.id}>{user.userName}</option>;
                  })}
                </select>
              </div>
              <div className="formElement">
                <input
                  type="text"
                  name="newMessageTitle"
                  id="newMessageTitle"
                  placeholder="Title"
                  value={newMessageTitle}
                  onChange={(e) => setNewMessageTitle(e.target.value)}
                />
              </div>
              <div className="formElement">
                <textarea
                  name="newMessageContent"
                  id="newMessageContent"
                  placeholder="New Message"
                  value={newMessageContent}
                  onChange={(e) => {
                    setNewMessageContent(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="formElement">
                <button disabled={!formIsValid()} onClick={sendNewMessage}>
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <h2>Message List</h2>

        {messageError && (
          <div>Error fetching users : {messageError.message}</div>
        )}
        {messageIsLoading && <div>...loading users...</div>}
        {messageData && (
          <>
            <ul>
              <li>Message Example</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Messages;
