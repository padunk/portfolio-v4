import * as React from "react";

export default function ProTip() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window) {
      const regex =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(regex.test(window.navigator.userAgent));
    }
  }, []);

  return (
    <small className="mb-2 block pl-2">
      <span>Pro tip:</span>
      {isMobile ? (
        "scroll left... 🤭"
      ) : (
        <em>
          &nbsp;hold&nbsp;
          <code className="text-white bg-neutral-500 px-1">Shift</code>
          &nbsp;when scrolling below 🤯.
        </em>
      )}
    </small>
  );
}
