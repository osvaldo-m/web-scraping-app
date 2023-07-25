import Link from "next/link";

function navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/news">news</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
    </ul>
  );
}

export default navigation;
