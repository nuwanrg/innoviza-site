import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Accordion.module.scss'
import CN from 'classnames'
import { Tick, ArrowDown, ArrowUp } from 'components/icons'

const AccordionItem = ({ i, expanded, setExpanded, item }) => {
  const isOpen = i === expanded
  const { title, list, icon } = item

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className={styles['accordion']}>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={CN(
          styles['accordion__header'],
          'select-none cursor-pointer text-white hover:bg-accordion-hover flex items-center',
          {
            '!bg-accordion-active': isOpen,
          }
        )}>
        <span className='mr-[12px] text-[24px]'>{icon}</span>
        <span>{title || 'Untitled'}</span>

        {isOpen ? (
          <ArrowUp className='ml-auto opacity-50' color='#fff' />
        ) : (
          <ArrowDown className='ml-auto opacity-50' color='#fff' />
        )}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.15, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <ul
              className={CN(
                styles['accordion__list'],
                'flex flex-col gap-[8px] py-[20px] px-[20px] text-off-white'
              )}>
              {list.map(({ label }, index) => (
                <li key={index} className='flex items-center'>
                  <Tick /> <span className='pl-[12px]'>{label}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export const Accordion = ({ list }) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState()

  return list.map((item, i) => (
    <AccordionItem
      key={i}
      i={i}
      item={item}
      expanded={expanded}
      setExpanded={setExpanded}
    />
  ))
}
