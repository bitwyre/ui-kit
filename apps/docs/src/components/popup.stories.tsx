import {Button, Popup} from "@bitwyre/ui-kit";
import {useState} from "react";

const ComponentPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModalHandler = () => {
    setIsOpen(true);
  };
  const closeModalHandler = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button variant="subtle" onClick={showModalHandler}>
        Show Modal
      </Button>
      <Popup
        isOpen={isOpen}
        closeModal={closeModalHandler}
        closeButtonClassname="bg-black">
        I am in Popup
      </Popup>
    </>
  );
};

export const Main = () => <ComponentPopUp />;
