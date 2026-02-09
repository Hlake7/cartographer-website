import { CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Welcome to Cartographer",
};

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald/10">
            <CheckCircle className="h-8 w-8 text-emerald" />
          </div>

          <h1 className="mt-6 font-serif text-4xl text-navy">
            You&apos;re All Set!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your Cartographer subscription is active. Here&apos;s how to get
            started:
          </p>

          <div className="mt-8 rounded-xl bg-gray-50 p-6 text-left">
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  1
                </span>
                <span>
                  Open <strong>Google Earth Pro</strong> on your computer (it&apos;s
                  free from Google).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  2
                </span>
                <span>
                  Check your email for your <strong>personal Cartographer link</strong>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  3
                </span>
                <span>
                  Paste the link into Google Earth Pro by going to{" "}
                  <strong>Add &rarr; Network Link</strong> and entering the URL.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  4
                </span>
                <span>
                  Navigate to Utah and <strong>zoom in</strong> — parcels will
                  appear automatically!
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-8">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
