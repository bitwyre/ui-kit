"use client";

import * as React from "react";
import {Toaster, toast} from "sonner";

const notify: typeof toast = toast;

const NotifyToaster = (props: React.ComponentPropsWithoutRef<typeof Toaster>) => (
  <Toaster position="top-center" {...props} />
);

export {NotifyToaster, notify};
