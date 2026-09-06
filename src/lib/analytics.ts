// NEXARYA Analytics & Telemetry Dispatcher

export type AnalyticsEvent =
  | "project_cta_click"
  | "work_view"
  | "case_study_view"
  | "pricing_view"
  | "inquiry_started"
  | "inquiry_submitted"
  | "payment_started"
  | "payment_completed"
  | "contact_email_click";

export function trackEvent(event: AnalyticsEvent, metadata?: Record<string, any>) {
  // Privacy-first event logger
  if (typeof window !== "undefined") {
    console.log(`[NXN TELEMETRY] Event: ${event}`, metadata || {});
  }
}
