import { motion } from 'framer-motion';
import { SharedLayers } from '../SharedLayers';

export function Scene4() {
  return (
    <motion.div className="scene-frame event-scene" initial={{ opacity: 0, y: '4%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-4%' }} transition={{ duration: .75 }}>
      <SharedLayers scene="04" />
      <motion.div className="scene-eyebrow mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>For your next big day</motion.div>
      <motion.h2 className="section-title display" initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28, duration: .75 }}>Bring the<br /><span className="italic">whole table.</span></motion.h2>
      <motion.p className="section-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}>Tell us your date, guest count and product needs. We’ll help you work out a practical bulk order for functions and events.</motion.p>
      <motion.div className="event-sun" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="event-image" initial={{ opacity: 0, rotate: 19, scale: .75 }} animate={{ opacity: 1, rotate: 7, scale: 1 }} transition={{ delay: .35, duration: 1, ease: 'easeOut' }}><img src={`${import.meta.env.BASE_URL}images/packing.jpg`} alt="" /></motion.div>
      <motion.div className="event-stats mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}><span><b>01</b>Call us</span><span><b>02</b>Share quantity</span><span><b>03</b>Serve well</span></motion.div>
    </motion.div>
  );
}