import { Link } from "react-router-dom";

export default function BackHomeButton() {
  return (
    <div className="back-home-wrapper">
      <Link
        to="/"
        state={{ scrollToHomePosition: true }}
        className="button primary small"
      >
        Back to Home
      </Link>
    </div>
  );
}