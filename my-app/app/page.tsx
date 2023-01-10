import Link from "next/link";

export default function Welcome() {
  return (
    <div>
      Hello World
      <br />
      <br />
      <button>
        <Link href={"/name"}>Go to Name Page</Link>
      </button>
    </div>
  );
}
