import Button from "@/components/ui/Button";
import Bounded from "@/components/wrappers/Bounded";
import { stegaClean } from "@sanity/client/stega";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import urlFor from "@/lib/imageUrlBuilder";
import BackgroundTint from "@/components/ui/BackgroundTint";
import { ConditionalBlurFade } from "@/components/ui/RevealAnimations";
import { cn } from "@/lib/utils";
import { BackgroundPattern } from "@/components/ui/BackgroundPatterns";

const HeroVariant03 = ({ data }) => {
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className={`b__hero__variant03 overflow-hidden relative ${data.background_theme && `u__background-${stegaClean(data.background_theme)}`}`}
    >
      {data?.enable_background_pattern && (
        <BackgroundPattern
          patternType={data?.background_pattern_type ?? `dots`}
          className={cn(
            "fill-emerald-500/40",
            "[mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"
          )}
        />
      )}
      {data.image && (
        <div className="c__absolute-image">
          <Image
            fill={true}
            placeholder="blur"
            blurDataURL={data.image.asset?.metadata?.lqip}
            src={urlFor(data.image).url()}
            alt={data.image.alt ?? ""}
            sizes="100%"
          />
        </div>
      )}
      {data.enable_background_tint && <BackgroundTint />}
      <div
        className={`container relative u__z-index-1 ${data.background_theme && `u__text-inverted`}`}
      >
        <div className={`${data.align_left ? `text-left` : `text-center`}`}>
          {data.heading && (
            <ConditionalBlurFade enabled={data?.enable_animations}>
              <div
                className={`c__heading-wrapper ${data.description ? `mb-[1.5rem]` : `mb-0`}`}
              >
                <Heading
                  tag={data.heading_tag || `h1`}
                  className={`u__${data.heading_size ? data.heading_size : `d2`} ${!data.description && `mb-0`}`}
                >
                  {data.heading}
                </Heading>
              </div>
            </ConditionalBlurFade>
          )}
          {data.description && (
            <ConditionalBlurFade enabled={data?.enable_animations} delay={0.1}>
              <div
                className={`c__subtitle-wrapper ${data.button_title ? `mb-[1rem]` : ``}`}
              >
                <Heading
                  tag={data?.description_tag}
                  className={`u__${data.description_size ? data.description_size : `h6`}  ${data.button_title ? `mb-[0.5rem]` : `mb-[0]`}`}
                >
                  {data.description}
                </Heading>
              </div>
            </ConditionalBlurFade>
          )}
          {data.button_title && (
            <ConditionalBlurFade enabled={data?.enable_animations} delay={0.2}>
              <div className="c__button-wrapper mt-[2rem]">
                <Button
                  destination={data?.button_destination}
                  title={data.button_title}
                  theme={data.button_theme}
                />
              </div>
            </ConditionalBlurFade>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default HeroVariant03;
