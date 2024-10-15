'use client'
import { useState } from "react";

export default function BirthdayPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<{ name: string; message: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && message) {
      setWishes([...wishes, { name, message }]);
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h1>🎉 It's My Birthday Tomorrow! 🎉</h1>
      <p>Leave a wish and make my day special!</p>

      <form onSubmit={handleSubmit} className="wish-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="input-field"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Birthday Wish"
          required
          className="input-field"
        ></textarea>
        <button type="submit" className="submit-btn">Send Wish</button>
      </form>

      <div className="wishes-list">
        <h2>🎁 Birthday Wishes 🎁</h2>
        {wishes.length === 0 ? (
          <p>No wishes yet. Be the first!</p>
        ) : (
          wishes.map((wish, index) => (
            <div key={index} className="wish">
              <strong>{wish.name}:</strong>
              <p>{wish.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

