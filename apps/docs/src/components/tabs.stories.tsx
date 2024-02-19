import {Tabs} from "@bitwyre/ui-kit";
import * as React from "react";

const items = [
  {
    label: "Instituional",
    value: "institutional",
    content: <p>Institutional content</p>,
  },
  {
    label: "Retail",
    value: "retail",
    content: <p>Retail content</p>,
  },
  {
    label: "Personal",
    value: "personal",
    content: <p>Personal content</p>,
  },
];
export const TabsComponent = () => {
  const [activeTab, setTab] = React.useState(items[0].value);

  return (
    <Tabs
      containerClassName=""
      contentClassName=""
      items={items}
      activeTab={activeTab}
      onChangeTab={setTab}
    />
  );
};
