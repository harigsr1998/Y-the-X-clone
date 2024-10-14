import Link from "next/link";

const HomeLayout = ({ children }) => {
  return (
    <div className="mt-2 flex flex-col">
      <div className="flex shrink-0 grow-0 justify-between gap-0 [&>*]:grow [&>*]:bg-black [&>*]:text-center">
        <Link href="/home/foryou">For you</Link>
        <Link href="/home/following">Following</Link>
        <Link href="/home/jobs">Jobs</Link>
      </div>
      <div className="grow border-y border-gray-500 bg-black">{children}</div>
    </div>
  );
};

export default HomeLayout;
