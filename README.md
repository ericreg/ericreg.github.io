# Ericreg's Personal Blog

This package is a [zola](https://www.getzola.org/) blog.

## Quickstart

Checkout the package with

```bash
git clone --recurse-submodules https://github.com/ericreg/ericreg.github.io.git
```

View the webpage locally with

```bash
zola serve
```
Add markdown files as new posts in the `content/` folder.
MathJax and the disqus shortname are set in the toml config.

```toml
mathjax = true
disqus_short_name = "ericreg"
```
