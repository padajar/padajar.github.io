---
page: economics
group: drafts
order: 95
title: "A Practitioner's Guide to Estimating School Effects in Centralized Assignment Systems"
summary: "We can identify school effects from lotteries in centralized school assignment. But what parts of the lottery do we actually need to do so?"
panels:
  - label: "abstract"
    body: |
      Centralized school assignment with lottery tie-breaking generates quasi-experiments that identify school effects, but existing methods require applicants' rank-order lists and lottery numbers, data that is not always available. I characterize which data from a match identify a propensity score under which offers are ignorable. When each school draws its own lottery, offers among applicants who reach a school are randomly assigned, so comparing applicants offered and rejected there requires only waitlists. Under a single lottery, this comparison is biased, and the order of each applicant's rejections is also needed.

      Rank-order lists identify the score without lottery numbers, while the assignment and published aggregates do not in general. I show how to compute each score in finite markets, how waitlist order reveals which schools share a lottery, and how to handle priorities and screened schools. In simulations, all valid designs recover the true effect, and richer data yields more precise estimates.
  - label: "reflections"
    tone: note
    body: |
      I do a lot of causal effects estimation using centralized assignment.[^1] But we don't always have all of the data about centralized assignment. In this paper, I've put together a list of when we can and can't recover causal effects.

      [^1]: See also my [MDRD blog post](/2025/03/15/mdrd/) c:
---
