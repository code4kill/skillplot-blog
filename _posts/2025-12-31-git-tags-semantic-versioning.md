---
layout: post
title: "Git Tags & Semantic Versioning: A Practical Guide"
date: 2025-12-31T12:56:00+00:00
author: Skillplot
category: Git
tags: [GitBasics, GitTags, SemanticVersioning, DevWorkflow, VersionControl]
excerpt: "Understand Git tag types, semantic versioning starting from 0.0.1, and industry best practices with copy-paste-ready commands."
---

This post is part of the **Git Basics – Code Version Management & Workflows** series.  
It focuses on **Git tags**, how they are used in practice, and how they align with **Semantic Versioning (SemVer)**.

---

## What Are Git Tags?

Git tags are **immutable references** to specific commits.  
They are primarily used to **mark release points** in a repository’s history.

Key characteristics:

- Tags do **not move**
- Tags represent a **fixed snapshot**
- Tags are commonly used for **releases, deployments, and audits**

> Branches are for development.  
> Tags are for history.

---

## Types of Git Tags

Git provides **two main types of tags**.

### 1. Lightweight Tags

- Simple pointer to a commit
- No metadata
- No message
- Rarely used for formal releases

### 2. Annotated Tags (Recommended)

- Full Git objects
- Store tagger name, email, date, and message
- Can be GPG-signed
- Industry standard for releases

---

## Semantic Versioning (SemVer)

Semantic Versioning uses the format:

~~~
MAJOR.MINOR.PATCH
~~~

---

## Meaning of MAJOR, MINOR, PATCH

| Component | Description | Increment When |
|---------|-------------|----------------|
| MAJOR | Breaking changes | Backward-incompatible API or behavior |
| MINOR | New features | Backward-compatible functionality |
| PATCH | Bug fixes | Backward-compatible fixes |

---

## Starting With `0.0.1`

For a first release, we start with:

~~~
0.0.1
~~~

Why this matters:

- Indicates **early-stage development**
- Signals unstable or evolving APIs
- Common in open-source and internal tooling

Constraints followed in this post:

- No `v1`, `v2`, etc. prefixes  
- No version names on branch names  
- Versions tracked **only via Git tags**

---

## Creating the First Version (`0.0.1`)

### Step 1: Check Repository Status

~~~
git status
~~~

### Step 2: Commit Your Changes

~~~
git add .
git commit -m "Initial implementation for first release"
~~~

---

## Creating Tags

### Lightweight Tag (Not Recommended for Releases)

~~~
git tag 0.0.1
~~~

Verify:

~~~
git tag
~~~

---

### Annotated Tag (Recommended)

~~~
git tag -a 0.0.1 -m "Initial release: version 0.0.1"
~~~

Inspect the tag:

~~~
git show 0.0.1
~~~

---

## Pushing Tags to Remote

### Push a Single Tag

~~~
git push origin 0.0.1
~~~

### Push All Tags

~~~
git push origin --tags
~~~

---

## Listing and Filtering Tags

~~~
git tag
git tag -l "0.*"
~~~

---

## Deleting Tags

### Delete Local Tag

~~~
git tag -d 0.0.1
~~~

### Delete Remote Tag

~~~
git push origin --delete 0.0.1
~~~

---

## Lightweight vs Annotated Tags

| Aspect | Lightweight | Annotated |
|------|-------------|-----------|
| Metadata | No | Yes |
| Message | No | Yes |
| GPG Signing | No | Optional |
| Release Usage | Rare | Standard |
| Industry Practice | Low | High |

---

## Industry Practices for Git Tags

| Scenario | Tag Type | Example |
|---------|----------|---------|
| Production release | Annotated | `1.0.0` |
| Feature release | Annotated | `0.2.0` |
| Patch / hotfix | Annotated | `0.2.1` |
| CI/CD trigger | Annotated | `0.3.0` |
| Audit / rollback | Annotated | `2.0.0` |

---

## Version Progression Example

~~~
0.0.1  → Initial release
0.0.2  → Bug fix
0.1.0  → New feature added
0.1.1  → Patch fix
1.0.0  → First stable release (breaking changes)
~~~

---

## Key Takeaways

- Git tags mark **immutable release points**
- Annotated tags are the **industry standard**
- Semantic Versioning communicates intent clearly
- Branches are for development; tags are for history

---

## Disclaimer

**Human-guided and reviewed ChatGPT-generated content.**  
This article was created using AI assistance and refined by a human reviewer to ensure correctness, clarity, and alignment with industry practices. It is shared for educational and open-learning purposes.

---

## Prompt Used to Generate This Post

> Create a blog-ready explanation of Git tags as part of a Git basics series.  
> Explain types of Git tags, semantic versioning starting from `0.0.1`, and industry best practices.  
> Include copy-paste-ready Git commands, tabular comparisons, and explanations of MAJOR, MINOR, PATCH.  
> Do not use `v1`, `v2`, or versioned branch names.  
> Add a disclaimer stating the content is human-guided and reviewed ChatGPT-generated content.

---

## Why This Prompting Approach Works

This approach supports a repeatable workflow:

- Learn concepts clearly
- Document them structurally
- Publish as clean, reusable content

It enables a consistent **learn → document → publish** cycle.


---

## References & Further Reading

- **Semantic Versioning (SemVer) – Official Specification**  
  https://semver.org/

- **Git Book (Official) – Git Basics**  
  https://git-scm.com/book/en/v2/Git-Basics-Git-Tags

- **Git Book (Official) – Full Online Book**  
  https://git-scm.com/book/en/v2

- **Git Reference Documentation**  
  https://git-scm.com/docs
