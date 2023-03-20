import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px;
  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#EBD8FF'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover,
  &:focus,
  &:active {
    transform: translateY(-3px);
  }
`;
export const ButtonText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  text-transform: uppercase;
`;
