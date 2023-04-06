import styled from "styled-components";

export const FilterLabel = styled.label`
display:flex;
flex-direction: column;
margin:10px 0 0 10px;
font-weight: 400;
font-size: 24px;
`;

export const FilterFormInput = styled.input`
width:250px;
height:25px;
margin-top:5px;
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