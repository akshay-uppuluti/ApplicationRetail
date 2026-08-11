import { motion } from 'framer-motion';
import { MotionDots, SharedLayers } from '../SharedLayers';

export function Scene2() {
  return (
    <motion.div className="scene-frame" style={{ background: 'var(--deep)' }} initial={{ opacity: 0, x: '5%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '-5%' }} transition={{ duration: .75, ease: 'easeOut' }}>
      <SharedLayers scene="02" />
      <MotionDots />
      <motion.div className="scene-eyebrow mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>A local business, built on reliability</motion.div>
      <motion.h2 className="section-title display" initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .8 }}><span>Supply that</span><br /><span className="italic">shows up.</span></motion.h2>
      <motion.p className="section-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7, duration: .7 }}>From a family lunch to a hotel’s daily service, a tea stall’s rush or a wedding with hundreds of guests — Annapurna helps you plan without last-minute surprises.</motion.p>
      <motion.div className="about-shape" initial={{ scale: .65, rotate: 20, opacity: 0 }} animate={{ scale: 1, rotate: 11, opacity: 1 }} transition={{ delay: .35, duration: 1 }} />
      <motion.div className="owner-card" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: .6 }}><span className="mono">Your local supply partner</span><div className="sig">U. Shankar</div><small>Owner · Annapurna Wholesale</small></motion.div>
    </motion.div>
  );
}