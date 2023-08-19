import { BaseFigure } from "../base-models/base-figure";
import { FigureType } from "../types/figure-type";

export class Triangle extends BaseFigure {
  public readonly perimeter: number;

  constructor(
    public readonly firstCathetusWidth: number,
    public readonly secondCathetusWidth: number,
    public readonly hypotenuseWidth: number
  ) {
    super(FigureType.triangle);

    if (firstCathetusWidth ** 2 + secondCathetusWidth ** 2 !== hypotenuseWidth ** 2) {
      throw new Error('Такого треугольника не существует')
    }

    this.perimeter = firstCathetusWidth + secondCathetusWidth + hypotenuseWidth
  }
}
