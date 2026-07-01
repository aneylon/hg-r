const Messages = () => {
  // TODO : get message from server.

  // Create New message component

  return (
    <div>
      <h1>Messages</h1>
      <div>
        <h2>New Message</h2>
        <select name="recipient" id="recipient">
          <option value="userId">User Name</option>
        </select>
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
