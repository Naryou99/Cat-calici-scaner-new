import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import PredictionResult from "./components/PredictionResult";

interface PredictionData {
  label: string;
  image_url: string;
  original_image: string;
}

function App() {
  const [predictionResult, setPredictionResult] = useState<PredictionData | null>(null);

  const handleFileUpload = (data: PredictionData) => {
    setPredictionResult(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-blue-600 py-6 px-8">
            <h1 className="text-3xl font-bold text-white text-center">
              Cat Calici Disease Detection
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Upload a photo of your cat for instant disease prediction
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="space-y-8">
              {/* Upload Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <ImageUpload onFileUpload={handleFileUpload} />
              </div>

              {/* Results Section */}
              {predictionResult && (
                <div className="mt-8 bg-gray-50 rounded-xl p-6">
                  <PredictionResult
                    label={predictionResult.label}
                    imageUrl={predictionResult.image_url}
                    originalImage={predictionResult.original_image}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;