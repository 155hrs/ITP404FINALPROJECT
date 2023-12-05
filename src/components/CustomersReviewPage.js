import React, { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';

const CustomersReviewPage = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [commenterName, setCommenterName] = useState('');
    document.title = "Customers Reviews Page";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!commenterName || !newComment) {
            toast.error("Please fill all fields.");
            return;
        }
    
        const timestamp = new Date().toISOString();
        const commentData = { commenterName, comment: newComment, timestamp };
    
        setComments([commentData, ...comments]);
        setNewComment('');
        setCommenterName('');
        toast.success('Comment added successfully!');
    };
    

    return (
        <div className='container'>
            <h1>Customer Reviews</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={commenterName} 
                    onChange={(e) => setCommenterName(e.target.value)} 
                    placeholder="Your name" 
                    required 
                    className='form-control'
                />
                <textarea 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                    placeholder="Your comment" 
                    required 
                    className ='form-control'
                />
                <button type="submit" className='btn btn-primary'>Submit Comment</button>
            </form>

            <div>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <p><strong>{comment.commenterName}</strong> ({comment.timestamp}):</p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default CustomersReviewPage;
