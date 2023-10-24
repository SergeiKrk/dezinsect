import { useState } from "react";
import axios from "axios";

function TelegramBotMessageSender() {
  const [message, setMessage] = useState("");
  const botToken = "6735512239:AAEaEX6NrSZWIUaY0z-B-30sJRX78-KKFAo";
  const chatId = "-1002004060031";

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
    <div className="p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение"
        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
      <button
        onClick={sendMessage}
        className="mt-2 cursor-pointer rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
      >
        Отправить сообщение
      </button>
    </div>
  );
}

export default TelegramBotMessageSender;
