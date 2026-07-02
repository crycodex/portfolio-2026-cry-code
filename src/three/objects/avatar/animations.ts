import { avatar } from ".";
import { avatarHologram } from "./hologram";
import { AnimationAction, AnimationMixer, LoopOnce, LoopPingPong } from "three";
import gsap from "gsap";
import { resources } from "../../../utils/resources";
import { sceneWeights } from "../../../animations/scenes";
import { face } from "./face";
import { sleepingSprite } from "../contact/sleeping-sprite";
import { playSound } from "../../../features/sounds/utils/sounds";
import { isFeatureEnabled } from "../../../utils/features";
import { stopSnoreRepetition } from "../../../features/sounds/core/contact";

import type { AnimationClip, Object3D } from "three";

let mixer: AnimationMixer;
let activeAction: string | null = null;
const actions = new Map<string, AnimationAction>();
let isAwake = false;
const wavingStrength = { value: isFeatureEnabled("introWave") ? 1 : 0 };
let hologramMixer: AnimationMixer;
const hologramActions = new Map<string, AnimationAction>();

const init = () => {
  mixer = new AnimationMixer(avatar.getMesh() as Object3D);
  hologramMixer = new AnimationMixer(avatarHologram.getMesh() as Object3D);

  setupActions();
  setupHologramActions();

  play("desktop-idle");

  wave();
};

const getActionFromMesh = (name: string) => {
  const resource = resources.items["avatar-model"];
  const action = resource.animations.find((animation: AnimationClip) => animation.name === name);
  if (!action) {
    console.warn(`[AvatarAnimations] Action ${name} not found`);
    return null;
  }
  return action;
};

const setupAction = (name: string, clipName: string, loopType: any, clamp: boolean = false, autoPlay: boolean = false) => {
  const clip = getActionFromMesh(clipName);
  if (clip) {
    const action = mixer.clipAction(clip);
    action.loop = loopType;
    if (clamp) action.clampWhenFinished = true;
    actions.set(name, action);
    if (autoPlay) action.play();
  }
};

const setupHologramAction = (name: string, clipName: string, loopType: any, clamp: boolean = false, autoPlay: boolean = false) => {
  const clip = getActionFromMesh(clipName);
  if (clip) {
    const action = hologramMixer.clipAction(clip);
    action.loop = loopType;
    if (clamp) action.clampWhenFinished = true;
    hologramActions.set(name, action);
    if (autoPlay) action.play();
  }
};

const setupActions = () => {
  setupAction("desktop-idle", "idle", LoopPingPong);
  setupAction("t-idle", "t-idle", LoopPingPong, false, true);
  setupAction("left-desktop", "left-desktop", LoopOnce, true);
  setupAction("sleeping", "sleeping", LoopPingPong, false, true);
  setupAction("wake-up", "wake-up", LoopOnce, true);
  setupAction("contact-idle", "contact-idle", LoopPingPong, false, true);
  setupAction("wave", "wave", LoopOnce, true);
};

const setupHologramActions = () => {
  setupHologramAction("desktop-idle", "idle", LoopPingPong, false, true);
  setupHologramAction("t-idle", "t-idle", LoopPingPong, false, true);
  setupHologramAction("left-desktop", "left-desktop", LoopOnce, true);
  setupHologramAction("contact-idle", "contact-idle", LoopPingPong, false, true);
  setupHologramAction("wave", "wave", LoopOnce, true);
};

const play = (name: string, transition: number = 0.5) => {
  if (activeAction === name) return;
  let newAction = actions.get(name);
  let newHologramAction = hologramActions.get(name);
  
  if (!newAction || !newHologramAction) {
    console.warn(`[AvatarAnimations] Action ${name} not found, falling back to desktop-idle`);
    newAction = actions.get("desktop-idle");
    newHologramAction = hologramActions.get("desktop-idle");
    name = "desktop-idle";
    if (activeAction === name || !newAction || !newHologramAction) return;
  }

  newAction.reset().play();
  newHologramAction.reset().play();

  if (activeAction) {
    const currentAction = actions.get(activeAction);
    if (currentAction) currentAction.crossFadeTo(newAction, transition);

    const currentHologramAction = hologramActions.get(activeAction);
    if (currentHologramAction) currentHologramAction.crossFadeTo(newHologramAction, transition);
  }

  activeAction = name;
};

const setWeight = (key: string, weight: number) => {
  const action = actions.get(key);
  if (action) action.weight = weight;
  const hologramAction = hologramActions.get(key);
  if (hologramAction) hologramAction.weight = weight;
};

const updateIntro = () => {
  setWeight("desktop-idle", (1 - avatar.tIdleIntensity.value) * (1 - wavingStrength.value));
  setWeight("left-desktop", (1 - avatar.tIdleIntensity.value) * (1 - wavingStrength.value));
  setWeight("t-idle", 0);
  setWeight("contact-idle", avatar.tIdleIntensity.value);
  setWeight("sleeping", 0);
  setWeight("wake-up", 0);
  setWeight("wave", wavingStrength.value * (1 - avatar.tIdleIntensity.value));
};

const wave = () => {
  const waveAction = actions.get("wave");
  const hologramWaveAction = hologramActions.get("wave");
  if (!waveAction) return;
  const tl = gsap.timeline();

  const waveDuration = waveAction.getClip().duration;
  waveAction.reset().play();
  if (hologramWaveAction) hologramWaveAction.reset().play();

  tl.add(face.wave());
  tl.fromTo(wavingStrength, { value: 1 }, { value: 0 }, Math.max(0, waveDuration - 0.2));

  return tl;
};

const wakeUp = () => {
  if (isAwake) return;
  isAwake = true;
  const sleepingAction = actions.get("sleeping");
  const wakeUpAction = actions.get("wake-up");
  const contactIdleAction = actions.get("contact-idle");
  if (!sleepingAction || !wakeUpAction || !contactIdleAction) return;

  stopSnoreRepetition();
  playSound("gasp");

  wakeUpAction.reset().play();
  sleepingAction.crossFadeTo(wakeUpAction, 0.2);

  const wakeUpDuration = wakeUpAction.getClip().duration;

  setTimeout(() => {
    contactIdleAction.reset().play();
    wakeUpAction.crossFadeTo(contactIdleAction, 0.5);
  }, wakeUpDuration * 1000);

  face.wakeUp();
  sleepingSprite.hide();
};

const updateContact = () => {
  setWeight("desktop-idle", 0);
  setWeight("left-desktop", 0);
  setWeight("t-idle", 0);
  setWeight("wave", 0);

  const sleeping = actions.get("sleeping");
  const wakeUpAction = actions.get("wake-up");
  const contactIdle = actions.get("contact-idle");

  const totalWeight = (sleeping?.weight || 0) + (wakeUpAction?.weight || 0) + (contactIdle?.weight || 0);
  if (totalWeight === 0) {
    if (!isAwake) {
      setWeight("sleeping", 1);
    } else {
      setWeight("contact-idle", 1);
    }
  }
};

const update = () => {
  const isContact = sceneWeights.contact > 0.001;
  if (isContact) {
    updateContact();
  } else {
    updateIntro();
  }

  const delta = gsap.ticker.deltaRatio(60);
  mixer.update(delta / 60);
  hologramMixer.update(delta / 60);
};

export const animations = { init, play, actions, update, wakeUp, getIsAwake: () => isAwake, wave };
