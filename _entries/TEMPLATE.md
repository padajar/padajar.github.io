---
# TEMPLATE — copy this into the folder for its page, and rename it.
#
# the filename becomes the anchor. _entries/economics/thesis.md is linkable
# anywhere on the site as /economics#thesis, so pick the name deliberately.
#
# this file renders nowhere because `page` below says TEMPLATE, which no page
# asks for. changing it is the first thing you do on a copy.
#
# page    must match the folder this file sits in: economics | education | more
# group   which section it appears under. the section labels live in the page file:
#           economics : drafts | active | degrees | undergrad | ra | work
#           education : teaching | made | adjacent
#           more      : interests | internet
# order   HIGHEST number sits at the top of its group, so a new entry only needs
#         a number bigger than whatever is above it. the no-thinking option is
#         today's date, 20260826 — always bigger, never collides, and doubles as
#         a record of when you added it. the existing entries use 100, 90, 80…
# meta    coauthors / dates / venue. markdown links work here.
# links   optional. appended to the meta line, separated by ·
# summary always visible, and the only thing a skimmer reads. omit the key
#         entirely if the entry doesn't want one.
# panels  optional, any number:
#           none -> no buttons at all, just title and summary
#           one  -> a single chip
#           two+ -> a switch, one open at a time
#         `tone: note` paints a panel orange. reserved for reflections.

page: TEMPLATE
group: drafts
order: 20260826
title: "Title Of The Thing"
meta: "with [Someone](https://example.com), 2026"
links:
  - label: "PDF"
    url: "/assets/papers/whatever.pdf"
summary: "Two or three plain sentences. What it is, and what you found."
panels:
  - label: "abstract"
    body: |
      First paragraph.

      Second paragraph. Markdown works — *italics*, [links](https://example.com), lists.
  - label: "reflections"
    tone: note
    body: |
      The version with feelings in it.
---
