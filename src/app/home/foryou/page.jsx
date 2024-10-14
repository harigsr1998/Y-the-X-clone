import TweetComponent from "@/components/tweet/TweetComponent";

const HomeForYouPage = () => {
  const tweets = Math.floor(Math.random() * 24 + 1);
  const IndividualTweets = [];

  for (let index = 0; index < tweets; index++) {
    IndividualTweets.push(<TweetComponent />);
  }

  return <div>{IndividualTweets}</div>;
};

export default HomeForYouPage;
