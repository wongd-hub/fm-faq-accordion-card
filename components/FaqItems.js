import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import chevron from '../static/assets/icon-arrow-down.svg'

const chevVariants = {
    open: { rotate: -180 },
    closed: { rotate: 0 }
}

const infoVariants = {
    open: { opacity: 1, height: 'fit-content', y: 0 },
    closed: { opacity: 0, height: 0, y: -20 }
}

export default function FaqItem(props) {
    const [displayed, setDisplayed] = useState(false)

    return (
        <div className="faq-item">
            <div 
                className="faq-item__first-line"
                onClick={() => setDisplayed(!displayed)} 
            >
                <p 
                    className="faq-item__first-line__title"
                    style={displayed ? { fontWeight: 700 } : { fontWeight: 400 }} 
                >
                    {props.title}
                </p>
                <motion.div 
                    className="faq-item__first-line__chevron"
                    variants={chevVariants}
                    animate={displayed ? 'open' : 'closed'}
                >
                    <Image 
                        className="faq-item__first-line__chevron__img"
                        src={chevron}
                        width={10 * 1.5}
                        height={7 * 1.5}
                        alt=""
                    />
                </motion.div>
            </div>

            <motion.div 
                className="faq-item__info"
                variants={infoVariants}
                transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 150,
                    duration: 0.2
                }}
                animate={displayed ? 'open' : 'closed'}
            >
                {props.info}
            </motion.div>
            <div className="faq-item__divider"></div>
        </div>
    )
}