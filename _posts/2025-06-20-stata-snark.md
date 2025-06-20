---
title: "Stata Snark"
categories: 
  - miscellany
  - economics
tags:
  - stata
---
Stata, the coding language of choice for many economists, has been described to me by others as “opaque”, “a fake coding language”, and “that weird software economists use”. Personally, I think Stata is actually quite good at a lot of different things, though that scope is certainly more limited than, say, R or Python.

But one place where Stata shines is in its manual. Sure, it has very in-depth explanations, and thorough documentation, but that’s not the part of the manual I appreciate the most. 

Stata’s manual is, in various nooks and crannies, snarky, playful, and entertaining. Here’s a collection of a few recent favorites.

---

##### `help line` 

> Be sure that the data are in the order of the x variable, or specify line's sort option.  If you do neither, you will get something that looks like the scribblings of a child.

##### help memory

> Niceness 10 corresponds to being totally nice.  Niceness 0 corresponds to being an inconsiderate, self-centered, totally selfish jerk.

(later in documentation)

> [explanation of weird things that happen with Linux and memory]
>
> What this means is that Stata requests memory from Linux, Linux says yes, and then later when Stata uses that memory, the memory might not be available and Linux crashes Stata, or worse.
>
> The Linux documentation writer exercised admirable restraint. This bug can cause Linux itself to crash. It is easy. 
>
> The proponents of this behavior call it “optimistic memory allocation”. We will, like the documentation writer, refer to it as a bug.

##### `help twoway dot`

> twoway dot is of little, if any use.  We cannot think of a use for it, but perhaps someday, somewhere, someone will.  We have nothing against the dot plot used with categorical data -- see `[G-2] graph dot` for a useful command -- but using the dot plot in a twoway context would be bizarre.  It is nonetheless included for logical completeness.

##### `cd`, remarks and examples

> Invoking an application and then changing folders is an action foreign to most Mac users.

##### `sem` 

(h/t @[JoannaRMathias](https://x.com/JoannaRMathias/status/1424850114657480732?s=19) on Twitter[^1])

> There are three generic solutions to convergence problems that we will use:
>
> *G1. The improved-starting-values procedure:*
> Obtain the current parameter values from a failed attempt, modify those lousy values to make them better, use the improved values as starting values to try to fit the model again, and repeat as necessary.
>
> *G2. The alternative-starting-values procedure:*
> Simplify the model to produce an easier-to-fit model, fit the simplified model, use the simplified model’s solution as starting values to fit the original, more complicated model, and repeat as necessary.
>
> *G3. The alternative-software-logic procedure:*
> Specify strange options that make the software behave differently in hopes that a different approach will produce a solution. `sem` does not have any such strange options, but `gsem` does. In following this approach, it does not matter whether we in fact understand what we are doing because, once we find a solution, we can obtain the parameter values from the successful model and use those values as starting values to fit the model without the strange and confusing options.

---

As I find more, I’ll keep adding to this page. Feel free to also send me favorites and they, too, may be added :)

[^1]: i refuse on principle to call it the other name
