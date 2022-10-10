import {useField} from 'formik';
import { StyledTextInput, StyledLabel, ErrorMsg } from './../components/Styles';

export const TextInput = ({...props}) => {
    const [field, meta] = useField(props);

    return(
        <div style={{ position: 'relative' }}> 
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            {props.type !== "password" && <StyledTextInput {...field} {...props} />}

            {props.type === "password" && (
                <StyledTextInput 
                    invalid={meta.touched && meta.error}
                    {...field}
                    {...props}
                    type={show ? "text" : "password"}
                    />
            )}
            

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>) : (
                    <ErrorMsg>.</ErrorMsg>
                )
            }
        </div>
    )
}