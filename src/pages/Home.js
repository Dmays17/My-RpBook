import { StyledTitle, StyledButton, ButtonGroup } from "../components/Styles";
import background from './../assets/food-background.jpg'

const Home = () => {
    return(
        <div>
            <div>
                <StyledTitle>
                    My RP Book
                </StyledTitle>
            </div>

            <ButtonGroup>
                <StyledButton to='/login'>Log in</StyledButton>
                <StyledButton to='/signup'>Sign up</StyledButton>
            </ButtonGroup>
        </div>
    );
}

export default Home;