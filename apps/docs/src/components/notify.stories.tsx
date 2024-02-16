import {Button, NotifyToaster, notify} from "@bitwyre/ui-kit";

export const NotifyComponent = () => {
  const onSuccess = () => notify.success("Success!");
  const onWarning = () => notify.warning("Error!");
  const onError = () => notify.error("Error!");
  const onLoading = () => notify.loading("Loading");

  return (
    <>
      <div className="flex gap-1.5">
        <Button onClick={onSuccess} variant="subtle">
          Success
        </Button>
        <Button onClick={onWarning} variant="subtle">
          Warning
        </Button>
        <Button onClick={onLoading} variant="subtle">
          Loading
        </Button>
        <Button onClick={onError} variant="destructive">
          Error
        </Button>
      </div>

      <NotifyToaster richColors />
    </>
  );
};
