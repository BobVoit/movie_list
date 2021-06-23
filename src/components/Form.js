import { useFormik } from "formik";
import styled from "styled-components";
import send from '../assets/images/send.svg';
import { STYLE } from "../settings";

const FormWrapper = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.1rem .9rem 1.4rem 1.2rem;
    background: rgba(163, 163, 164, 0.1);
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    margin-right: .9rem;
    width: 100%;
    resize: none;
    background: ${STYLE.colors.lightGrey};
    outline: none;
    color: ${STYLE.colors.white};
    border-radius: 5px;
    padding: .9rem 1.1rem;
    font-weight: 300;
    font-size: 2rem;
    line-height: 23.44px;

    &::placeholder {
        font-weight: 200;
        font-size: 2rem;
        line-height: 23.44px;
        color: ${STYLE.colors.white};
    }
`;

const Button = styled.button`
    height: none;
    border-radius: 5px;
    background-color: ${STYLE.colors.grey};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: .7rem 2.1rem .8rem 2.2rem;
    transition: box-shadow .1s ease;
    &:hover {
        box-shadow: 0 0 7px -1px rgba(0, 0, 0, 0.25) inset;
    }
    &:active {
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.25) inset;
    }
`;

const Form = ({ action }) => {
    const formik = useFormik({
        initialValues: {
            comment: ''
        },
        onSubmit: values => {
            if (values.comment) {
                action(values.comment);
                values.comment = '';
            }
        }
    });

    return (
        <FormWrapper
            onSubmit={formik.handleSubmit}
        >
            <TextArea 
                id='comment'
                name='comment'
                onChange={formik.handleChange}
                value={formik.values.comment}
                placeholder='Leave a comment'
            ></TextArea>
            <Button type="submit">
                <img 
                    src={send}
                    alt="send"
                />
            </Button>
        </FormWrapper>
    )
}

export default Form; 