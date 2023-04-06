import styled from "styled-components";

export const Contact = styled.li`
display:flex;
width:400px;
justify-content: space-between;
`;

export const ContactValue = styled.p`
margin: 5px 0;
font-weight: 600;
font-size: 22px;
`;

export const DeleteContactBtn = styled.button`
margin: 5px 0;
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