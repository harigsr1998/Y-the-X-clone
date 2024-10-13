import Link from "next/link";

const CommunitiesLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-[2px] bg-gray-500">
      <div className="flex shrink-0 grow-0 justify-between gap-0 [&>*]:grow [&>*]:bg-black [&>*]:text-center">
        <Link href="/communities/home">Home</Link>
        <Link href="/communities/explore">Explore</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CommunitiesLayout;
