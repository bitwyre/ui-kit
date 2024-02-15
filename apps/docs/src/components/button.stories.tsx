import {Button} from "@bitwyre/ui-kit";

const ComponentPrimaryButton = () => (
  <Button type="button" variant="primary">
    This is button Primary
  </Button>
);

const ComponentSecondaryButton = () => (
  <Button type="button" variant="secondary">
    This is button secondary
  </Button>
);
const ComponentSubtleButton = () => (
  <Button type="button" variant="subtle">
    This is button subtle
  </Button>
);
const ComponentOutlineButton = () => (
  <Button type="button" variant="outline">
    This is button outline
  </Button>
);
const ComponentDestructiveButton = () => (
  <Button type="button" variant="destructive">
    This is button destructive
  </Button>
);
const ComponentGhostButton = () => (
  <Button type="button" variant="ghost">
    This is button ghost
  </Button>
);
const ComponentLinkButton = () => (
  <Button type="button" variant="link">
    This is button link
  </Button>
);
const ComponentLoadingButton = () => (
  <Button
    type="button"
    variant="subtle"
    isButtonLoading={true}
    textButtonLoading="Loading...">
    This is button loading
  </Button>
);
const ComponentIconDefaultButton = () => (
  <Button type="button" variant="subtle" size="icon">
    +
  </Button>
);
const ComponentIconGhostButton = () => (
  <Button type="button" variant="ghost" size="icon">
    +
  </Button>
);
const ComponentIconCircleButton = () => (
  <Button type="button" variant="subtle" size="iconCircle">
    +
  </Button>
);

export const Main = () => (
  <div className="flex gap-2 flex-wrap">
    <ComponentPrimaryButton />
    <ComponentSecondaryButton />
    <ComponentSubtleButton />
    <ComponentOutlineButton />
    <ComponentDestructiveButton />
    <ComponentGhostButton />
    <ComponentLinkButton />
    <ComponentLoadingButton />
    <ComponentIconDefaultButton />
    <ComponentIconGhostButton />
    <ComponentIconCircleButton />
  </div>
);
