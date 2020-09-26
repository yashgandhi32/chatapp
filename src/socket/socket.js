let URL = process.env.REACT_APP_CHAT_SOCKET_URL;

const initSocketConn = () => {
  
  return new Promise((resolve) => {
    const webSocket = new WebSocket(URL);

    const receive = (onMessageCb) => {
      
      webSocket.onmessage = (event) => {
        let data = JSON.parse(event.data);
        data.message.messageid += "1";
        let temp = data.message.to;
        data.message.to = data.message.from;
        data.message.from = temp;

        onMessageCb(data);
      }
    };

    const send = (message) => webSocket.send(JSON.stringify(message));
    webSocket.onopen = () => resolve({ send, receive });

  });
}

export default initSocketConn;