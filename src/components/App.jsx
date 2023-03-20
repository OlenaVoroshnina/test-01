import React from 'react';
import { Card } from './App.styled';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Button } from 'components/Button/Button';
import { Avatar } from 'components/Avatar/Avatar';
import { Tweets } from 'components/Tweets/Tweets';
import { Container } from "./App.styled";

export const App = () => {
  
  return (
    <Container>
      <Card>
        <Header/>
        <Hero/>
        <Avatar></Avatar>
        <Tweets></Tweets>
        <Button></Button>
      </Card>
    </Container>
  );
};
