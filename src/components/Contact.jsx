import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Entre em contato
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            CONTACT.address
          )}`}
          className="my-4 flex items-center justify-center gap-2 text-stone-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt className="text-2xl text-red-500 transition-colors hover:scale-110" />
          <span>{CONTACT.address}</span>
        </motion.a>

        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center gap-2 text-stone-300"
        >
          <FaPhoneAlt className="text-2xl text-blue-500" />
          <span>{CONTACT.phoneNo}</span>
        </motion.a>

        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          href={`https://wa.me/${CONTACT.zap}`}
          className="my-4 flex items-center justify-center gap-2 text-stone-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-3xl text-green-500 transition-colors hover:scale-110" />
          <span>{CONTACT.zapvizual}</span>
        </motion.a>

        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          href={`https://mail.google.com/mail/?view=cm&to=${CONTACT.email}&su=Assunto&body=Mensagem`}
          className="my-4 flex items-center justify-center gap-2 text-stone-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-2xl text-stone-300 transition-colors hover:scale-110" />
          <span>{CONTACT.email}</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
