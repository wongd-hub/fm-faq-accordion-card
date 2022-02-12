import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import FaqItem from '../components/FaqItems'
import Notification from '../components/Notification'

import boxImg from '../static/assets/illustration-box-desktop.svg'
import desktopImg from '../static/assets/illustration-woman-online-desktop.svg'
import mobileImg from '../static/assets/illustration-woman-online-mobile.svg'

const faqInfo = [
  {
    q: 'How many team members can I invite?',
    a: 'You can invite up to 2 additional users on the Free plan. There is no limit on \
        team members for the Premium plan.',
  },
  {
    q: 'What is the maximum file upload size?',
    a: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    q: 'How do I reset my password?',
    a: 'Click “Forgot password” from the login page or “Change password” from your profile page.\
        A reset link will be emailed to you.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    q: 'Do you provide additional support?',
    a: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  }
]

export default function Home() {

  const [vsize, setVSize] = useState([0, 0]) // State used to track viewport size
  const [unsupported, setUnsupp] = useState(undefined)

  // Listen for window resize
  useEffect(() => {
    setVSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', () => {
      setVSize([window.innerWidth, window.innerHeight])
    });
    return () => window.removeEventListener('resize', () => setVSize([window.innerWidth, window.innerHeight]));
  }, []);

    // Change state if window is certain size
  useEffect(() => {
    if (vsize[0] >= 1440 || vsize[0] <= 375) {
      setUnsupp(false)
    } else {
      setUnsupp(true)
    }
  }, [vsize]);

  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <title>Frontend Mentor | FAQ Accordions</title>
      </Head>

      <Notification isDisplayed={unsupported} />

      <main>
        <div className="card-container">
          <div className="image">
            <div className="image__box">
              <Image
                src={boxImg}
                alt=""
              />
            </div>
            <div className="image__desktop">
              <Image
                src={desktopImg}
                alt=""
              />
            </div>
          </div>
          <div className="faq-items">
            <h1>FAQ</h1>
            {
              faqInfo.map((el, i) => (
                <FaqItem title={el.q} info={el.a} isDisplayed={false} key={i} />
              ))
            }
          </div>
        </div>    
      </main>

      <footer>

      </footer>
    </div>
  )
}
