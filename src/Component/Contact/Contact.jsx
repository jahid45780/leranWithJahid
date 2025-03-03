import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", message: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.message) {
          toast.error("Please fill out all fields.");
          return;
        }

         // Simulate sending the message
    toast.success(`Message sent successfully by ${formData.name}!`);
    setFormData({ name: "", message: "" });
  };

    const mapContainerStyle = {
        width: "100%",
        height: "250px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      };
    
      const center = {
        lat:23.81033,  // Replace with your actual latitude
        lng:90.41252, // Replace with your actual longitude
      };
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-gray-100">
        {/* Google Map */}
        <div className="w-full md:w-1/3">
          <LoadScript>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
  
        {/* Contact Details */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Meet Us</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              📞 <span>+076837793</span>
            </p>
            <p className="flex items-center gap-2">
              📧 <span>galaxy@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              📍 <span>Rampura Banasree Block B</span>
            </p>
          </div>
        </div>
  
        {/* Contact Form */}
        <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md hover:opacity-90 transition"
        >
          Send
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
      </div>
    );
};

export default Contact;