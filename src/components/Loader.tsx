import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1.4 }}
    >
      <h1 className="text-3xl font-bold animate-pulse">Loading Portfolio...<br /> Use Desktop for better visuals </h1>
    </motion.div>
  );
};

export default Loader;
