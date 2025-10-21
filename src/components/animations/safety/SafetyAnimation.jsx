"use client";

import { useEffect, useMemo } from "react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const SafetyAnimation = ({
  src,
  shouldPlay = false,
  className = "",
  fit = Fit.Cover,
  alignment = Alignment.Center,
}) => {
  const layout = useMemo(
    () => new Layout({ fit, alignment }),
    [fit, alignment]
  );

  const { rive, RiveComponent } = useRive({
    src,
    autoplay: false,
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

export default SafetyAnimation;
