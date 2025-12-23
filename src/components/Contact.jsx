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
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          href={`https://mail.google.com/mail/?view=cm&to=${CONTACT.email}&su=Assunto&body=Mensagem`}
          className="border-b "
          target="_blank"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
