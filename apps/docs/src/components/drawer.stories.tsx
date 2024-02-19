import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@bitwyre/ui-kit";
import * as React from "react";

export const DrawerComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex items-ceter justify-center gap-4 w-11/12 max-w-4xl mx-auto">
      <div>
        <p>Example uncontrolled drawer</p>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="primary">Uncontrolled</Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Im a drawer</DrawerTitle>
              <DrawerDescription>
                Can be rendered as important information when needed
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter>
              <p>Footer</p>
              <DrawerClose asChild>
                <Button variant="primary">Close drawer</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <div>
        <p>Example Controlled drawer</p>
        <Drawer open={isOpen} onClose={() => setIsOpen(false)} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button variant="primary">Open drawer</Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Im a controlled drawer</DrawerTitle>
              <DrawerDescription>
                Can be rendered as important information when needed
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter>
              <p>Footer</p>
              <DrawerClose asChild>
                <Button variant="primary">Close drawer</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
