import { BaseFigure } from "../base-models/base-figure";
import { FigureType } from "../types/figure-type";

export class Rectangle extends BaseFigure {
  public readonly square: number;

  constructor(
    public readonly width: number,
    public readonly height: number
  ) {
    super(FigureType.rectangle);


    this.square = this.height * this.width;
  }
}
