import React from "react";

interface PredictionResultProps {
  label: string;
  imageUrl: string;
  originalImage: string;
}

const PredictionResult: React.FC<PredictionResultProps> = ({
  label,
  imageUrl,
  originalImage,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">
        Prediction Result: {label}
      </h3>
      <div className="mb-6">
        <h4 className="text-xl font-medium mb-2">Original Image</h4>
        <img
          src={`http://127.0.0.1:5000/${originalImage}`}
          alt="Original"
          className="w-full h-auto rounded-md"
        />
      </div>
      <div>
        <h4 className="text-xl font-medium mb-2">Result Image</h4>
        <img
          src={`http://127.0.0.1:5000/${imageUrl}`}
          alt="Result"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default PredictionResult;
