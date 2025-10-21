import mixpanel from "mixpanel-browser";

const MixPanelId = "8c3c349e1b771440b39d1b2e84fe3004";

export const initMixpanel = () => {
  mixpanel.init(MixPanelId, {
    autocapture: {
      click: true,
      input: false,
      scroll: false,
      submit: true,
      capture_text_content: false,
    },
  });
};

export const trackEvent = (event, properties = {}) => {
  if (typeof window !== 'undefined') {
    mixpanel.track(event, properties);
  }
};
