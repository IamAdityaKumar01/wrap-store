const shimmerStyle = {
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
};

const ShimmerBlock = ({ className }) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${className}`}
      style={shimmerStyle}
    ></div>
  );
};

const Shimmer = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-6">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <ShimmerBlock className="h-64" />
              <div className="p-6">
                <ShimmerBlock className="h-6 w-3/4 mx-auto rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Shimmer;
