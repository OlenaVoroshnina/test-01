import { TweetsText, FollowersText } from "./Tweets.styled";

export const Tweets = ({numberOfFollowers}) => {
  return (
    <>
        <TweetsText> 777 tweets</TweetsText>
        <FollowersText>
            <span>{numberOfFollowers} </span>
            Followers 
        </FollowersText>
    </>
  );
};