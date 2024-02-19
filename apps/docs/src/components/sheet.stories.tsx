import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@bitwyre/ui-kit";

export const SheetComponent = () => {
  return (
    <div className="min-h-[calc(100svh-20rem)] grid place-items-center w-full max-w-2xl mx-auto">
      <div>
        <p className="text-balance">Sheet can be used to display content offscreen</p>
        <p>
          Use props <code>side</code> to adjust position
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="primary" className="mt-2">
                Right Sheet (default)
              </Button>
            </SheetTrigger>

            <SheetContent className="flex flex-col">
              <SheetHeader>
                <SheetTitle>This is sheet</SheetTitle>
                <SheetDescription>Usable for most mobile devices</SheetDescription>
              </SheetHeader>

              <SheetFooter className="mt-auto">
                <SheetClose asChild>
                  <Button variant="gradient-blue" className="w-full">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="primary" className="mt-2">
                Left Sheet
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>This is sheet</SheetTitle>
                <SheetDescription>Usable for most mobile devices</SheetDescription>
              </SheetHeader>

              <SheetFooter className="mt-auto">
                <SheetClose asChild>
                  <Button variant="gradient-blue" className="w-full">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="primary" className="mt-2">
                Top Sheet
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>This is sheet</SheetTitle>
                <SheetDescription>Usable for most mobile devices</SheetDescription>
              </SheetHeader>

              <SheetFooter className="mt-auto">
                <SheetClose asChild>
                  <Button variant="gradient-blue" className="w-full">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="primary" className="mt-2">
                Bottom Sheet
              </Button>
            </SheetTrigger>

            <SheetContent side="bottom" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>This is sheet</SheetTitle>
                <SheetDescription>Usable for most mobile devices</SheetDescription>
              </SheetHeader>

              <SheetFooter className="mt-auto">
                <SheetClose asChild>
                  <Button variant="gradient-blue" className="w-full">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
