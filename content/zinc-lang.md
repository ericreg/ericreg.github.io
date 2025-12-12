+++
title = "zinc-lang"
date = "2025-12-11"

[taxonomies]
tags = ["rust", "python", "languages"]

[extra]
author = "Eric Regina"
+++

### Zinc [WIP]

## The Itch

After taking a compiler course in my graduate program, I was surprised at how easy it was to design a working syntax. While opcode generation, register allocation, and compiler optimizations can be quite difficult, designing a syntax that is easy to read and write is not.

I got this strange “itch”. The itch started  while taking compilers at GaTech. Rather than design a programming language and immediately have to deal with very hard problems, I wanted to start by writing a language that compiles into another one—similar to how Zig compiles into C. I’m a huge fan of Rust, its borrow checker, and its safety guarantees. I personally believe Rust represents one of the most important steps forward in computing.

So I decided to create a language called **Zinc**, which compiles into Rust.

## The Philosophy of Zinc

The three influences behind Zinc are Python, Rust, and Go. This is reflected in three somewhat controversial design choices of mine.

* **Python “solved” syntax**
  Python’s syntax is *easy*—so easy, in fact, that coming from strongly typed languages, it initially felt strange to understand. After writing a lot of Python and C++, I realized—like many Python enthusiasts—that about 95% of the C++ code I wrote could have been written much faster in Python.

* **Go “solved” concurrency**
  Go’s goroutines and channels took some time to get used to, but Go’s concurrency model has allowed me to write highly parallel programs quickly, confidently, and without dealing with locking primitives or the overhead of operating system threads. Yes, it’s different. Yes, it takes time to learn. I’ve written plenty of highly performant C++ code using threads and locks, but writing concurrent code in Go is far easier and less error-prone, with little performance degradation except in the most extreme cases.

* **Rust “solved” safety**
  Rust’s ownership model and borrow checker are revolutionary. They allow you to write low-level code with memory safety guarantees and no garbage collector. In nearly every situation, it is a better C++, and I will die on that hill. I understand that there are many massive C++ codebases and that one cannot simply walk in and “Rust-ify” everything. It is also true that, because of the borrow checker, not all C++ programs are trivially translatable into Rust; some require redesign.

The most important principle of Zinc is **readability**. Let’s be honest: if you’re interested in using a language like this, you’re probably not in a “performance at all costs” situation. That said, I will never carelessly sacrifice performance or introduce wrappers or non-zero-overhead abstractions. These are, admittedly, easy words to speak for a toy language that doesn’t do much yet.

As LLMs get better at writing code and we inevitably become bonsai gardeners, I believe the importance of readability will only increase. We need to start thinking about what ***reading*** code looks like for a generation of engineers who may regard writing code the way we now regard writing assembly.
