import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: "#800000",//initial color (Maroon)
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo.png",//initial logo
  fullDecal: "./logo.png",//intial texture decal
});

export default state;
