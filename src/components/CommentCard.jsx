import { Link } from 'react-router'

function CommentCard ({ comment }) {
    return (
        <div className='comment-box'>
            <Link to={"/users/"+comment.author}>{comment.author}</Link>
            <img src={comment.author} />
            <p>{comment.body}</p>
        </div>
    )

}

export default CommentCard