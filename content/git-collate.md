+++
title = "git-collate"
date = "2021-10-31"

[taxonomies]
tags = ["linux", "git"]

[extra]
author = "Eric Regina"
+++

Git is an amazing piece of software but some times simple tasks can take multiple commands and interactive dialogues.
One common task I find myself doing often is `git rebase -i` or "squashing" commits into a single commit. I usually do
this when I am squashing commits on a local feature branch before merging them onto my local "`dev`" branch which is
tracked upstream.

I have a shell function I usually put in my `~/.zshrc` file. I wish to share it with you in hopes that they will be
helpful and save a little bit of time.


## `git-collate`



```bash

git-collate()
{
    # NOTE: This function "collates" git commits between branches into a single
    # commit. This is useful for when you wish to squash all commit and
    # provide a single message for them. For example consider the case:
    #
    # * 9f20e81 (HEAD -> dev) Finally done
    # * 63fc6e4 Commit before big refactor
    # * ce2a40f Starting dev work
    # * e95df85 (main) Version 1 working
    #
    # We could squash the top 3 commits ahead of the main branch into a single commit with the command
    # git-collate main

    # Read the name of the "from branch", or the branch we wish to merge to after collating.
    if [ $# -eq 0 ]; then
        echo "Must provide the name of the branch to collate commits for."
        return 1
    fi

    # Count the number of commits between the "from branch" and the current branch.
    local NUM_COMMIT="$(git rev-list $1.. --count --first-parent)"
    if [ $NUM_COMMIT = "0" ]; then
        echo "No commits between HEAD and $1".
        return 1
    fi

    # We do a "git squash" (without prompting) all the commit
    # into a single commit with their commit messages concatenated
    git reset --soft HEAD~$NUM_COMMIT && \
        git commit --edit -m"$(git log --format=%B --reverse HEAD..HEAD@{1})"
}
```

Here is a gif below showing what it looks like in action.

![git_collate](/images/git-collate/git_collate.gif)


# `gl`

Git is also capable of log messages in a more compact form than `git log`. I usually use the following alias
`gl` in my `~/.zshrc` as well.

```bash
alias gl="git log --graph --decorate --pretty=oneline --abbrev-commit
```

![gl](/images/git-collate/gl.gif)
