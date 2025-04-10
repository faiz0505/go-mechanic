import { Quote, Facebook, Instagram, Twitter } from "lucide-react";

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

const ReviewCard = ({ title, description, platform, reviewer, location }) => {
  const Icon = platformIcons[platform] || Facebook; // Default to Facebook if no platform

  return (
    <div className="bg-lavender-light p-6 rounded-xl shadow-md max-w-md w-full flex flex-col min-h-[250px] aspect-[2/1.5]">
      {/* Title & Quote Icon */}
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
        <Quote className="text-lilac w-6 h-6" />
      </div>

      {/* Description */}
      <p className="text-medium-gray mt-2 text-sm flex-1">{description}</p>
      <div className="flex items-center space-x-2">
        <Icon className="text-cobalt w-5 h-5" />
        <span className="text-dark-gray text-sm">{reviewer}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-warm-gray my-4"></div>

      {/* Reviewer & Platform */}

      {/* Workshop Name */}
      <p className="text-gray-700 text-sm font-medium"> Workshop Name </p>
      <p className="text-sm font-medium text-deep-purple">
        <span className="text-charcoal">GoMechanic - {location}</span>
      </p>
    </div>
  );
};

export default ReviewCard;
