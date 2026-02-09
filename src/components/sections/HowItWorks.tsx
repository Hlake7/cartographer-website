import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-navy md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started in three simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue text-xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
