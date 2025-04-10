import footerLinks from "@/utils/footer";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Calendar,
  Car,
  Clock,
  Copyright,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { contactInfo, socialMediaLinks } from "@/utils";
import QueryLink from "../QueryLink";

const Footer = () => {
  const socialMedia = [
    {
      icon: <Facebook />,
      url: socialMediaLinks.facebook,
    },
    {
      icon: <Instagram />,
      url: socialMediaLinks.instagram,
    },
    {
      icon: <Twitter />,
      url: socialMediaLinks.twitter,
    },

    {
      icon: <Youtube />,
      url: socialMediaLinks.youtube,
    },
  ];

  return (
    <footer className="mt-4">
      {/* footer links section for desktop view */}
      <section className="w-full bg-[#071c2c] py-4 paddings lg:flex justify-between text-sm hidden">
        {footerLinks.map((item, i) => (
          <aside key={i}>
            <Link
              href={item.href ? item.href : "/"}
              className="text-lavender-light uppercase font-light"
            >
              {item.category}
            </Link>
            <ul className="mt-4 space-y-2 font-semibold text-cream ">
              {item.links.map((link) =>
                item.category === "About Us" ||
                item.category === "Our Services" ? (
                  <li
                    key={link.name}
                    className="hover:text-lavender-light hover:underline"
                  >
                    <Link href={link.url || "#"}>{link.name}</Link>
                  </li>
                ) : (
                  <QueryLink
                    key={link.name}
                    label={link.name}
                    param={link.url.includes("location") ? "location" : "brand"}
                    value={link.url.split("=")[1]}
                    className="hover:text-lavender-light hover:underline cursor-pointer"
                  />
                )
              )}
            </ul>
          </aside>
        ))}
      </section>
      {/* footer links section for Mobile view */}
      <section className="w-full bg-[#071c2c] py-4 paddings lg:hidden">
        <Accordion collapsible>
          {footerLinks.map((item, i) => (
            <AccordionItem
              key={i}
              value={item.category}
              className={"border-b-0"}
            >
              <AccordionTrigger className="text-lavender-light uppercase font-light">
                {item.category}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mt-4 space-y-2 font-semibold text-cream">
                  <li>
                    <Link href={item.href || "#"} className="">
                      {item.category}
                    </Link>
                  </li>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url || "#"} className="">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="paddings py-4 bg-charcoal grid md:grid-cols-2 gap-y-8">
        <aside className="flex flex-col gap-2 items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 text-cream">
            <Car className="h-8 w-8" />
            <span className="text-xl font-bold">GoMechanic</span>
          </Link>
          <p className="text-cream text-pretty text-sm max-w-xs text-center md:text-start leading-6">
            7th Floor, Tower B, King Fahd Business Park, King Fahd Road, Al
            Olaya District, Riyadh, Saudi Arabia 12212
          </p>
          <ul className="text-cream flex gap-6 mt-2">
            {socialMedia.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.icon}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <aside className=" text-white flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3 mb-3">
            <Mail className="w-5 h-5" />
            <span>Email</span>
            <span className="font-medium ">{contactInfo.email}</span>
          </div>

          <div className="flex items-center space-x-3 mb-3">
            <Phone className="w-5 h-5" />
            <span>Phone Number</span>
            <span className="font-medium ">{contactInfo.phone}</span>
          </div>

          <div className="flex items-center space-x-3 mb-3">
            <Calendar className="w-5 h-5" />
            <span>Working Days</span>
            <span className="font-medium ">{contactInfo.workingDays}</span>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5" />
            <span>Working Hours</span>
            <span className="font-medium ">{contactInfo.workingHours}</span>
          </div>
        </aside>
        <p className="col-span-full text-center text-cream text-xs flex items-center gap-1 justify-center">
          <span>
            <Copyright size={16} />
          </span>{" "}
          2025 Bottrion System Private Limited.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
