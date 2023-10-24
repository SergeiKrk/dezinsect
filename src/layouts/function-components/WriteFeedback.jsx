const fetch = require("node-fetch");

const telegramBotToken = "6735512239:AAEaEX6NrSZWIUaY0z-B-30sJRX78-KKFAo";
const chatId = "-1002004060031"; // Ваш ID чата в Telegram

const express = require("express");
const app = express();
const port = 3001; // Порт вашего сервера

app.use(express.json());

app.post("/submit", (req, res) => {
  const { name, rating, message } = req.body;

  if (!name || !rating || !message) {
    res.status(400).send("Пожалуйста, заполните все поля формы.");
    return;
  }

  const text = `Отзыв\nИмя: ${name}\nОценка: ${rating}\nОтзыв: ${message}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${text}`;

  fetch(url, { method: "POST" })
    .then(() => {
      res.status(200).send("Отзыв успешно отправлен в Telegram.");
    })
    .catch((error) => {
      console.error("Ошибка отправки в Telegram:", error);
      res.status(500).send("Произошла ошибка при отправке отзыва.");
    });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
