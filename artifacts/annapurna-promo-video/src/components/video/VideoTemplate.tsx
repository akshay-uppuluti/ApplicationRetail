import { AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  scene1: 5200,
  scene2: 4800,
  scene3: 5200,
  scene4: 5200,
  scene5: 5600,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });
  const scenes = [<Scene1 key="scene1" />, <Scene2 key="scene2" />, <Scene3 key="scene3" />, <Scene4 key="scene4" />, <Scene5 key="scene5" />];

  return <div className="video-root"><AnimatePresence mode="sync" initial={false}>{scenes[currentScene]}</AnimatePresence></div>;
}