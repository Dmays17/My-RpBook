import { StyledTitle, StyledButton, ButtonGroup, StyledFormArea, colors } from "../components/Styles";
import background from './../assets/food-background.jpg'

// auth & redux
import { connect } from 'react-redux';
import { logoutUser } from "./../auth folder/actions/userActions";

import {useHistory} from 'react-router-dom';

const Dashboard = ({logoutUser}) => {
    const history = useHistory();
    return(
        <div>
           
            <StyledFormArea bf={colors.dark2}>
            <ButtonGroup>
                 <StyledTitle>
                    Welcome
                </StyledTitle>
                <StyledButton to='/MyBook'>My Book</StyledButton> 
                <StyledButton to='#' onClick={() => logoutUser(history)}>Log out</StyledButton>
            </ButtonGroup>
            </StyledFormArea>


        </div>
    );
}

export default connect(null, {logoutUser})(Dashboard);