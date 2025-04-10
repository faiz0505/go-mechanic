import BecomePartnerForm from "@/components/BecomePartnerForm";
import PartnerReviewCard from "@/components/PartnerReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Divider from "@/components/ui/Divider";
import SectionHeading from "@/components/ui/SectionHeading";
import { partnerFeedbacks } from "@/utils/dummyData";
import {
  DollarSign,
  Package,
  PackageCheck,
  Tag,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const stepsToBecomePartner = [
    {
      name: "Step 1",
      description:
        "Enter your details and we will get back to you to discuss your business needs",
      image: "/assets/step1.png",
    },
    {
      name: "Step 2",
      description:
        "Signup with GoMechanic using the link received after the conversation",
      image: "/assets/step2.png",
    },
    {
      name: "Step 3",
      description:
        "Onboard GoMechanic technology suite for hassle-free operations",
      image: "/assets/step3.png",
    },
  ];
  const stats = [
    {
      value: "500+",
      label: "Partners already on board",
    },
    {
      value: "SAR 200M",
      label: "Paid out to partners in 2019",
    },
    {
      value: "10000+",
      label: "Services delivered each month",
    },
  ];
  const workshopOwner = [
    {
      title: "Get Customers",
      description: "Get more customers at your workshop.",
      icon: <Users className="text-royal-purple w-10 h-10" />, // People/Customers icon
    },
    {
      title: "Get Support",
      description: "Get spares, consumables, and operations support.",
      icon: <Package className="text-royal-purple w-10 h-10" />, // Box/Spares icon
    },
    {
      title: "Earn More",
      description: "Earn greater revenue and profits.",
      icon: <DollarSign className="text-royal-purple w-10 h-10" />, // Money icon
    },
  ];
  const perks = [
    {
      title: "Competitive Pricing",
      description: "Get nationwide best pricing & discount on bulk procurement",
      icon: <Tag className="text-royal-purple w-10 h-10" />,
    },
    {
      title: "Genuine Spare Parts",
      description: "We use only OEM/OES spare parts",
      icon: <PackageCheck className="text-royal-purple w-10 h-10" />,
    },
    {
      title: "Easy Shipping",
      description: "Get last-mile shipping solutions",
      icon: <Truck className="text-royal-purple w-10 h-10" />,
    },
  ];

  return (
    <div className="py-10 paddings bg-cream min-h-svh">
      <section className="grid md:grid-cols-3 gap-y-8 md:gap-x-4 lg:gap-x-8">
        <aside className="col-span-2 flex flex-col justify-around">
          <div>
            <h2 className="text-2xl font-bold text-center md:text-start">
              Step to partner with GoMechanic
            </h2>
            <p className="text-sm text-dark-gray text-center md:text-start mt-2">
              Onboarding with GoMechanic is a <br className="md:hidden" />{" "}
              simple 3-step process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-4 gap-y-8 ">
            {stepsToBecomePartner.map((step) => {
              return (
                <div key={step.name} className={"flex flex-col items-center"}>
                  <figure className="w-full h-40 relative">
                    <Image
                      src={step.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center absolute"
                      alt={step.name}
                    />
                  </figure>
                  <h4 className="text-lg font-bold text-center mt-4">
                    {step.name}
                  </h4>
                  <p className="text-xs font-semibold text-dark-gray text-center max-w-[90%] mt-2">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </aside>
        <aside>
          <BecomePartnerForm />
        </aside>
      </section>
      <Divider size="xs" />
      <section>
        <SectionHeading
          title={"Join GoMechanic & Grow Your Business"}
          subTitle={
            "Boost your car repair and car spares/accessories business by opting for the GoMechanic Partnership program."
          }
          color={"text-black"}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <h2 className="text-4xl font-bold text-royal-purple text-center">
                {stat.value}
              </h2>
              <p className="text-gray-600 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <Divider size="xs" />
      <section>
        <SectionHeading
          title={"Are You a Workshop Owner?"}
          subTitle={"Join us and get customers, get support and earn more!"}
          color={"text-black"}

        />
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {workshopOwner.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="bg-lavender-light p-2 rounded-full mb-2">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold capitalize text-deep-purple text-center">
                {item.title}
              </h2>
              <p className="text-gray-600 text-center text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Divider size="xs" />
      <section>
        <SectionHeading
          title={"Exclusive Perks for GoMechanic Accessories/Spares Partners"}
          subTitle={"Signup today and enjoy these exclusive benefits."}
          color={"text-black"}

        />
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {perks.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="bg-lavender-light p-2 rounded-full mb-2">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold capitalize text-deep-purple text-center">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm text-center max-w-[90%]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Divider size="xs" />
      <section>
        <SectionHeading
          title={"GoMechanic Happy Partners"}
          subTitle={"Hear it from the workshop owners themselves!"}
          color={"text-black"}

        />
        <Carousel
          opts={{ loop: true, auto: true, autoSpeed: 4000 }}
          className={"mt-10"}
        >
          <CarouselContent>
            {partnerFeedbacks.map((feedback, i) => (
              <CarouselItem key={i} className={"md:basis-1/2 lg:basis-1/3"}>
                <PartnerReviewCard {...feedback} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default page;
