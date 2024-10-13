import Link from "next/link";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-[2px] bg-gray-500">
      <div className="flex shrink-0 grow-0 justify-between gap-0 [&>*]:grow [&>*]:bg-black [&>*]:text-center">
        <Link href="/home/foryou">For you</Link>
        <Link href="/home/following">Following</Link>
        <Link href="/home/jobs">Jobs</Link>
      </div>
      <div className="grow">{children}</div>
    </div>
  );
};

export default HomeLayout;
