import Link from "next/link";

export default function ReviewList() {
    return (
          <div>
            <h1>Review List</h1>
            <Link href='/products/1/reviews/1'>Review 1</Link>
            <Link href='/products/2/reviews/2'>Review 2</Link>
            <Link href='/products/3/reviews/3'>Review 3</Link>
          </div>
    );
  }