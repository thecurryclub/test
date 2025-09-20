
export const metadata = { title: "Book a Call" };

function getBookingUrl() {
  const url = process.env.NEXT_PUBLIC_BOOK_URL || "https://cal.com/embedded/booking?username=demo";
  return url;
}

export default function Book() {
  const src = getBookingUrl();
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl font-bold">Book a Call</h1>
      <p className="mt-2 text-gray-600">Pick a time that works for you. This uses our live scheduling link.</p>
      <div className="mt-6 aspect-video rounded-xl overflow-hidden border">
        <iframe src={src} className="w-full h-full" allow="payment *; microphone *; camera *; calendar *" />
      </div>
      <p className="text-xs text-gray-500 mt-3">If the scheduler does not load, <a className="underline" href={src} target="_blank">open it in a new tab</a>.</p>
    </section>
  );
}
