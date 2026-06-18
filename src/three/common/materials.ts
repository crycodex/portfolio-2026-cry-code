import { MeshBasicMaterial, ShaderMaterial } from "three";
import { resources } from "../../utils/resources";
import shadowVertexShader from "../shaders/shadow-catcher/vertex.glsl";
import shadowFragmentShader from "../shaders/shadow-catcher/fragment.glsl";

import type { Material } from "three";

let roomMaterial: Material | null = null;
let frameMaterial: Material | null = null;
let contactMaterial: Material | null = null;
let shadowMaterial: ShaderMaterial | null = null;

export const getRoomMaterial = (): Material => {
  if (roomMaterial) return roomMaterial;
  const texture = resources.items["room-texture"];
  texture.flipY = false;

  roomMaterial = new MeshBasicMaterial({ map: texture });

  return roomMaterial;
};

export const getFrameMaterial = (): Material => {
  if (frameMaterial) return frameMaterial;
  const texture = resources.items["me-texture"];
  texture.flipY = false;

  frameMaterial = new MeshBasicMaterial({ map: texture });

  return frameMaterial;
};

export const getContactMaterial = (): Material => {
  if (contactMaterial) return contactMaterial;
  const texture = resources.items["contact-texture"];
  texture.flipY = false;

  contactMaterial = new MeshBasicMaterial({ map: texture });

  return contactMaterial;
};

export const getShadowMaterial = (): ShaderMaterial => {
  if (shadowMaterial) return shadowMaterial;

  shadowMaterial = new ShaderMaterial({
    vertexShader: shadowVertexShader,
    fragmentShader: shadowFragmentShader,
    depthWrite: false,
    depthTest: false,
    uniforms: {
      uTexture: { value: null },
      uColorBackground: { value: null },
      uColorShadow: { value: null },
    },
  });

  return shadowMaterial;
};
