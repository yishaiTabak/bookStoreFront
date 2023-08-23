import React from "react";

const BookFormContent = ({ data }) => {
  const {
    bookDetails,
    title,
    submitText,
    closeForm,
    onSendForm,
    setName,
    setAuthor,
    setPrice,
    setDiscount,
    setImg,
    setDescription,
  } = data;

  return (
    <div className="book-form-container">
      <form className="book-form" onSubmit={onSendForm}>
        <h2 className="form-title">{title}</h2>
        <div className="input-section">
          <div className="inputs-container">
            name:
            <input
              className="form-input"
              type="text"
              minLength={2}
              placeholder="name"
              defaultValue={bookDetails?.name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            author:
            <input
              className="form-input"
              type="text"
              minLength={2}
              placeholder="author"
              defaultValue={bookDetails?.author || ""}
              onChange={(e) => setAuthor(e.target.value)}
            />
            price:
            <input
              className="form-input"
              type="number"
              placeholder="price"
              defaultValue={bookDetails?.price || ""}
              min={0}
              onChange={(e) => setPrice(e.target.value)}
            />
            discount precentage:
            <input
              className="form-input"
              type="number"
              placeholder="discount"
              defaultValue={bookDetails?.discount}
              max={100}
              min={0}
              onChange={(e) =>
                setDiscount(e.target.value === "" ? 0 : e.target.value)
              }
            />
          </div>
          <div className="text-areas-container">
            img source:
            <textarea
              className="form-input"
              type="text"
              minLength={5}
              placeholder="img source"
              defaultValue={bookDetails?.img || ""}
              onChange={(e) => setImg(e.target.value)}
            />
            description:
            <textarea
              className="form-input"
              type="text"
              minLength={20}
              placeholder="description"
              defaultValue={bookDetails?.description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button className="submit-book-form" type="submit">
          {submitText}
        </button>
      </form>
      <button onClick={closeForm} className="close-book-form">
        close
      </button>
    </div>
  );
};

export default BookFormContent