const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-image shimmer-animate"></div>

            <div className="shimmer-details">
              <div
                className="shimmer-line shimmer-animate"
                style={{ width: "80%" }}
              ></div>
              <div
                className="shimmer-line shimmer-animate"
                style={{ width: "50%", height: "20px", marginTop: "8px" }}
              ></div>
              <div
                className="shimmer-line shimmer-animate"
                style={{ marginTop: "12px" }}
              ></div>
              <div
                className="shimmer-line shimmer-animate"
                style={{ width: "90%" }}
              ></div>
              <div
                className="shimmer-line shimmer-animate"
                style={{ width: "70%", marginTop: "8px" }}
              ></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
