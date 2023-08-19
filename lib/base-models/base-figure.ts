import { FigureType } from "../types/figure-type";

export class BaseFigure {
  private readonly _type: FigureType

  constructor(type: FigureType) {
    this._type = type;
  }

  get type(): FigureType {
    return this._type;
  }
}
