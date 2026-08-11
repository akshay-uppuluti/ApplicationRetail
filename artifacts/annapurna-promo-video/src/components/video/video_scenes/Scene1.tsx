import { motion } from 'framer-motion';
import { SharedLayers } from '../SharedLayers';

export function Scene1() {
  return (
    <motion.div className="scene-frame" style={{ background: 'var(--deep)' }} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .8, ease: 'easeOut' }}>
      <SharedLayers scene="01" />
      <motion.div className="hero-orb" initial={{ scale: .7, rotate: -12, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ delay: .25, duration: 1.15, ease: 'easeOut' }}><img src={`${import.meta.env.BASE_URL}images/plates.jpg`} alt="" /></motion.div>
      <motion.div className="product-burst" animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
      <motion.div className="orbit-line" />
      <motion.div className="scene-eyebrow mono" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2, duration: .6 }}>Nirmal · Telangana</motion.div>
      <motion.h1 className="hero-title display" initial={{ opacity: 0, y: 55 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .9, ease: 'easeOut' }}><span className="line">Ready for</span><span className="line accent italic">every</span><span className="line">gathering.</span></motion.h1>
      <motion.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85, duration: .7 }}>Quality paper plates and disposable glasses at wholesale prices — supplied with the care of a dependable local partner.</motion.p>
      <motion.div className="hero-pill mono" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: .5 }}><span className="dot" /> homes · hotels · caterers · functions</motion.div>
    </motion.div>
  );
}