import { formatDate } from "../../utils/formatDate";

const Comment = () => {
    const { text: commentText, rating, author, date } = comment;
    return (
    <p>
        {commentText}
        <br />
        {rating}/5 stars -- {author}, {formatDate(date)}
    </p>
    );
};

export default Comment;