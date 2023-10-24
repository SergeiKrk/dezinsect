import React, { useState } from "react";
import axios from "axios";

function TelegramBotMessageSender() {
  const [message, setMessage] = useState("");
  const botToken = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID";

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
        }
      );

      if (response.data.ok) {
        alert("Сообщение отправлено успешно!");
        setMessage("");
      } else {
        alert("Произошла ошибка при отправке сообщения.");
      }
    } catch (error) {
      console.error(error);
      alert("Произошла ошибка при отправке сообщения.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение"
      />
      <button onClick={sendMessage}>Отправить сообщение</button>
    </div>
  );
}

export default TelegramBotMessageSender;
