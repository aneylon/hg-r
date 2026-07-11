const Message = (message) => {
  console.log(message);
  return (
    <div>
      <h1>realy {message.message.title}</h1>
      <h2>from: {message.message.authorId}</h2>
      <p>{message.message.content}</p>
    </div>
  );
};

export default Message;
