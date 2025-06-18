"use client";
import Button from "@/components/ui/Button";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/ui/BlurryBlob";
import Pill from "@/components/ui/Pill";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import { cn } from "@/lib/utils";
import { BackgroundPattern } from "@/components/ui/BackgroundPatterns";
import { ConditionalBlurFade } from "@/components/ui/RevealAnimations";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";

const Wrapper = styled.div`
  .b__hero__variant06 {
    &__row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 2rem;
      @media (min-width: 992px) {
        --bs-gutter-x: 3rem;
        --bs-gutter-y: 0;
      }
      @media (min-width: 1200px) {
        --bs-gutter-x: 5rem;
      }
    }
    &__image {
      object-fit: contain;
      width: 100%;
      height: auto;
      &-wrapper {
        position: relative;
        @media (min-width: 992px) {
          transform: scale(1.5) translateY(-1.6rem);
        }
      }
    }
  }
`;

const HeroVariant06 = ({ data = {} }) => {
  data = {
    enable_background_pattern: true,
    heading: `Digital Marketing That Works`,
    content: `I’m a full-service marketing consultant that uses next-generation analytics and data to grow businesses.`,
    button_title: `Get Free Quote`,
    button_two_title: `Quick Website Analysis`,
    button_two_theme: `ghost-primary`,
    align_items_center: true,
    enable_animations: true,
  };

  const patternType = data?.background_pattern_type ?? `dots`;
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__hero__variant06 overflow-hidden relative"
    >
      {data?.enable_background_pattern && (
        <BackgroundPattern
          patternType={data?.background_pattern_type ?? `dots`}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
      )}

      {data.enable_blobs && (
        <>
          <BlurryBlob top="-20rem" left="-20rem" />
          <BlurryBlob
            bottom="-20rem"
            right="0rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <Wrapper className="container relative u__z-index-1">
        <div
          className={`row b__hero__variant06__row ${data.align_items_center ? "items-center" : ``}`}
        >
          <div className="col-lg-6 relative u__z-index-1">
            {data.label && (
              <ConditionalBlurFade enabled={data?.enable_animations}>
                <Pill title={data.label} />
              </ConditionalBlurFade>
            )}
            {data.heading && (
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.1}
              >
                <div className="c__heading-wrapper mb-[1rem]">
                  <Heading tag={data?.heading_tag || "h1"} className={`u__d1`}>
                    {data.heading}
                  </Heading>
                </div>
              </ConditionalBlurFade>
            )}
            {data.content && (
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.2}
              >
                <div className="c__description-wrapper">
                  <Description className="u__h5">{data.content}</Description>
                </div>
              </ConditionalBlurFade>
            )}
            {data.button_title && (
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.3}
              >
                <div className="c__button-wrapper mt-[2rem]">
                  <div
                    className={`flex flex-col gap-[12px] min-[500px]:flex-row`}
                  >
                    {data.button_title && (
                      <Button
                        destination={data.button_destination}
                        title={data.button_title}
                        target={data.button_open_in_new_tab}
                        theme={data.button_theme}
                        className={`${data.button_two_title ? "w-full min-[500px]:w-auto" : "w-auto"}`}
                      />
                    )}
                    {data.button_two_title && (
                      <Button
                        destination={data.button_two_destination}
                        title={data.button_two_title}
                        target={data.button_two_open_in_new_tab}
                        theme={data.button_two_theme}
                        className="w-full min-[500px]:w-auto"
                      />
                    )}
                  </div>
                </div>
              </ConditionalBlurFade>
            )}
          </div>
          <div className="col-lg-6">
            <>
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.3}
              >
                <div className="b__hero__variant06__image-wrapper">
                  <img
                    src="https://cdn.sanity.io/images/7wjp505t/production/5b55d300c574d8ae7035613707773be585dd0056-1752x1766.webp"
                    alt=""
                    loading="lazy"
                  />
                  {/* <Image
                    className="b__hero__variant06__image"
                    fill={true}
                    src={`https://cdn.sanity.io/images/7wjp505t/production/5b55d300c574d8ae7035613707773be585dd0056-1752x1766.webp`}
                    alt={data?.image?.alt ?? ""}
                    sizes="100%"
                  /> */}
                </div>
              </ConditionalBlurFade>
            </>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default HeroVariant06;
