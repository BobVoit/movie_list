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
    const [commentsValue, setCommentsValue] = useState([]);


    useEffect(() => {
        setCommentsValue(() => {
            const arrayComments = comments.find(comment => comment.filmId == id);
            return arrayComments ? arrayComments.comments : [];
        })
    }, [comments]);

    const addComment = (value) => {
        const element = comments.find(comment => comment.filmId == id);
        if (element) {
            const data = {
                id: element.comments.length + 1,
                date: getCurrentDate(),
                author: 'You',
                value
            }
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
            const data = {
                id: 1,
                date: getCurrentDate(),
                author: 'You',
                value
            }
            setComments((comments) => [...comments, { filmId: id, comments: [data] }]);
        }
    }

    return (
        <ComponentWrapper>
            <Form 
                action={addComment}
            />
            {commentsValue.map((comment) => <Comment 
                key={comment.id} 
                date={comment.date}
                comment={comment.value}
                author={comment.author}
            />)}
        </ComponentWrapper>
    )
}

export default Comments;