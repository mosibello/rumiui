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

const Wrapper = styled.div`
  .b__stats__variant01 {
    &__row {
      &--atf {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 1rem;
        @media (min-width: 992px) {
          --bs-gutter-x: 3rem;
          --bs-gutter-y: 0rem;
        }
        @media (min-width: 1200px) {
          --bs-gutter-x: 5rem;
        }
      }
      &--btf {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 2.5rem;
        @media (min-width: 768px) {
          --bs-gutter-x: 3rem;
          --bs-gutter-y: 3rem;
        }
        @media (min-width: 992px) {
          --bs-gutter-x: 3rem;
          --bs-gutter-y: 0rem;
        }
        @media (min-width: 1200px) {
          --bs-gutter-x: 5rem;
        }
      }
    }
  }
`;

const StatsVariant01 = ({ data = {} }) => {
  data = {
    scoped_css: {
      code: `padding: 86px 0; background-color: #000;`,
    },
  };
  return (
    <Bounded
      id={data._key}
      type={data._type}
      scopedCss={data.scoped_css}
      className="b__stats__variant01 overflow-hidden relative"
    >
      <Wrapper>
        <div className="container relative u__z-index-1">
          <div className="u__text-inverted">
            <div className="row b__stats__variant01__row b__stats__variant01__row--atf">
              <div className="col-lg-6">
                <div className="c__heading-wrapper mb-[0rem]">
                  <Heading
                    tag={data.heading_tag || "h2"}
                    className={`u__h1 mb-0`}
                  >
                    Long heading is what you see here in this feature section
                  </Heading>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="c__description-wrapper">
                  <Description className="u__h5 mb-0">
                    In today's competitive landscape, effective digital
                    marketing is essential for growth. Our data-driven approach
                    ensures that your business stands out and reaches its target
                    audience. Let us help you unlock your full potential with
                    tailored strategies that deliver results.
                  </Description>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-[2.5rem] md:mt-[4.5rem] relative u__z-index-1">
          <div className="row b__stats__variant01__row b__stats__variant01__row--btf">
            <div className="col-md-6 col-lg-4">
              <StatsCard tickerAnimation={true} className="u__text-inverted" />
            </div>
            <div className="col-md-6 col-lg-4">
              <StatsCard
                tickerAnimation={true}
                className="u__text-inverted"
                heading={`50,000+`}
                description={`Leads`}
              />
            </div>
            <div className="col-md-6 col-lg-4">
              <StatsCard
                tickerAnimation={true}
                className="u__text-inverted"
                heading={`100M`}
                description={`Visits Generated`}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Bounded>
  );
};

export default StatsVariant01;
