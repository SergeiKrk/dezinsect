import React, { useState } from "react";

function WriteFeedback() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Отправка данных на сервер или другая обработка отзыва

    // Очистка полей формы
    setName("");
    setText("");
    setRating(1);
  };

  return (
    <div className="mx-auto mt-4 w-1/2">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-white p-8 shadow-md"
      >
        <h2 className="mb-4 text-2xl font-semibold">Оставить отзыв</h2>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Имя:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="text"
          >
            Текст отзыва:
          </label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="rating"
          >
            Оценка:
          </label>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border p-2"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default WriteFeedback;
