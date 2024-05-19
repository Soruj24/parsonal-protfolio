import { CONTACT } from "../constants";

import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
      className="border border-neutral-900 pb-4 "
    >
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className=" text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
