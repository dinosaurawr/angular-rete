import { Component, Output } from "rete";
import { numSocket } from "../sockets";
import { NumControl } from "../controls/number-control";

export class SourceComponent extends Component {
  constructor() {
    super("Source");
    window["sourceControl"] = this;
  }

  builder(node) {
    const out1 = new Output("num", "Number", numSocket);

    return node.addControl(new NumControl(this.editor, "num")).addOutput(out1);
  }

  worker(node, inputs, outputs) {
    outputs["num"] = node.data.num;
  }
}
