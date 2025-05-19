# HCB-geo-pattern

![Cover Image](./assets/cover.png)

This is a fork of the original `@prescott/geo-pattern` TypeScript library with one added feature: **grayscale generation**. It is specifically tailored for [HCB Mobile](https://github.com/hackclub/hcb-mobile) and generates patterns that perfectly match the Ruby version of GeoPattern used in HCB ([hackclub/hcb](https://github.com/hackclub/hcb)).

## Live Demo

https://mooyoul.github.io/geo-pattern/


## Getting Started

```bash
$ npm install hcb-geo-pattern --save
```

## API

#### `generate(params: GeneratePatternParams) => Promise<Pattern>`

```typescript
interface GeneratePatternParams {
  input: string;
  patterns?: string[];
  color?: string;
  baseColor?: string;
  grayscale?: number;
}

interface Pattern {
  background?: Background;
  structure?: Structure;
  width: number;
  height: number;
  toSVG(): string;
  toDataURL(): string;
}
```


## Build

```bash
$ npm run build
```

## Credits

geo-pattern was originally written by [Jason Long](https://github.com/jasonlong). 

## License
[MIT](LICENSE)

See full license on [mooyoul.mit-license.org](http://mooyoul.mit-license.org/)

