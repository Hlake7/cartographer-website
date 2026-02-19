import { Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ManageForm from "@/components/ui/ManageForm";

export const metadata = {
  title: "Manage Subscription — Cartographer",
};

export default function ManagePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue/10">
            <Mail className="h-8 w-8 text-blue" />
          </div>

          <h1 className="mt-6 font-serif text-4xl text-navy">
            Manage Your Subscription
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Enter the email address you used when subscribing. We&apos;ll
            resend your Google Earth link, which includes a button to manage or
            cancel your subscription.
          </p>

          <div className="mt-8">
            <ManageForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
