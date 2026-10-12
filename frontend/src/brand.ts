export const BRAND_NAME = "AWS Fundamentals";
export const PRODUCT_NAME = "Draw";
export const APP_NAME = `${BRAND_NAME} ${PRODUCT_NAME}`;

export const BADGE_LEAD = "Self-hosted on Lightsail";
export const BADGE_PRICE = "for $8/month";
export const BADGE_TEXT = `${BADGE_LEAD} ${BADGE_PRICE}`;
export const BADGE_URL =
  "https://github.com/awsfundamentals-hq/excalidash-lightsail";
export const UPSTREAM_URL = "https://github.com/ZimengXiong/ExcaliDash";

export const documentTitle = (drawingName?: string): string =>
  drawingName ? `${drawingName} – ${APP_NAME}` : APP_NAME;
