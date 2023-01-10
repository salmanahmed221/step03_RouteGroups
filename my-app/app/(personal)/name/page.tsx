import Link from "next/link";

export default function Name() {
  return (
    <div>
      My name is Salman Ahmed
      <br />
      <br />
      <button>
        <Link href={"/name/address"}>Go to Address Page</Link>
      </button>
    </div>
  );
}
