import {Button} from "@bitwyre/ui-kit";

const ComponentPrimaryButton = () => (
  <Button variant="primary">This is button Primary</Button>
);

const ComponentSecondaryButton = () => (
  <Button variant="secondary">This is button secondary</Button>
);
const ComponentSubtleButton = () => (
  <Button variant="subtle">This is button subtle</Button>
);
const ComponentOutlineButton = () => (
  <Button variant="outline" className="text-black">
    This is button outline
  </Button>
);
const ComponentDestructiveButton = () => (
  <Button variant="destructive">This is button destructive</Button>
);
const ComponentGhostButton = () => (
  <Button variant="ghost" className="text-black hover:text-white">
    This is button ghost
  </Button>
);
const ComponentLinkButton = () => <Button variant="link">This is button link</Button>;
const ComponentGradientButton = () => (
  <Button variant="gradient-blue">This is button gradient</Button>
);
const ComponentLoadingButton = () => (
  <Button variant="subtle" isButtonLoading={true} textButtonLoading="Loading...">
    This is button loading
  </Button>
);
const ComponentIconDefaultButton = () => (
  <Button variant="subtle" size="icon">
    +
  </Button>
);
const ComponentIconGhostButton = () => (
  <Button variant="ghost" size="icon" className="text-black hover:text-white">
    +
  </Button>
);
const ComponentIconCircleButton = () => (
  <Button variant="subtle" size="iconCircle">
    +
  </Button>
);

export const MainComponent = () => (
  <div className="flex gap-2 flex-wrap">
    <ComponentPrimaryButton />
    <ComponentSecondaryButton />
    <ComponentSubtleButton />
    <ComponentOutlineButton />
    <ComponentDestructiveButton />
    <ComponentGradientButton />
    <ComponentGhostButton />
    <ComponentLinkButton />
    <ComponentLoadingButton />
    <ComponentIconDefaultButton />
    <ComponentIconGhostButton />
    <ComponentIconCircleButton />
  </div>
);
