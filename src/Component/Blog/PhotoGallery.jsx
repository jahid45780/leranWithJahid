import { useState } from "react";

const images = [
  { src: "https://i.ibb.co.com/gLD7VSQn/Imported-Photo-751297728-002987.jpg", title: "Nice Day", description: "Bite Into Happiness: Today's Lunch Special" },
  { src: "https://i.ibb.co.com/qYChVbWk/4wHIOaUr.jpg", title: "Lunch Break Bliss", description: "Lunchtime Magic: A Feast for the Senses" },
  { src: "https://i.ibb.co.com/gFMp7s3j/mJn52j-w.jpg", title: "Forest Path", description: "A serene path winding through a lush green forest, perfect for a peaceful walk." },
  { src: "https://i.ibb.co.com/9k3Q7tgp/Swg7-atC.jpg", title: "City Lights", description: "A dazzling cityscape illuminated by vibrant neon lights at night." },
  { src: "https://i.ibb.co.com/DHqzTYGy/oLlpnXQM.jpg", title: "Ocean Waves", description: "Gentle ocean waves lapping against the sandy shore, a true paradise." },
  { src: "https://i.ibb.co.com/jPDHXpCp/qzkzf0og.jpg", title: "Desert Dunes", description: "Golden sand dunes stretching endlessly under a clear blue sky." },
  { src: "https://i.ibb.co.com/Wv66Hp8m/Q-vWVm0d.jpg", title: "Snowy Mountains", description: "Majestic snow-covered mountains standing tall in the distance." },
  { src: "https://i.ibb.co.com/fVc01p7k/zGddr0BQ.jpg", title: "Green Fields", description: "Vast green fields dotted with wildflowers swaying in the breeze." },
  { src: "https://i.ibb.co.com/5XvyG7mm/4LruAyeq.jpg", title: "3D Nature Scene", description: "A stunning 3D-rendered nature scene with ultra-realistic details." },
  { src: "https://i.ibb.co.com/n8V66XPt/yI2soB7v.jpg", title: "Futuristic City", description: "A mesmerizing 3D-rendered futuristic city skyline with flying cars." },
  { src: "https://i.ibb.co.com/Kjc6JJM9/MqtPkr6s.jpg", title: "Fantasy Landscape", description: "A dreamy 3D-rendered fantasy landscape with floating islands." },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-all"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white p-2 transition-opacity duration-300">
              <p className="text-lg font-bold">{image.title}</p>
              <p className="text-sm text-center">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 animate-fadeIn"
          onClick={handleModalClose}
        >
          <div
            className="relative text-center max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
          >
            <img
              src={selectedImage.src}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            />
            <p className="text-white text-lg mt-2 font-bold">{selectedImage.title}</p>
            <p className="text-white text-sm mt-1">{selectedImage.description}</p>
            <button
              onClick={handleModalClose}
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full text-lg hover:bg-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
