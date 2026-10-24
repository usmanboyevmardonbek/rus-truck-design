import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function TruckCard({ truck }) {
  return (
    <>
      <motion.div>
        <Link>
          <img src={truck?.img} alt="" />
        </Link>
        <Link>{truck?.title}</Link>
      </motion.div>
    </>
  );
}
