import { Star } from "lucide-react";
import Divider from "../ui/Divider";
import ReviewCard from "../ui/ReviewCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { reviews, stats } from "@/utils/dummyData";
import SectionHeading from "../ui/SectionHeading";
import { formatStatesValue } from "@/utils/formatter";


const RatingAndReview = () => {
  return (
    <section className="paddings">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-y-1 text-center"
        >
          <h3 className="text-2xl font-bold text-deep-purple">
            {stat.isRating ? (
              <span className="flex items-center gap-1">
                {stat.value} <Star className="w-5 h-5 text-yellow-500" />
              </span>
            ) : (
              formatStatesValue(stat.value)
            )}
          </h3>
          <p className="text-sm text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
      <Divider />
      <SectionHeading title={"What Our Customers Say"} />
      <Carousel
        opts={{ loop: true, auto: true, autoSpeed: 4000 }}
        className={"items-center justify-center flex"}
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem
              key={review.reviewer}
              className={"sm:basis-1/2 md:basis-1/3"}
            >
              <ReviewCard {...review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default RatingAndReview;
