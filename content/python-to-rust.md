+++
title = "Python one-liners in Rust"
date = "2021-11-20"

[taxonomies]
tags = ["rust"]

[extra]
author = "Eric Regina"
+++



# `join()`-ing  a sequence of Strings

Here we wish to do a conversion form a iterable of `int`/`i32` into a comma separated string.

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

```rust
let result = vec![1, 2, 3, 4, 5, 6, 7, 8, 9].iter().map(|x| x.to_string()).collect::<Vec<String>>().join(",");
```
