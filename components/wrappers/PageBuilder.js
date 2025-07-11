import React from "react";
import { stegaClean } from "@sanity/client/stega";
import * as AllHeroes from "../blocks/hero";
import * as AllFeatures from "../blocks/feature";
import * as AllContents from "../blocks/content";
import * as AllFaqs from "../blocks/faq";
import * as AllCtas from "../blocks/cta";
import * as AllPartners from "../blocks/partner";
import * as AllStats from "../blocks/stats";
import * as AllTestimonials from "../blocks/testimonial";

const categories = {
  hero: AllHeroes,
  feature: AllFeatures,
  content: AllContents,
  faq: AllFaqs,
  cta: AllCtas,
  partner: AllPartners,
  stats: AllStats,
  testimonial: AllTestimonials,
};

const BlockNotFound = ({ _type }) => {
  return (
    <div className="grid place-items-center">Block Not Found : {_type}</div>
  );
};

const PageBuilder = ({ data }) => {
  const { _type, block_category } = data;
  const Comp =
    categories[stegaClean(block_category)][_type] ?? BlockNotFound(_type);
  return (
    <>
      <Comp data={data} />
    </>
  );
};

export default PageBuilder;
