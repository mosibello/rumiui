import Button from "@/components/modules/Button";
import parse from "html-react-parser";
import Bounded from "@/components/wrappers/Bounded";
import BlurryBlob from "@/components/modules/BlurryBlob";
import Heading from "@/components/modules/Heading";
import Description from "@/components/modules/Description";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { ConditionalBlurFade } from "@/components/modules/RevealAnimations";

const HeroVariant01 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__hero__variant01 overflow-hidden relative"
    >
      {data?.enable_background_pattern && (
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
      )}
      {data.enable_blobs && (
        <>
          <BlurryBlob top="-10rem" left="-10rem" />
          <BlurryBlob
            bottom="-10rem"
            right="-10rem"
            color="var(--t-blob-color-2)"
          />
        </>
      )}
      <div className="container relative u__z-index-1">
        <div className={`${data.align_left ? `text-left` : `text-center`}`}>
          {data.heading && (
            <div className="c__heading-wrapper mb-[1rem]">
              <ConditionalBlurFade enabled={data?.enable_animations}>
                <Heading tag={data?.heading_tag || "h1"} className={`u__d1`}>
                  {data.heading}
                </Heading>
              </ConditionalBlurFade>
            </div>
          )}
          {data.description && (
            <div className="c__subtitle-wrapper mb-[1rem]">
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.1}
              >
                <Heading
                  tag={data?.description_heading_tag || "h2"}
                  className={`u__h5`}
                >
                  {data.description}
                </Heading>
              </ConditionalBlurFade>
            </div>
          )}
          {data.content && (
            <div
              className={`c__description-wrapper ${data.align_left ? `` : `mx-auto`}`}
              style={data.align_left ? null : { maxWidth: 900 }}
            >
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.2}
              >
                <Description className="u__subtitle">
                  {data.content}
                </Description>
              </ConditionalBlurFade>
            </div>
          )}
          {data.button_title && (
            <div className="c__button-wrapper mt-[2rem]">
              <ConditionalBlurFade
                enabled={data?.enable_animations}
                delay={0.3}
              >
                <Button
                  destination={data.button_destination}
                  title={data.button_title}
                />
              </ConditionalBlurFade>
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default HeroVariant01;
