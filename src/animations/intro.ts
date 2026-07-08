import { animations as avatarAnimations } from "../three/objects/avatar/animations";
import { isFeatureEnabled } from "../utils/features";
import gsap from "gsap";
import { mouse } from "../three/objects/room/mouse";
import { avatar } from "../three/objects/avatar";

const play = () => {
  const tl = gsap.timeline();

  tl.from(avatar.waypointsPosition, { x: 0, z: 6, duration: 3, ease: "power2.inOut" }, 0);
  tl.from(avatar.waypointsRotation, { y: -Math.PI / 2, duration: 3, ease: "power2.inOut" }, 0);
  tl.from(avatarAnimations.introStandIntensity, { value: 1, duration: 1.8, ease: "power3.out" }, 3);

  if (!isFeatureEnabled("introWave")) return;

  //avatarAnimations.wave();

  tl.set(mouse.enabled, { value: true }, 0.3);
};

export const intro = { play };
