import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col-reverse p-4">
        <Link href="/week-2" className="mb-1">
          Week 2
        </Link>
        <Link href="/week-3" className="mb-1">
          Week 3
        </Link>
        <Link href="/week-4" className="mb-1">
          Week 4
        </Link>
        <Link href="/week-5" className="mb-1">
          Week 5
        </Link>
      </div>
    </main>
  );
}
