import {Button, NotifyToaster, notify} from "@bitwyre/ui-kit";

export const Common = () => {
  const onSuccess = () => notify.success("Success!");
  const onWarning = () => notify.warning("Error!");
  const onError = () => notify.error("Error!");

  return (
    <>
      <div className="flex gap-1.5">
        <Button onClick={onSuccess}>Success</Button>
        <Button onClick={onWarning}>Warning</Button>
        <Button onClick={onError} variant="destructive">
          Error
        </Button>
      </div>

      <NotifyToaster />
    </>
  );
};
