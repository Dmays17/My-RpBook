import styled from 'styled-components';

// background
import background from './../assets/food-background.jpg';

// react router
import {Link} from 'react-router-dom';

export const colors ={
    primary: '#fff',
    theme: "be185d",
    light1: '#f3f4f6',
    light2: '#e5e6eb',
    dark1: '#1f2937',
    dark2: '#4b5563',
    dark3: '#9ca3af',
    red: '#dc2626'
}

// styled components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rbga(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

// home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}pz;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primart};
    padding: 5px;
    margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}pz;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primart};
    padding: 5px;
    margin-bottom: 25px;
`;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    text-align: center;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;

// input
export const StyledTextInput = styled.input`
    width: 280px;
    font-size: 17px;
    color: ${colors.light2};
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg || colors.light1};
    text-align: center;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    text-align: center;
`;

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : colors.dark2)}
`;

export const TextLink = styled(Link)`
    color: ${colors.theme};

    &:hover {
        text-decoration: underline;
        font-weight: bold;
    }
`;