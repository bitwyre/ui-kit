"use client";

import * as React from "react";
import {Toaster} from "sonner";

/**
 @description this component is Provider Component that for calling a notifications in root element
*/
const NotifyToaster = (props: React.ComponentPropsWithoutRef<typeof Toaster>) => (
  <Toaster position="top-center" {...props} />
);

export {NotifyToaster};
