import { Adapter } from "./adapter";
import { PatternGenerator } from "./pattern-generator";

export interface GeneratePatternParams {
  input: string;
  patterns?: string[];
  color?: string;
  baseColor?: string;
  grayScale?: boolean;
}

export async function generatePattern(params: GeneratePatternParams, adapter: Adapter) {
  const seed = await adapter.createSeed(params.input);

  const generator = new PatternGenerator({
    seed,
    patterns: params.patterns,
    color: params.color,
    baseColor: params.baseColor,
    grayScale: params.grayScale,
  });
  return await generator.generate();
}

