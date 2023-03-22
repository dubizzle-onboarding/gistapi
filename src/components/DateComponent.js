import dateFormat from "../utils/dateFormat";

const DateComponent = ({ gist }) => {
  return (
    <div style={{ display: "flex", gap: 5, marginTop: 5, marginBottom: 5 }}>
      <div style={{ display: "inline", fontSize: 12 }}>
        Created at: <span>{dateFormat(gist.created_at)}</span>
      </div>
      <div style={{ display: "inline", fontSize: 12 }}>
        Last updated: <span>{dateFormat(gist.updated_at)}</span>
      </div>
    </div>
  );
};

export default DateComponent;
