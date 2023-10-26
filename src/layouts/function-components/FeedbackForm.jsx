import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const telegramBotToken = "6735512239:AAEaEX6NrSZWIUaY0z-B-30sJRX78-KKFAo";
  const chatId = "-1002004060031";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telegramMessage = `New feedback from ${name} (${email}):\n${message}`;

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text: telegramMessage,
        }
      );

      if (response.data.ok) {
        alert("Отзыв отправлен успешно!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Произошла ошибка при отправке отзыва.");
      }
    } catch (error) {
      console.error(error);
      alert("Произошла ошибка при отправке отзыва.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Ваше имя:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="email">Ваш email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <label htmlFor="message">Сообщение:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="5"
        required
      ></textarea>
      <br />
      <button type="submit">Отправить отзыв</button>
    </form>
  );
}

export default FeedbackForm;
