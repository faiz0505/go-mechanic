import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

// Team Members Data
const coreTeam = [
  {
    name: "Ahmed Al-Faisal",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Visionary leader with 15+ years in automotive services. Passionate about innovation and customer satisfaction.",
  },
  {
    name: "Sarah Al-Mutairi",
    role: "Chief Operating Officer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Ensures smooth operations and service excellence, bringing expertise in logistics and management.",
  },
  {
    name: "Mohammed Al-Harbi",
    role: "Head of Technology",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Drives digital transformation, ensuring our platform is seamless and efficient.",
  },
  {
    name: "Layla Al-Shehri",
    role: "Head of Customer Success",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Dedicated to building strong customer relationships and delivering outstanding support.",
  },
];

// Core Values
const coreValues = [
  {
    title: "Customer First",
    desc: "We prioritize customer satisfaction above all.",
  },
  { title: "Transparency", desc: "No hidden costs, just honest service." },
  {
    title: "Innovation",
    desc: "Constantly improving through technology and expertise.",
  },
  {
    title: "Reliability",
    desc: "You can trust us to deliver quality, always.",
  },
];

const AboutUs = () => {
  return (
    <section className="paddings py-10">
      {/* Heading */}
      <SectionHeading
        title="About Us"
        subTitle={
          "GoMechanic is revolutionizing car servicing in Riyadh. We believe in **convenience, transparency, and quality**—bringing top-notch car care to your doorstep."
        }
      />

      {/* Company Overview */}
      <p className="text-gray-600 mb-6"></p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-700 text-center md:text-start">
            Our Mission
          </h3>
          <p className="text-gray-600 mt-2 text-center md:text-start">
            To simplify car servicing with technology-driven solutions, ensuring
            hassle-free and high-quality care for every vehicle.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-gray-700 text-center md:text-start">
            Our Vision
          </h3>
          <p className="text-gray-600 mt-2 text-center md:text-start">
            To be the **most trusted** car service provider in the region,
            offering unparalleled convenience and service quality.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 text-center md:text-start">
        Our Core Values
      </h3>
      <ul className="grid md:grid-cols-2 gap-4 text-center md:text-start">
        {coreValues.map((value, index) => (
          <li key={index} className="p-4 border rounded-lg shadow">
            <h4 className="md:font-semibold font-bold text-gray-800">
              {value.title}
            </h4>
            <p className="text-gray-600 text-sm">{value.desc}</p>
          </li>
        ))}
      </ul>

      {/* Core Team Section */}
      <h3 className="text-2xl font-semibold text-gray-700 mt-8 mb-4 text-center md:text-start">
        Meet Our Core Team
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {coreTeam.map((member, index) => (
          <div key={index} className="p-4 border rounded-lg shadow text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h4 className="font-semibold text-gray-800 mt-3">{member.name}</h4>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center">
        <Button className="bg-primary text-white shadow-xs hover:bg-primary/90 w-full md:w-auto">
          Explore Our Services
        </Button>
        <Button className="border bg-background text-primary shadow-xs hover:bg-accent hover:text-accent-foreground w-full md:w-auto">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
