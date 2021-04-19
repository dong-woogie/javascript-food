export function slideTpl({ image, alt }) {
  return `<img src=${image} alt=${alt} style="width : 100%; height : 100%;">`;
}

export function mainSlideTpl({ image, alt }) {
  return `<img src=${image} alt=${alt}>`;
}
