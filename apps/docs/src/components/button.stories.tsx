import {Button} from "@bitwyre/ui-kit";

const ComponentLinkButton = () => (
  <Button type="button" variant="link">
    This is button link
  </Button>
);

const ComponentSecondaryButton = () => (
  <Button type="button" variant="secondary">
    This is button secondary
  </Button>
);

export const Main = () => (
  <>
    <ComponentLinkButton />
    <ComponentSecondaryButton />
  </>
);
