"use client";
import parse from "html-react-parser";
import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";
import Heading from "./Heading";
import Description from "./Description";
import { cn } from "@/lib/utils";
import { useCleanValue } from "@/lib/helpers";

const Component = styled.div`
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--t-global-card-border-radius);
  background-color: var(--t-cp-base-white);
  .c__icon-card {
    &__wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    &__icon-wrapper {
      margin-bottom: 2rem;
      img,
      svg {
        width: 45px;
        height: 45px;
      }
      img {
        object-fit: contain;
      }
    }
  }
  &.c__icon-card {
    &--solid {
      background-color: var(--t-light-background-color);
    }
    &--outlined {
      border: 2px solid var(--t-border-color);
    }
    &--shadow {
      box-shadow: var(--t-box-shadow-lg);
      border: 1px solid var(--t-border-color);
    }
  }
`;

const IconCard = ({
  style = "shadow",
  iconType = `svg`,
  className,
  iconSvg,
  icon,
  iconColor = `var(--t-primary-branding-color)`,
  heading,
  headingTag,
  description,
  buttonTitle,
  buttonDestination,
  buttonTarget,
  buttonTheme = "link",
}) => {
  return (
    <Component
      className={cn(
        `c__icon-card c__icon-card--${useCleanValue(style)}`,
        className
      )}
    >
      <div className="c__icon-card__wrapper">
        {icon && (icon.src || iconSvg) && (
          <div className={`c__icon-card__icon-wrapper text-[${iconColor}]`}>
            <figure className="m-0 inline">
              {iconType === `image` && icon?.src && (
                <Image
                  src={icon.src}
                  alt={icon.alt ?? ""}
                  width={500}
                  height={500}
                />
              )}
              {iconType === `svg` && iconSvg && <>{parse(iconSvg)}</>}
            </figure>
          </div>
        )}
        {heading && (
          <div className="c__icon-card__heading-wrapper">
            <Heading
              tag={headingTag || `h3`}
              className="c__icon-card__heading u__h5"
            >
              {heading}
            </Heading>
          </div>
        )}
        {description && (
          <div
            className={`c__icon-card__description-wrapper ${buttonTitle ? `mt-[0.5rem] mb-[1rem]` : ``}`}
          >
            <Description className="c__icon-card__description mb-0">
              {description}
            </Description>
          </div>
        )}
        {useCleanValue(buttonTitle) && (
          <div className="c__icon-card__button-wrapper mt-auto pt-[1.5rem]">
            <Button
              destination={buttonDestination}
              title={buttonTitle}
              theme={buttonTheme}
              target={buttonTarget}
            />
          </div>
        )}
      </div>
    </Component>
  );
};

export default IconCard;
