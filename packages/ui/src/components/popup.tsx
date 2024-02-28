"use client";

import {Dialog, Transition} from "@headlessui/react";
import {cva} from "class-variance-authority";
import {X} from "lucide-react";
import {Fragment, PropsWithChildren} from "react";
import {cn} from "../lib/utils";

/**
 * Popup component that displays a dialog box.
 * @returns Element UI for Popup
 * @param isOpen - Determines if the popup is open or closed.
 * @param closeModal - Function to close the popup.
 * @param children - The content of the popup.
 * @param className - Additional CSS classes for styling.
 * @param size - Size variant of the popup {"lg" | "md" | "xl" | "sm"}.
 * @param closeButtonClassname - Custom close button classname
 */

export const Popup = ({
  isOpen,
  closeModal,
  children,
  className,
  size,
  closeButtonClassname,
}: PropsWithChildren<{
  isOpen: boolean;
  className?: string;
  closeModal: () => void;
  size?: "lg" | "md" | "xl" | "sm";
  closeButtonClassname?: string;
}>) => {
  const getSize = cva(
    "relative w-full transform overflow-hidden rounded-lg p-6 text-left align-middle shadow-xl transition-all",
    {
      variants: {
        size: {
          lg: "max-w-lg",
          md: "max-w-md",
          xl: "max-w-xl",
          sm: "max-w-sm",
        },
      },
      defaultVariants: {
        size: "md",
      },
    },
  );

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 -z-10 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className={cn("bg-white", className, getSize({size}))}>
                <button
                  type="button"
                  aria-label="Close"
                  className={cn(
                    "absolute right-5 top-5 rounded-full border-none bg-bw-navy-500 p-2 outline-none",
                    closeButtonClassname,
                  )}>
                  <X size={23} className="text-white" onClick={closeModal} />
                </button>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
