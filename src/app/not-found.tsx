import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-[11px] tracking-[0.3em] text-stone-500 uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl text-stone-900">Page not found</h1>
      <Link
        href="/"
        className="mt-8 text-[11px] tracking-[0.2em] text-stone-800 uppercase underline"
      >
        Return home
      </Link>
    </div>
  );
}
