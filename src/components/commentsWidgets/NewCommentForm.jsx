import { useState } from "react";
import reviews from "../../api/api";

function NewCommentForm({ id, setSubmittedComment, isLoading, setIsLoading }) {
  const [commentValue, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentValue && !isLoading) {
      setIsLoading(true);
      reviews
        .post(`/reviews/${id}/comments`, {
          username: "jessjelly",
          body: commentValue,
        })
        .then((response) => {
          setSubmittedComment(response.data.body);
          setIsLoading(false);
          setComment(""); 
        });
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newComment">New Comment</label>
      <textarea
        id="newComment"
        value={commentValue}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={isLoading}>
        Add Comment
      </button>
    </form>
  );
}
export default NewCommentForm;
