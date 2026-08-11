import { motion } from 'framer-motion';
import { SharedLayers } from '../SharedLayers';

export function Scene3() {
  const items = [{ image: 'plates.jpg', className: 'stack-one' }, { image: 'laminated.jpg', className: 'stack-two' }, { image: 'glasses.jpg', className: 'stack-three' }];
  return (
    <motion.div className="scene-frame supply-scene" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: .8 }}>
      <SharedLayers scene="03" dark={false} />
      <motion.div className="scene-eyebrow mono" initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }}>Products for the way you serve</motion.div>
      <motion.h2 className="section-title display" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .7 }}>Good stock.<br /><span className="italic">Good service.</span></motion.h2>
      <motion.div className="product-stack" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2, duration: .8 }}>{items.map((item, index) => <motion.div key={item.className} className={`stack-image ${item.className}`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 + index * .18, duration: .6 }}><img src={`${import.meta.env.BASE_URL}images/${item.image}`} alt="" /></motion.div>)}<span className="stack-label mono">Paper plates · Laminated plates · Glasses · Cups</span></motion.div>
      <motion.div className="category-chip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}><b>Everyday essentials.</b><span className="mono">packed for wholesale</span></motion.div>
    </motion.div>
  );
}