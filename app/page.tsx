
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div>Home page.</div>
        <div>
          <Link className="underline text-blue-500" href={"/back-office"}>Back-Office</Link>
        </div>
      </div>
    </>
  );
}
