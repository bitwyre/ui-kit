import {Slider} from "@nextui-org/slider";

export const SliderComponent = () => {
  return (
    <Slider
      size="sm"
      step={25}
      color="foreground"
      label="Set Leverage"
      showSteps={true}
      maxValue={125}
      classNames={{step: "w-3 h-3"}}
      minValue={0}
      showTooltip
      marks={[
        {
          value: 1,
          label: "1x",
        },
        {
          value: 25,
          label: "25x",
        },
        {
          value: 50,
          label: "50x",
        },
        {
          value: 75,
          label: "75x",
        },
        {
          value: 100,
          label: "100x",
        },
        {
          value: 125,
          label: "125x",
        },
      ]}
      defaultValue={1}
      className="w-full"
    />
  );
};
