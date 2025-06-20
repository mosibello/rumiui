"use client";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import urlFor from "@/lib/imageUrlBuilder";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";
import { Marquee } from "@/components/magicui/marquee";
import PartnerLogo from "@/components/ui/PartnerLogo";
import { stegaClean } from "@sanity/client/stega";
import { ConditionalBlurFade } from "@/components/ui/RevealAnimations";

const Wrapper = styled.div``;

const PartnerVariant01 = ({ data = {} }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__partner__variant01 overflow-hidden relative"
    >
      <Wrapper>
        <div className="container relative u__z-index-1">
          <div className="text-center">
            {data.heading && (
              <ConditionalBlurFade enabled={data.enable_animations} delay={0}>
                <div className="c__heading-wrapper mb-[1rem]">
                  <Heading
                    tag={data?.heading_tag || "h2"}
                    className={`u__h3 mb-0`}
                  >
                    {data.heading}
                  </Heading>
                </div>
              </ConditionalBlurFade>
            )}
            {stegaClean(data.description) && (
              <ConditionalBlurFade enabled={data.enable_animations} delay={0.1}>
                <div className="c__description-wrapper">
                  <Description className="u__h6">
                    {data.description}
                  </Description>
                </div>
              </ConditionalBlurFade>
            )}
          </div>
        </div>
        {data?.repeater && data?.repeater?.length > 0 && (
          <div className="container relative u__z-index-1 mt-[2.5rem]">
            <Marquee className="[--duration:60s]">
              {data.repeater.map((elem, index) => {
                const imageObj = {
                  src: elem.image ? urlFor(elem.image).url() : null,
                  alt: elem.image ? elem.image.alt : null,
                };
                return (
                  <ConditionalBlurFade
                    enabled={data.enable_animations}
                    delay={0.2 + index * 0.1}
                  >
                    <PartnerLogo
                      key={index}
                      image={imageObj}
                      className={`c__partner-logo--index-${index}`}
                    />
                  </ConditionalBlurFade>
                );
              })}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        )}
      </Wrapper>
    </Bounded>
  );
};

export default PartnerVariant01;
