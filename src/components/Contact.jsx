import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div id="contact" className="border-t border-stone-900 pb-20 pt-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Let's Build Something Awesome
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-stone-400"
        >
          {CONTACT.address}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="block my-4 text-xl hover:text-blue-400 transition-colors"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.div>
        
        <motion.div
             whileInView={{ opacity: 1, scale: 1 }}
             initial={{ opacity: 0, scale: 0.8 }}
             transition={{ duration: 0.5 }}
             className="mt-8"
        >
            <a
            href={`mailto:${CONTACT.email}`}
            className="inline-block border-b border-white pb-1 text-2xl font-light hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
            >
            {CONTACT.email}
            </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;