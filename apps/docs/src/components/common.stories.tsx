import {Box, Button, For, ShowIf} from "@bitwyre/ui-kit";
import * as React from "react";

const data = [
  {name: "John", age: 24},
  {name: "Adi", age: 21},
  {name: "Hansen", age: 27},
];

export const BoxComponent = () => (
  <Box as="header">
    <p>
      I rendered inside a box rendered as <code>header</code>
    </p>
  </Box>
);

export const ForComponent = () => (
  <>
    <p>
      <code>For</code> Component
    </p>

    <ul className="list-disc list-inside">
      <For each={data}>
        {(item) => (
          <li>
            Hello, my name is {item.name}, and I am {item.age} Years old
          </li>
        )}
      </For>
    </ul>
  </>
);

export const ShowIfComponent = () => {
  const [bool, setBool] = React.useState(true);
  const toggleBool = () => setBool((prev) => !prev);

  return (
    <>
      <p>
        <code>ShowIf</code> Component
      </p>
      <Button variant="secondary" onClick={toggleBool}>
        Toggle show
      </Button>

      <ShowIf
        condition={bool}
        fallback={<p>The condition is false, this is fallback, but optional</p>}>
        <p>The condition is true</p>
      </ShowIf>
    </>
  );
};
