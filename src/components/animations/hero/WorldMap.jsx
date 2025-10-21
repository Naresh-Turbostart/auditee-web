"use client";

import { useEffect, useMemo } from "react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const WorldMap = ({ className, shouldPlay = false }) => {
  const layout = useMemo(
    () => new Layout({ fit: Fit.Cover, alignment: Alignment.TopCenter }),
    []
  );

  const stateMachineName = "State Machine 1";

  const { rive, RiveComponent } = useRive({
    src: "/animations/world_map.riv",
    autoplay: false,
    stateMachines: stateMachineName,
    useDevicePixelRatio: true,
    layout,
  });

  useEffect(() => {
    if (!rive) return;

    if (shouldPlay) {
      rive.reset({ stateMachines: [stateMachineName] });
      rive.play({ stateMachines: [stateMachineName] });
    } else {
      rive.stop({ stateMachines: [stateMachineName] });
    }
  }, [rive, shouldPlay, stateMachineName]);

  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default WorldMap;
