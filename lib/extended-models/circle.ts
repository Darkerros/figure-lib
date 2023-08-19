import { BaseFigure } from "../base-models/base-figure";
import { FigureType } from "../types/figure-type";
import { pi } from "../consts/pi";

export class Circle extends BaseFigure {
  public readonly diameter: number;
  public readonly square: number;

  constructor(radius: number) {
    super(FigureType.circle);

    this.diameter = radius * 2;
    this.square = pi * (radius ** 2);
  }
}
