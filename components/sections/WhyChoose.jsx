import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/button"; // ShadCN Button

// "How It Works" Steps
const howItWorks = [
  { emoji: "📅", title: "Book Online", desc: "Quick & easy via app or website." },
  { emoji: "✅", title: "Confirm Slot", desc: "Get details on WhatsApp—no hassle." },
  { emoji: "🚗", title: "Free Pickup", desc: "Verified via OTP, with photos taken." },
  { emoji: "🔍", title: "Inspection Begins", desc: "Detailed checks before service." },
  { emoji: "📜", title: "Approval First", desc: "Receive an estimate, approve, and we proceed." },
  { emoji: "🛠️", title: "Service in Progress", desc: "Track real-time updates." },
  { emoji: "🎉", title: "Delivery Done Right", desc: "Get your car back, ready for Riyadh." },
];

// "Why Choose Us" Reasons
const whyChooseUs = [
  "🔹 Certified mechanics—no guesswork.",
  "🔹 Genuine parts with warranty.",
  "🔹 Transparent pricing—no hidden fees.",
  "🔹 Free pickup & drop-off.",
  "🔹 Real-time updates—stay informed.",
];

const WhyChoose = () => {
  return (
    <section className="paddings">
      <SectionHeading title="Why Choose GoMechanic in Riyadh" />

      {/* Intro */}
      <p className="text-gray-600 mb-4">
        Riyadh's roads, heat, and pace demand expert car care. Whether it's daily commutes, desert drives, or city traffic—your car deserves service that understands Riyadh.
      </p>



      {/* How It Works */}
      <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">How It Works</h3>
      <ol className="text-gray-700 space-y-3">
        {howItWorks.map((step, index) => (
          <li key={index}>
            <strong>{step.emoji} {step.title}:</strong> {step.desc}
          </li>
        ))}
      </ol>

      {/* Why Choose Us */}
      <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Why Riyadh Picks Us</h3>
      <ul className="text-gray-700 space-y-3">
        {whyChooseUs.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Button className="w-full md:w-auto" variant="default">
          Book a Service
        </Button>
        <Button className="w-full md:w-auto" variant="outline">
          Call for Help
        </Button>
      </div>
    </section>
  );
};

export default WhyChoose;
