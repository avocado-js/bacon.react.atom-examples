import * as R from "ramda"
import Atom   from "bacon.atom"
import B      from "bacon.react.html"
import React  from "react"

export default ({value = Atom(0)}) =>
  <div>
    <B.div>Count: {value}</B.div>
    <button onClick={() => value.modify(R.add(+1))}>+</button>
    <button onClick={() => value.modify(R.add(-1))}>-</button>
  </div>
