import TweetComponent from "@/components/tweet/TweetComponent";

import getTweets from "@/data/tweets";

const HomeJobsPage = async () => {
  const tweets = await getTweets();

  const numberOfTweets = Math.floor(Math.random() * 24 + 10);
  const IndividualTweets = [];

  for (let index = 0; index < numberOfTweets; index++) {
    const tweetId = Math.ceil(Math.random() * 34);
    IndividualTweets.push(
      <TweetComponent key={index} id={tweetId} tweet={tweets[tweetId]} />,
    );
  }

  return <div>{IndividualTweets}</div>;
};

export default HomeJobsPage;
