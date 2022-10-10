import { StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel, StyledTitle, colors, ButtonGroup, TextLink, ExtraText } from "./../components/Styles";

// formik
import {Formik, Form} from 'formik';
import { TextInput } from "./../components/FormLib";
import * as Yup from 'yup';

// auth & redux
import {connect} from 'react-redux';
import { signupUser } from "./../auth folder/actions/userActions";
import {useHistory } from 'react-router-dom';

const Signup = ({signupUser}) => {
    const history = useHistory();
    return(
        <div>
            <StyledFormArea>
                <StyledTitle color={colors.theme} size={25}>
                    New member sign up
                </StyledTitle>
                <Formik>
                     initialValues={{
                        name: "",
                        username: "",
                        password: "",
                     }}
                     validationSchema={
                        Yup.object({
                            name: Yup.string(),
                            username: Yup.string().username('Please enter your username').required('Required'),
                            password: Yup.string().min(4, 'Password is too short').required('Required'),
                        })
                     }

                     onSubmit={(values, {setSubmitting, setFieldError}) =>
                     signupUser(values, history, setFieldError, setSubmitting )
                     }
                        {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                                name="name"
                                type="text"
                                label="name"
                            />
                            <TextInput 
                                name="username"
                                type="text"
                                label="username"
                            />
                            <TextInput 
                                name="password"
                                type="password"
                                label="password"
                            />
                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                    Log in
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                        )}
                </Formik>
                <ExtraText>
                    Have an account? <TextLink to='/Login'>Log in.</TextLink>
                </ExtraText>
            </StyledFormArea>
        </div>
    )
}

export default connect(null, {signupUser})(Signup);