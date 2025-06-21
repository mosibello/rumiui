"use client";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import IconListItem from "@/components/ui/IconListItem";
import { PortableText } from "@portabletext/react";
import urlFor from "@/lib/imageUrlBuilder";
import { cn } from "@/lib/utils";
import { BackgroundPattern } from "@/components/ui/BackgroundPatterns";
import { ConditionalBlurFade } from "@/components/ui/RevealAnimations";
import { useCleanValue } from "@/lib/helpers";
import Heading from "@/components/ui/Heading";
import RichtextField from "@/components/ui/RichtextField";

const Wrapper = styled.div`
  .b__feature__variant03 {
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
  }
`;

const FeatureVariant03 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__feature__variant03 overflow-hidden relative"
    >
      {data.enable_background_pattern && (
        <BackgroundPattern
          patternType={data.background_pattern_type ?? `dots`}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
      )}
      <Wrapper>
        <div className="container">
          <div
            className={`row b__feature__variant03__row ${data.align_items_center ? `items-center` : ``}`}
          >
            <div className="col-lg-6">
              <div className="b__feature__variant03__content-wrapper">
                {data.heading && (
                  <ConditionalBlurFade
                    enabled={data.enable_animations}
                    delay={0}
                  >
                    <div className="c__heading-wrapper mb-[1rem]">
                      <Heading
                        tag={data.heading_tag || "h2"}
                        className={`u__h2`}
                      >
                        {data.heading}
                      </Heading>
                    </div>
                  </ConditionalBlurFade>
                )}
                {data.content && (
                  <ConditionalBlurFade
                    enabled={data.enable_animations}
                    delay={0.1}
                  >
                    <RichtextField content={data.content} />
                  </ConditionalBlurFade>
                )}
              </div>
            </div>
            {data.repeater && (
              <div className="col-lg-6">
                <div className="b__feature__variant03__list-wrapper">
                  {data.repeater.map((elem, index) => {
                    const {
                      icon_type,
                      icon_svg,
                      icon_color,
                      image,
                      heading,
                      description,
                    } = elem;
                    const imageObj = {
                      src: image ? urlFor(image).url() : null,
                      alt: image ? image.alt : null,
                      blurDataURL: image ? image.asset?.metadata?.lqip : null,
                    };
                    return (
                      <ConditionalBlurFade
                        enabled={data.enable_animations}
                        delay={0.3 + index * 0.1}
                      >
                        <IconListItem
                          key={index}
                          headingTag={useCleanValue(data.card_heading_tag)}
                          className={
                            data.repeater.length - 1 === index
                              ? null
                              : `mb-4 pb-4`
                          }
                          iconType={icon_type}
                          iconSvg={icon_svg}
                          iconColor={icon_color}
                          icon={imageObj}
                          heading={heading}
                          description={description}
                        />
                      </ConditionalBlurFade>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default FeatureVariant03;
