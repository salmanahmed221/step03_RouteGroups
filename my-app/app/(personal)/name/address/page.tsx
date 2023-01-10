import Link from "next/link";

export default function Address() {
  return (
    <div>
      I Live in Lahore, Pakistan
      <br />
      <br />
      <button>
        <Link href={"/"}>Go to Home Page</Link>
      </button>
    </div>
  );
}
