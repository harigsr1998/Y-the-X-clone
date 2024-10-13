import Link from "next/link";

const SearchLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-[2px] bg-gray-500">
      <div className="flex justify-between [&>*]:grow [&>*]:bg-black [&>*]:text-center">
        <Link href="/search/foryou">For You</Link>
        <Link href="/search/trending">Trending</Link>
        <Link href="/search/news">News</Link>
        <Link href="/search/sports">Sports</Link>
        <Link href="/search/entertainment">Entertainment</Link>
      </div>
      <div className="grow">{children}</div>
    </div>
  );
};

export default SearchLayout;
