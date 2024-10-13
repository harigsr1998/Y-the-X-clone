import Link from "next/link";

const NotificationsLayoutPage = ({ children }) => {
  return (
    <div className="flex flex-col gap-[2px] bg-gray-500">
      <div className="flex shrink-0 grow-0 justify-between gap-0 [&>*]:grow [&>*]:bg-black [&>*]:text-center">
        <Link href="/notifications/all">All</Link>
        <Link href="/notifications/verified">Verified</Link>
        <Link href="/notifications/mentions">Mentions</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NotificationsLayoutPage;
