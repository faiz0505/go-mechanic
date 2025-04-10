import React from "react";
import CustomImage from "./ui/CustomImage";

const PartnerReviewCard = ({ profile, name, feedbackMessage, shopName }) => {
  return (
    <div className="w-full p-4 rounded-lg shadow flex flex-col items-center aspect-[1/0.8] justify-between bg-lavender-light">
      <div>
        <figure className="h-20 w-20 bg-deep-purple rounded-full overflow-hidden relative flex justify-center items-center mx-auto">
          {profile ? (
            <CustomImage src={profile} alt={name} fill={true} />
          ) : (
            <span className="text-4xl text-cream">{name.charAt(0)}</span>
          )}
        </figure>
        <p className="text-sm text-pretty text-center max-w-[90%] mt-3">
          {feedbackMessage}
        </p>
      </div>
      <div>
        <div className="h-[1px] w-full bg-dark-gray my-4"></div>
        <div>
          <h6 className="font-bold text-center">{name}</h6>
          <p className="text-sm text-gray-600 text-center">{`Owener - GoMechanic ${shopName}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerReviewCard;
