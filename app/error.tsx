"use client";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-16 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-neutral-700">
          An unexpected error occurred. Please try again, or contact us if the problem continues.
        </p>
      </div>
    </section>
  );
}
