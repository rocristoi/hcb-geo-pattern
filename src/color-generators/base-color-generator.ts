import Color from "color";
import { map } from "../processing";
import { Seed } from "../seed";

import { ColorGenerator } from "./base";

export class BaseColorGenerator implements ColorGenerator {
  private readonly grayScale?: number;

  public constructor(
    private readonly color: string,
    private readonly seed: Seed,
    grayScale?: number
  ) {
    this.grayScale = grayScale;
  }

  public generate() {
    return this.transform(this.color, this.seed);
  }

  private transform(color: string, seed: Seed): Color {
    const hueOffset = map(seed.read(14, 3), 0, 4095, 0, 359);
    const satOffset = seed.read(17, 1);

    let newColor = Color(color).hsl();

    newColor = newColor.hue(newColor.hue() - hueOffset);
    newColor = satOffset % 2 === 0 ?
      newColor.saturationl(newColor.saturationl() + satOffset) :
      newColor.saturationl(newColor.saturationl() - satOffset);
      if (this.grayScale !== 0 && this.grayScale !== null && this.grayScale !== undefined) {
        const rgbObj = newColor.rgb().object();
        const avg = (rgbObj.r * 0.30 + rgbObj.g * 0.59+ rgbObj.b * 0.11);
        const final_r = rgbObj.r + (avg - rgbObj.r) * this.grayScale
        const final_g = rgbObj.g + (avg - rgbObj.g) * this.grayScale
        const final_b = rgbObj.b + (avg - rgbObj.b) * this.grayScale
        const grayColor = Color.rgb(final_r, final_g, final_b);
        return grayColor.rgb();
      } else {
        return newColor.rgb();
      }
  }
}
