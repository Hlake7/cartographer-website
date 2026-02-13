import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left column */}
          <div>
            {/* Eyebrow badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-light px-4 py-1.5 text-sm font-medium text-blue">
              Now covering all 29 Utah counties
            </div>

            <h1 className="font-serif text-5xl leading-tight text-navy md:text-6xl md:leading-tight">
              Every Parcel in Utah, Right Inside Google Earth Pro
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-600 leading-relaxed">
              See 1.67 million parcel boundaries, ownership records, and
              property values on aerial imagery. Subscribe, open a link, and
              start exploring.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#pricing" size="lg">
                Subscribe &mdash; $7/mo
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-sm text-gray-500">
              Cancel anytime. No long-term commitment.
            </p>
          </div>

          {/* Right column — product screenshot */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl">
              <Image
                src="/product_pic.png"
                alt="Google Earth Pro showing Utah parcel boundaries with ownership and property data overlays"
                width={1200}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
