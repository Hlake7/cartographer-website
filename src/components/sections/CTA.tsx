import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-4xl text-white md:text-5xl">
          Start Exploring Utah&apos;s Parcels Today
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Join professionals across Utah who rely on Cartographer for fast,
          accurate parcel data.
        </p>
        <div className="mt-8">
          <Button href="#pricing" variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
