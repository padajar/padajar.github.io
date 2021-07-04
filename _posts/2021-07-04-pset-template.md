---
title: "making a problem set template"
subtitle: "so much latex"
categories:
  - education
tags:
  - latex
  - psets

---
This summer, I’m trying to do non-academic preparation for grad school. This means that I’m not trying to read papers, or study ahead in textbooks, etc. Instead, I’m doing things like cleaning up my digital life, setting up apps for reading papers, and making a nice looking problem set template!

<object data="https://padajar.com/assets/pset.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="https://padajar.com/assets/pset.pdf">
        <p>Looks like you can't see this PDF in-browser for some reason. Click <a href="https://padajar.com/assets/pset.pdf">this link</a> to download the PDF.</p>
    </embed>
</object>


This pset template is entirely written from scratch in LaTeX. A few notes about how I chose to design it:

* The core idea of this template is that I wanted to compile different versions of a pset from the same file. For submitting, I probably want to include both the text of problems and solutions. Or, if I was a TA, I probably don’t want to include solutions in the file I send to students. For my own purposes, I probably want to  also include my reflections on the problems — but there’s no need to share those with anyone else. By having separate environments for problems, solutions, and reflections, I can generate a file containing whichever I want. I’ve also tried to clearly distinguish each environment from each other using the package `tcolorbox` in ways that are distinguishable, even when printed in black-and-white. 
* A clean looking header; this went through a few iterations. I think the current header is a *tad* clunky and overfilled with information, but decided that all of it was important enough that I wanted to include it. (It also doesn’t have great support for multi-line things, but that’s something I think that could easily be fixed.)
* A nice-ish way to have theorems and proofs in a solution environment. I considered having them inset by 0.5cm on the left and right, but felt that they were then too narrow. Instead, I’ve just italicized the word “Theorem” and “Proof”, and ended in-proof solutions with an empty box, rather than a filled box. 

---

On a separate note, this is my first post back on this site after a year of posting on MIT Admissions. There’s a lot of posts that I’d like to make after finishing school (and finishing undergrad!) — reflecting on being an MIT Admissions blogger, thinking about my time at MIT, sharing some pictures from the post-graduation trip I took. But because I don’t want to force myself to write things before I’m ready to write, those posts will happen when they happen.

But, excited to be back and posting here! I’m not sure[^1] how often people actually read on my own site, but I’ll continue to post here anyways. 

[^1]: well, i do know, because i have google analytics set up on this site; the answer is that it’s much, much fewer than the number of people who read mitadmissions

