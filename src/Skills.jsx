

// import { motion } from "framer-motion";

// export default function Skills() {
//   const skills = [
//     "devicon-cplusplus-plain colored",
//     "devicon-java-plain colored",
//     "devicon-python-plain colored",
//     "devicon-html5-plain colored",
//     "devicon-css3-plain colored",
//     "devicon-javascript-plain colored",
//     "devicon-react-original colored",
//     "devicon-nodejs-plain colored",
//     "devicon-express-original colored",
//     "devicon-spring-plain colored",
//     "devicon-tailwindcss-original colored",
//     "devicon-mysql-plain colored",
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-16 md:py-20 px-4 md:px-6 bg-gray-900 relative z-20 animate-fade"
//     >
//       <div className="max-w-6xl mx-auto text-center">

//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold mb-12 gradient-text"
//         >
//           My Skills
//         </motion.h2>

//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12 place-items-center">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.2 }}
//               className="text-5xl cursor-pointer"
//             >
//               <motion.i
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: index * 0.2,
//                 }}
//                 className={`${skill} drop-shadow-lg`}
//               />
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "devicon-cplusplus-plain colored",
    "devicon-java-plain colored",
    "devicon-python-plain colored",
    "devicon-html5-plain colored",
    "devicon-css3-plain colored",
    "devicon-javascript-plain colored",
    "devicon-react-original colored",
    "devicon-nodejs-plain colored",
    "devicon-express-original colored",
    "devicon-spring-plain colored",
    "devicon-tailwindcss-original colored",
    "devicon-mysql-plain colored",
  ];

  return (
<section
      id="skills"
      className="py-16 md:py-20 px-4 md:px-6 bg-gray-900 relative z-20 animate-fade"
    >
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.2 }}
              className="text-5xl cursor-pointer"
            >
              <motion.i
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className={`${skill} drop-shadow-lg`}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}