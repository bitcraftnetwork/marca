interface CalendlyWidgetProps {
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
}
const Calendly: React.FC<CalendlyWidgetProps> = (
  {
    // backgroundColor = "F8FFF4",
    // primaryColor = "f6985f",
    // textColor = "333333",
  }
) => {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/docversemedia/30min?primary_color=676767"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
};

export default Calendly;
