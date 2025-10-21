"use client";

import { useEffect, useMemo } from "react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const OmniChannel = ({ shouldPlay = false, className = "" }) => {
  const layout = useMemo(
    () => new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    []
  );

  const { rive, RiveComponent } = useRive({
    src: "/animations/omni_channel.riv",
    autoplay: true,
    layout,
  });

  useEffect(() => {
    if (!rive) return;
    if (shouldPlay) {
      rive.reset();
      rive.play();
    } else {
      rive.pause();
    }
  }, [rive, shouldPlay]);

  return <RiveComponent className={className} />;
};

export default OmniChannel;
