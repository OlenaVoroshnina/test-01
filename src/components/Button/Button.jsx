import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.styled';
import { ButtonText } from './Button.styled';

export const Button = ({ onClickButton, isFollowing }) => {
  return (
    <ButtonContainer
      type="button"
      onClick={() => onClickButton()}
      isFollowing={isFollowing}
    >
      <ButtonText>{isFollowing ? 'Following' : 'Follow'}</ButtonText>
    </ButtonContainer>
  );
};
Button.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
