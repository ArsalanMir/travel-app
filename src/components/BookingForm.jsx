import { useState } from "react";
import { motion } from "framer-motion";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.destination || !formData.date) {
      setError("Please fill out all required fields.");
      return;
    }

    // Simulate form submission
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    setFormData({ name: "", email: "", destination: "", date: "", message: "" });
  };

  return (
    <section className="pt-24 py-16 bg-gradient-to-b from-blue-100 to-gray-100">
      <motion.div
        className="container mx-auto max-w-lg md:max-w-md bg-white p-8 rounded-lg shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-text mb-6">Book Your Trip</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <motion.p
            className="text-green-600 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Booking request submitted successfully!
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select Destination</option>
            <option value="Bali">Bali, Indonesia</option>
            <option value="Paris">Paris, France</option>
            <option value="Maldives">Maldives</option>
            <option value="Santorini">Santorini, Greece</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            min={new Date().toISOString().split("T")[0]} // Restrict past dates
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Message (Optional)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
            rows="4"
          ></textarea>

          <motion.button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default BookingForm;
