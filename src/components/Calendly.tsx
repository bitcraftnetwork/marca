interface CalendlyWidgetProps {
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
}
const Calendly: React.FC<CalendlyWidgetProps> = ({
  backgroundColor = "F8FFF4",
  primaryColor = "f6985f",
  textColor = "333333",
}) => {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={`https://calendly.com/bitcraftnetworks/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=${backgroundColor}&text_color=${textColor}&primary_color=${primaryColor}`}
        style={{ minWidth: "320px", height: "700px" }}
      >
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </div>
    </>
  );
};

export default Calendly;
