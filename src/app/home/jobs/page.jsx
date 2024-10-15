import TweetComponent from "@/components/tweet/TweetComponent";

const HomeJobsPage = () => {
  const tweets = Math.floor(Math.random() * 24 + 10);
  const IndividualTweets = [];

  for (let index = 0; index < tweets; index++) {
    IndividualTweets.push(<TweetComponent key={index} />);
  }

  return <div>{IndividualTweets}</div>;
};

export default HomeJobsPage;
