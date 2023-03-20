import { Rectangle, Image, ImageBox } from './Avatar.styled';
import avatarImg from '../../images/avatar.png';

export const Avatar = () => {
  return (
    <>
      <Rectangle />
      <ImageBox>
        <Image src={avatarImg} alt="Avatar" />
      </ImageBox>
    </>
  );
};
