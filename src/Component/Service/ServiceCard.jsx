import { motion } from "framer-motion";

const ServiceCard = ({serviceCards}) => {
    const {title, img, detail,price}= serviceCards;
    return (
        <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 p-4"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="p-4 text-center">
          <h1 className="text-xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600 text-sm mb-4">{detail}</p>
          <p className="text-lg font-semibold text-blue-500">${price}</p>
        </div>
      </motion.div>
    );
};

export default ServiceCard;