import Link from "next/link";

export default function Blog() {
  return (
      <div>
            <h1>Welcome to Blogs</h1>
            <Link href='/blogs/1'>Blog 1</Link>
            <Link href='/blogs/2'>Blog 2</Link>
      </div>
      
  );
}