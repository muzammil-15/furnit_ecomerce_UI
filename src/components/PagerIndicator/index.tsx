import React from "react";

type PagerIndicatorProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    activeCss: string;
    inactiveCss: string;
    sliderRef: React.MutableRefObject<any>;
    count: number;
    activeIndex: number;
    selectedWrapperCss: string;
    unselectedWrapperCss: string;
  }>;

const PagerIndicator = ({
  className,
  activeCss,
  inactiveCss,
  sliderRef,
  count,
  activeIndex,
  selectedWrapperCss = "",
  unselectedWrapperCss = "",
  ...restProps
}: PagerIndicatorProps) => {
  const [slidesToShow, setSlidesToShow] = React.useState(0);

  React.useEffect(() => {
    const _slidesToShow = sliderRef?.current?.state?.itemsInSlide;
    setSlidesToShow(_slidesToShow);
  }, [sliderRef]);

  return (
    <div className={className} {...restProps}>
      {Array(count)
        .fill(0)
        .map((_, i) => {
          const isActive =
            activeIndex >= i * slidesToShow &&
            activeIndex < (i + 1) * slidesToShow;
          return (
            <div
              key={"indicator" + i}
              className={`${isActive ? selectedWrapperCss : unselectedWrapperCss} `}
            >
              <span
                className={`${isActive ? activeCss : inactiveCss} slider-indicator`}
                onClick={() => sliderRef?.current?.slideTo(i * slidesToShow)}
              />
            </div>
          );
        })}
    </div>
  );
};

export { PagerIndicator };
