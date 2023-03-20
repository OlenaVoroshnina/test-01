import { ButtonContainer } from "./Button.styled";
import { ButtonText } from "./Button.styled";

export const Button = ({onClickButton, isFollowing}) => {
  return(
    <ButtonContainer  type="button" onClick={() => onClickButton()}>
       <ButtonText>{isFollowing ? "Following" : "Follow"}</ButtonText> 
   </ButtonContainer>
  )
};