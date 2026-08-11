import { motion } from 'framer-motion';

export function SharedLayers({ dark = true, scene }: { dark?: boolean; scene: string }) {
  return (
    <>
      <div className="grain" />
      <div className="scene-wash" />
      <div className="scene-topline">
        <div className="brand-lockup">
          <div className="brand-seal">A</div>
          <div>
            <div className="brand-name">Annapurna</div>
            <small className="brand-sub">Paper Plates & Glasses Wholesale</small>
          </div>
        </div>
        <div className={`scene-index mono ${dark ? '' : 'dark-index'}`}><b>{scene}</b> / 05</div>
      </div>
      <div className="frame-rule bottom-rule" />
    </>
  );
}

export function MotionDots() {
  return (
    <motion.div className="corner-orbit" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
  );
}