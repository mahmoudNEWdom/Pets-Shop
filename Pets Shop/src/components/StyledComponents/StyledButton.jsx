import { styled } from 'styled-components';

const StyledButton = styled.button`
    background-color: #3d2f26;
    border: 2px solid #000; /* Increased border width for outlines */
    color: white;
    padding: 15px 60px; /* Increased padding */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
        background-color: ${({ variant }) => {
            if (variant === "outline") return "#A67B5B";
            if (variant === "no outline") return "#ECB176";
            return "#FED8B1";
        }};
        color: black;
        border: 2px solid #000; /* Optional: Change border on hover */
    }
`;
export { StyledButton };