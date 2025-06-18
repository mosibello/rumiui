"use client";
import Bounded from "@/components/wrappers/Bounded";
import styled from "styled-components";
import IconCard from "@/components/ui/IconCard";
import urlFor from "@/lib/imageUrlBuilder";
import { stegaClean } from "@sanity/client/stega";
import Heading from "@/components/ui/Heading";
import Description from "@/components/ui/Description";
import ResourceCard from "@/components/ui/ResourceCard";

const Wrapper = styled.div`
  .b__content__variant08 {
    &__row {
      --bs-gutter-x: 2rem;
      --bs-gutter-y: 2rem;
    }
  }
`;

const cardColumns = {
  2: "col-lg-6",
  3: "col-lg-4",
  4: "col-lg-3",
};

const ContentVariant08 = ({ data = {} }) => {
  data = {
    scoped_css: {
      code: `padding: 64px 0; background-color: #fff;`,
    },
    label: `Process`,
    heading: `Our Proven Consulting Process <br class="u__show-after-992" />Explained`,
    description: `At JD Consulting, we guide you through a structured approach to digital marketing. From the <br class="u__show-after-992" />initial consultation to ongoing analysis, we ensure every step is tailored to your business needs.`,
    card_style: `outlined`,
    repeater: [
      {
        iconType: `svg`,
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff914e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text-icon lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>`,
        heading: `Step 1: Initial Consultation and Discovery`,
        description: `We begin with a comprehensive discussion to understand your goals and challenges.`,
        button_title: `Learn More`,
        button_destination: `#`,
      },
      {
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff914e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-land-plot-icon lucide-land-plot"><path d="m12 8 6-3-6-3v10"/><path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"/><path d="m6.49 12.85 11.02 6.3"/><path d="M17.51 12.85 6.5 19.15"/></svg>`,
        heading: `Step 2: Strategy Development and Planning`,
        description: `Our team crafts a customized marketing strategy based on your unique needs.`,
        button_title: `Learn More`,
        button_destination: `#`,
      },
      {
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff914e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>`,
        heading: `Step 3: Implementation and Execution`,
        description: `We put the plan into action, ensuring all tactics align with your objectives.`,
        button_title: `Learn More`,
        button_destination: `#`,
      },
      {
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff914e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>`,
        heading: `Step 3: Implementation and Execution`,
        description: `We put the plan into action, ensuring all tactics align with your objectives.`,
        button_title: `Learn More`,
        button_destination: `#`,
      },
      {
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff914e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>`,
        heading: `Step 3: Implementation and Execution`,
        description: `We put the plan into action, ensuring all tactics align with your objectives.`,
        button_title: `Learn More`,
        button_destination: `#`,
      },
      {
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff914e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>`,
        heading: `Step 3: Implementation and Execution`,
        description: `We put the plan into action, ensuring all tactics align with your objectives.`,
        button_title: `Learn More`,
        button_destination: `#`,
      },
    ],
  };
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__content__variant08 overflow-hidden relative"
    >
      <Wrapper>
        <div className="container relative u__z-index-1">
          <div className="">
            <div className="c__label-wrapper mb-[0.5rem]">
              <Heading
                tag={data?.heading_tag || "span"}
                className={`u__subtitle u__text-branding-primary u__f-500`}
              >
                Empower
              </Heading>
            </div>
            <div className="c__heading-wrapper mb-[1rem]">
              <Heading tag={data?.heading_tag || "h2"} className={`u__d2`}>
                End to End Digital Marketing
              </Heading>
            </div>
            <div className="c__description-wrapper">
              <Description className="u__h6">
                We offer the following services through our turn-key approach.
                We can also offer these services{" "}
                <br class="u__show-after-992" />a la carte based on customer
                need.
              </Description>
            </div>
          </div>
        </div>
        {data.repeater && (
          <div className="container relative u__z-index-1 mt-[2.5rem]">
            <div
              className={`row b__content__variant08__row justify-${stegaClean(data.justify_content)}`}
            >
              {data.repeater.map((elem, index) => {
                const {
                  iconSvg,
                  iconType,
                  image,
                  heading,
                  description,
                  button_title,
                  button_destination,
                } = elem;

                const imageObj = {
                  src: image ? urlFor(image).url() : null,
                  alt: image ? image.alt : null,
                };
                return (
                  <div
                    key={index}
                    className={`col-md-6 ${data.card_columns ? cardColumns[data.card_columns] : `col-lg-4`}`}
                  >
                    <ResourceCard />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Wrapper>
    </Bounded>
  );
};

export default ContentVariant08;
