import {Button, Popover, PopoverContent, PopoverTrigger} from "@bitwyre/ui-kit";

export const PopoverComponent = () => {
  return (
    <>
      <p className="mb-1">Popoover with position</p>
      <div className="flex items-center justify-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="primary">Start</Button>
          </PopoverTrigger>

          <PopoverContent align="start" className="p-4 space-y-2">
            <p>
              You will see the popover content will start from the left{" "}
              <em>(ltr layout)</em> or start from the right <em>(rtl layout)</em>.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
              facilis distinctio dignissimos in doloremque voluptatem et assumenda
              accusamus totam officia, minima, cupiditate illo.
            </p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="primary">Center</Button>
          </PopoverTrigger>

          <PopoverContent align="center" className="p-4 space-y-2">
            <p>You will see the popover content will placed on the center.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
              facilis distinctio dignissimos in doloremque voluptatem et assumenda
              accusamus totam officia, minima, cupiditate illo.
            </p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="primary">End</Button>
          </PopoverTrigger>

          <PopoverContent align="end" className="p-4 space-y-2">
            <p>
              You will see the popover content will start from the right{" "}
              <em>(ltr layout)</em> or start from the left <em>(rtl layout)</em>.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
              facilis distinctio dignissimos in doloremque voluptatem et assumenda
              accusamus totam officia, minima, cupiditate illo.
            </p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center justify-center gap-2 pt-4">
        <Popover>
          <PopoverTrigger className="bg-bw-navy-500 rounded-md p-2 text-white outline-none">
            Vanilla Trigger
          </PopoverTrigger>

          <PopoverContent align="start" className="p-4 space-y-2">
            <p>
              The <code>PopoverTrigger</code> doesn&apos;t render a styled button, so
              it's unstyled
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
              facilis distinctio dignissimos in doloremque voluptatem et assumenda
              accusamus totam officia, minima, cupiditate illo.
            </p>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
