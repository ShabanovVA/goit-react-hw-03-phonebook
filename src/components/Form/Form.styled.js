import styled from "styled-components";

export const FormContact = styled.form`
display:flex;
flex-direction: column;
width:500px;
border: 1px solid black;
background-color:gainsboro;
`;

export const ContactFormLabel = styled.label`
display:flex;
flex-direction: column;
margin:10px 0 0 10px;
font-weight: 400;
font-size: 24px;
`;

export const ContactFormInput = styled.input`
width:250px;
height:25px;
margin-top:10px;
border: 1px solid grey;
border-radius:5px;
font-weight: 600;
font-size: 14px;

&:hover,
&:focus{
    border: 2px solid grey;
    box-shadow: 1px 1px 3px 3px #4169E1;    
}
`;

export const AddContactBtn = styled.button`
margin:30px 0 10px 10px;
width:100px;
height:30px;
font-weight: 600;
font-size: 14px;
border: 1px solid grey;
border-radius:7px;
background-color:white;
transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus{
    background-color:#4169E1;
}
`;