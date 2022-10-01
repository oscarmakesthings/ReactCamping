import { PROMOTIONS } from "../../app/shared/PROMOTIONS";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
 };