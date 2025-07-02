import axios from "axios";
import { useState } from "react";

export default function ReviewForm({ movie_id, reloadReviews }) {
  const emptyReview = {
    name: "",
    vote: 1,
    text: "",
  };
  const [formData, setFormData] = useState(emptyReview);

  const setFieldValue = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:3000/movies/${movie_id}/reviews`, formData).then((resp) => {
      console.log(resp);
      setFormData(emptyReview);

      reloadReviews();
    });
  };

  return (
    <form className="card-body" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={setFieldValue} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="vote">
          Vote
        </label>
        <select className="form-select" name="vote" id="vote" value={formData.vote} onChange={setFieldValue}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="text">
          Comment
        </label>
        <textarea className="form-control" name="text" id="text" value={formData.text} onChange={setFieldValue}></textarea>
      </div>
      <button className="btn btn-primary" type="submit">
        Invia
      </button>
    </form>
  );
}
