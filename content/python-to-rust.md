+++
title = "Python one-liners in Rust"
date = "2021-11-20"

[taxonomies]
tags = ["rust"]

[extra]
author = "Eric Regina"
+++

This page is an ongoing collection of "one-liners" in python translated into rust.
Python's [duck typing](https://en.wikipedia.org/wiki/Duck_typing) system can allow for very brief
code. The intent of this page is to help other python programmers learn rust. Use these with caution as
"one liners" are not always very readable. Make sure the context is appropriate.

## `join()`-ing  a sequence of Strings

Here we wish to do a conversion from an iterable of `int`/`i32` elements into a comma separated string.

```rust
[1,2,3,4,5,6,7,8,9] => "1,2,3,4,5,6,7,8,9"
```

### Python - [`map`](https://docs.python.org/3/library/functions.html#map)

```python
result = ",".join(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
```

### Python - [list comprehension](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

```python
result = ",".join([str(x) for x in [1, 2, 3, 4, 5, 6, 7, 8, 9]])
```

### Rust - `iter().map(...).collect<type>()`

The iteration is slightly difference depending on if you are iterating over a vector, tuple, or array.

Using vectors

```rust
let result = vec![1, 2, 3, 4, 5, 6, 7, 8, 9]
    .iter()
    .map(|x| x.to_string())
    .collect::<Vec<String>>()
    .join(",");
```

Using tuples

```rust
let result = (1 .. 9)
    .map(|x| x.to_string())
    .collect::<Vec<String>>()
    .join(",");
```
