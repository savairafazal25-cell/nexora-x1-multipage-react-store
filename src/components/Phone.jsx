export default function Phone({ tone = "#55e6d0", compact = false }) {
  return <div className={`phone-wrap ${compact ? "phone-compact" : ""}`} style={{ "--phone-tone": tone }}>
    <div className="phone-device">
      <div className="phone-back">
        <div className="camera-island"><i/><i/><i/><b/></div>
        <span className="phone-logo">N</span>
        <div className="phone-shine"/>
      </div>
      <div className="phone-front">
        <div className="screen-art"><i/><i/><i/></div>
        <span className="dynamic-island"/>
        <span className="screen-clock">9:41</span>
      </div>
    </div>
  </div>;
}