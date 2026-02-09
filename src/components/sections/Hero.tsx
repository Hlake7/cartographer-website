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
                Get Started &mdash; $7/mo
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-sm text-gray-500">
              7-day free trial. Cancel anytime.
            </p>
          </div>

          {/* Right column — screenshot placeholder */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl">
              <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-blue-light to-gray-100 p-8">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-blue/10 flex items-center justify-center">
                    <svg className="h-8 w-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-500">
                    Google Earth Pro with Parcel Overlays
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Replace with your screenshot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
