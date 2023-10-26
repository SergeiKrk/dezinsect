import React, { useState } from "react";

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка на заполненность полей
    if (!formData.name || !formData.email || !formData.message) {
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    // Вызываем переданный callback для обработки формы
    onSubmit(formData);
  };

  return (
    <form
      name="Напишите нам"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
      action="/soobshchenie-otpravleno"
    >
      <div className="form-group mb-5">
        <label className="form-label" htmlFor="name">
          Имя
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Ваше имя"
        />
      </div>
      <div className="form-group mb-5">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="адрес вашей почты"
        />
      </div>
      <div className="form-group mb-5">
        <label className="form-label" htmlFor="message">
          Сообщение
        </label>
        <textarea
          className="form-control h-[150px]"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Текст сообщения"
          cols="30"
          rows="10"
        />
      </div>
      <input
        className="btn btn-primary block w-full"
        type="submit"
        value="Отправить сообщение"
      />
    </form>
  );
}

export default ContactForm;
