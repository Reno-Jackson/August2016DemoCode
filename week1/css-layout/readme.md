# CSS Layout

ALL (nearly all) DOM elements can be styled with CSS.

When you apply styles to an element, you will almost certainly create classes and IDs and write `selectors` to select elements and modify their `properties`.

## Display Type
- `block`: by default, takes the full length of its parent
- `inline`: takes up only the amount of space as it's width (does not evaluate vertical margin)
- `inline-block`: best of both worlds! behaves like inline, but also computes vertical margin

Note on `inline-block`: you may suffer from the invisible space bug.