import { motion } from 'framer-motion';
import { SharedLayers } from '../SharedLayers';

export function Scene5() {
  return (
    <motion.div className="scene-frame final-scene" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .85 }}>
      <SharedLayers scene="05" dark={false} />
      <motion.div className="final-lockup" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .8 }}><div className="mono" style={{ color: 'var(--rust)' }}>Quality · quantity · local care</div><h2 className="display">Let’s make<br /><span className="italic">serving easy.</span></h2><p>Quality Paper Plates & Disposable Glasses at Wholesale Prices.</p></motion.div>
      <motion.div className="contact-ribbon" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .55, duration: .7 }}><span className="mono">Call or WhatsApp</span><div className="phone">7989380584</div><div className="address">U. Shankar · 2-60/1, Road No. 24, Lingapur,<br />Kaddampeddur, Nirmal, Telangana - 504202</div></motion.div>
      <motion.div className="final-cta mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}><span className="dot" /> Ready for your next order</motion.div>
      <motion.div className="final-bottom mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}>Annapurna Paper Plates & Glasses Wholesale · Nirmal, Telangana</motion.div>
    </motion.div>
  );
}