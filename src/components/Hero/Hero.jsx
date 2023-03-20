import heroImg from 'images/hero.png';
import { HeroContainer } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      
        <img src={heroImg} alt="Hero" />
      
    </HeroContainer>
  );
};