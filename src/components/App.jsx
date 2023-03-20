import React from 'react';
import { useState, useEffect } from 'react';
import storage from 'helpers/storage';
import { Card } from './App.styled';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Button } from 'components/Button/Button';
import { Avatar } from 'components/Avatar/Avatar';
import { Tweets } from 'components/Tweets/Tweets';
import { Container } from "./App.styled";

export const App = () => {
  
  const [isFollowing, setIsFollowing] = useState(storage.load('isFollowing') ?? false);
  const [followers, setFollowers] = useState(storage.load('followers') ?? 100500);

  useEffect(() => {
    storage.save('isFollowing', isFollowing);
    storage.save("followers", followers)
  }, [followers, isFollowing]);

  const handleButtonClick = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers(prevState => prevState - 1);
    } else {
      setIsFollowing(true);
      setFollowers(prevState => prevState + 1);
    }
  };

  const addComma = num => {
    let numStr = String(num);
    let x = numStr.slice(0, 3);
    let y = numStr.slice(3, 6);
    return x + ',' + y;
  };

  let numberOfFollowers = addComma(followers);

  return (
    <Container>
      <Card>
        <Header/>
        <Hero/>
        <Avatar></Avatar>
        <Tweets numberOfFollowers = {numberOfFollowers}></Tweets>
        <Button  onClickButton = {handleButtonClick} isFollowing = {isFollowing}></Button>
      </Card>
    </Container>
  );
};
