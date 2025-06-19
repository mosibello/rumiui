"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import IconCard from "@/components/ui/IconCard";
import urlFor from "@/lib/imageUrlBuilder";
import { stegaClean } from "@sanity/client/stega";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";
import StatsCard from "@/components/ui/StatsCard";
import Image from "next/image";

const Wrapper = styled.div`
  .b__testimonial__variant01 {
    &__logo {
      width: 100%;
      max-width: 230px;
      object-fit: contain;
    }
    &__avatar {
      width: 90px;
      height: 90px;
      border-radius: 100%;
    }
  }
`;

const TestimonialVariant01 = ({ data = {} }) => {
  data = {
    scoped_css: {
      code: `padding: 64px 0; background-color:rgb(249, 254, 255);`,
    },
  };
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__testimonial__variant01 overflow-hidden relative"
    >
      <Wrapper>
        <div className="container relative u__z-index-1">
          <blockquote className="text-center">
            <div className="b__testimonial__variant01__logo-wrapper mb-[2rem]">
              <Image
                className="b__testimonial__variant01__logo mx-auto w-auto h-auto"
                sizes="100vw"
                width={500}
                height={500}
                src={`https://cdn.sanity.io/images/7wjp505t/production/557ef7e282bccc41055f6c13e8978d5baa76e576-239x43.svg`}
                alt={``}
              />
            </div>
            <div className="c__heading-wrapper mb-[3rem] max-w-[1000px] mx-auto">
              <Heading
                tag={data?.heading_tag || "span"}
                className={`u__h3 mb-0`}
              >
                "Working with JD Consulting transformed our marketing strategy
                and significantly increased our ROI! Their insights are
                invaluable."
              </Heading>
            </div>
            <div className="b__testimonial__variant01__avatar-wrapper mb-[1rem]">
              <Image
                className="b__testimonial__variant01__avatar mx-auto w-auto h-auto"
                sizes="100vw"
                width={500}
                height={500}
                src={`https://cdn.sanity.io/images/nqj5p7gd/production/1f41c4bad180126545d88582d90cd3b3f1cc43ed-605x451.jpg`}
                alt={""}
              />
            </div>
            <div className="c__heading-wrapper mb-[0.1rem]">
              <Heading tag={`span`} className={`u__h6 mb-0`}>
                Emily Johnson
              </Heading>
            </div>
            <div className="c__heading-wrapper mb-[0]">
              <Heading tag={`span`} className={`u__small mb-0 u__f-400`}>
                Marketing Director, TechCorp
              </Heading>
            </div>
          </blockquote>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default TestimonialVariant01;
