const ShimmerUI = () => {
  return (
    <div className="restaurants">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default ShimmerUI;
