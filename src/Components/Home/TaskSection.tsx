'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 240 },
  show: { opacity: 1, y: 0, transition: { duration: 1.7, ease: 'easeOut' } },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
}

const TaskSection = () => {
  return (
    <motion.div
      className="bg-[#FFFFFF] py-[3rem] flex flex-col lg:flex-row gap-[2rem] lg:justify-between px-[1.5rem] md:px-[6.5rem]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col gap-[2.4rem] md:gap-[3.19rem] lg:w-[29.9375rem]">
        <motion.div variants={fadeUp}>
          <h1 className="playfair text-[2.125rem] lg:text-[3rem] text-[#1F2937] font-bold text-center lg:text-left">
            Typing Tasks is Slowing You Down
          </h1>
          <p className="text-[1rem] lg:text-[1.25rem] font-normal leading-[1.5rem] dm-sans text-center lg:text-left text-[#4B5563]">
            Task managers are too complex and overwhelming
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-[1rem]"
          variants={containerVariants}
        >
          {[
            {
              text: 'You waste 30+ minutes everyday organizing your daily tasks',
              bg: '#DCFFFA',
              icon: '/clock.svg',
              textColor: '#293A37',
            },
            {
              text: 'You procrastinate because writing down tasks feels like work',
              bg: '#DCEBFF',
              icon: '/sad.svg',
              textColor: '#293A37',
            },
            {
              text: "You miss deadlines when you're overwhelmed with clunky apps",
              bg: '#F0E3FF',
              icon: '/cancel.svg',
              textColor: '#362E40',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex w-full p-[1rem] items-center gap-[1rem] rounded-[1.25rem]`}
              style={{ backgroundColor: item.bg }}
              variants={fadeUp}
            >
              <img src={item.icon} alt="" />
              <p
                className="dm-sans font-normal leading-[1.5rem] text-[1rem] lg:text-[1.25rem]"
                style={{ color: item.textColor }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={imageVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-1/2 mt-6 lg:mt-0"
      >
        <img src="/group-chat.jpg" alt="" className="object-contain mx-auto" />
      </motion.div>
    </motion.div>
  )
}

export default TaskSection
