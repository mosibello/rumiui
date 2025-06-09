"use client";
import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Pill from "@/components/modules/Pill";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ConditionalBlurFade } from "@/components/modules/RevealAnimations";
import Heading from "@/components/modules/Heading";
import Description from "@/components/modules/Description";

const Wrapper = styled.div`
  .b__hero__variant02 {
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
      border-radius: var(--t-global-image-border-radius);
      object-fit: cover;
      width: 100%;
      height: 100%;
      &-wrapper {
        height: 350px;
        position: relative;
        @media (min-width: 768px) {
          height: 500px;
        }
        @media (min-width: 992px) {
          width: 100%;
          height: 100%;
          min-height: 450px;
        }
      }
    }
  }
`;

const HeroVariant02 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__hero__variant02 overflow-hidden relative"
    >
      {data?.enable_background_pattern && (
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] "
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
          className={`row b__hero__variant02__row ${data.align_items_center ? "items-center" : ``}`}
        >
          <div className="col-lg-6">
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
                  <Heading tag={data?.heading_tag || "h1"} className={`u__d2`}>
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
                  <Description className="u__h6">{data.content}</Description>
                </div>
              </ConditionalBlurFade>
            )}
            {data.button_title && (
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.3}
              >
                <div className="c__button-wrapper mt-[2rem]">
                  <Button
                    destination={data.button_destination}
                    title={data.button_title}
                  />
                </div>
              </ConditionalBlurFade>
            )}
          </div>
          <div className="col-lg-6">
            {data.image && (
              <>
                <ConditionalBlurFade
                  enabled={data?.enable_animations}
                  delay={0.3}
                >
                  <div className="b__hero__variant02__image-wrapper">
                    <Image
                      className="b__hero__variant02__image"
                      fill={true}
                      placeholder="blur"
                      blurDataURL={data.image.asset.metadata.lqip}
                      src={urlFor(data.image).url()}
                      alt={data.image.alt ?? ""}
                      sizes="100%"
                    />
                  </div>
                </ConditionalBlurFade>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default HeroVariant02;
