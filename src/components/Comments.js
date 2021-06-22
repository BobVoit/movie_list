import { useState, useEffect } from "react";
import styled from "styled-components"
import Form from './Form';
import { useLocalStorage } from "../utils/useLocalStorage";
import Comment from "./Comment";
import { getCurrentDate } from "../utils/common";


const ComponentWrapper = styled.div`

`;

const Comments = ({ id }) => {
    const [comments, setComments] = useLocalStorage('comments', []);

    const addComment = (value) => {
        const element = comments.find(comment => comment.filmId == id);
        const data = {
            id: comments.length + 1,
            date: getCurrentDate,
            author: 'You',
            value
        }
        if (element) {
            setComments((comments) => {
                return comments.map((comment) => {
                    if (comment.filmId == id) {
                        return {
                            ...comment,
                            comments: [...comment.comments, data]
                        }
                    }
                    return comment;
                })
            })
        } else {
            setComments((comments) => [...comments, { filmId: id, comments: data }]);
        }
    }
    
    return (
        <ComponentWrapper>
            <Form 
                action={addComment}
            />
            {comments.map((comment) => comment.fildId == id ? <Comment 
                key={comment.filmId} 
                date={comment.id}
                comment={comment}
            /> : null)}
        </ComponentWrapper>
    )
}

export default Comments;