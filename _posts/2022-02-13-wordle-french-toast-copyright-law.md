---
title: "on wordle, french toast, and copyright law"
subtitle: "fun mit storytime"
categories:
  - miscellany
tags:
  - mit admissions
  - words
link: https://mitadmissions.org/blogs/entry/on-wordle-french-toast-and-copyright-law/
excerpt: "Like many of you, I have been playing Wordle, a game where you try to guess a 5-letter word given information about letter locations, and I have been playing it religiously. I have at least 3 separate groups of people that I talk to Wordle about. Today’s [as of writing this] was particularly good for me, but was definitely more of an exception than a rule."

---

<div class="notice--warning"><b>Note:</b> this blog was originally written on the MIT Admissions Blog <a href="https://mitadmissions.org/blogs/entry/on-wordle-french-toast-and-copyright-law/">here</a>. Because of things like footnotes and images, it’s best you read it on that site! This page will redirect you in 10 seconds.</div> <meta http-equiv="refresh" content="10;URL=https://mitadmissions.org/blogs/entry/on-wordle-french-toast-and-copyright-law/">

Like many of you, I have been playing [Wordle](https://www.nytimes.com/games/wordle/index.html), a game where you try to guess a 5-letter word given information about letter locations, and I have been playing it *religiously*. I have at least 3 separate groups of people that I talk to Wordle about. Today’s [as of writing this] was particularly good for me, but was definitely more of an exception than a rule.

![wordle 239, 2/6](https://mitadmissions.org/wp-content/uploads/2022/02/image-20220213120600089.png)

i play on hard mode! the restriction makes it a bit more fun i think

![wordle 238, 4/6](https://mitadmissions.org/wp-content/uploads/2022/02/image-20220213120616695.png)

a more normal day for me

![wordle 231, greens squares look like w. text says ](https://mitadmissions.org/wp-content/uploads/2022/02/image-20220213120644769.png)

a particularly hard day

![wordle 234 6/6](https://mitadmissions.org/wp-content/uploads/2022/02/image-20220213120631583.png)

another sad day for hard mode. reflect this over y=x and it looks like an F? pattern was [?RA?E] and i literally guessed every possible combination before getting the word

![40 day streak, 100% completion; histogram (number of guesses - frequency): 2-1, 3-10, 4-23, 5-5, 6-1](https://mitadmissions.org/wp-content/uploads/2022/02/image-20220213120733225.png)

overall wordle stats! i have lots of 4s

Previous Next

There are also a *million* other Wordle clones that I’ve enjoyed (though don’t keep up with them like Wordle):

- [Worldle](https://worldle.teuteuf.fr/), guessing countries/territories using their shape and how far off you are geographically (or for a harder mode, without any shapes)
- [Airportle](https://airportle.scottscheapflights.com/), guessing airport codes
- [Nerdle](https://nerdlegame.com/), guessing the math equation
- [Primel](https://converged.yt/primel/), guessing the 5-digit prime
- [Dordle](https://zaratustra.itch.io/dordle), guessing two Wordles at once
- [Squardle](https://fubargames.se/squardle/), guessing a grid of Wordles

But the clone that I’ve most enjoyed is [Semantle](https://semantle.novalis.org/).⁠[01](https://mitadmissions.org/blogs/entry/on-wordle-french-toast-and-copyright-law/#annotation-1) I was introduced to it by Jenny W. (G) and *loved* it immediately. In Semantle, you are trying to figure out some English word. Like Wordle, you try to figure out the word by guessing other words; however, in Semantle, your guesses are scored by how close they are in *meaning* to the secret word. Higher scores are closer in meaning, and are on a scale of 0-100. Very roughly, a score above 30 means you’re decently close, and a score above 45 means you are almost there.

As an example from the other day, for Semantle #13 (on 2/11), some of my guesses included *mirror* (score 22.11), *ikea* (25.11), *art* (30.50), and *exhibition* (44.43). You have unlimited guesses, and that day, while it took me 182 tries, I eventually found the secret word (display).

To unpack Semantle a little bit, the “score” is determined by [word2vec](https://www.wikiwand.com/en/Word2vec), a cool way of quantifying the “distance” between two words. Word lists and data come from Google’s corpus of newspaper articles. There’s fun linear algebra and NLP and linguistics things that happen behind the scenes that I very much wish I understood.

Anyways, everyone should play Semantle. It’s great. I generally feel like getting it in under 100 guesses is “decent”, and I’m pretty happy with under 75-ish guesses. To be clear, I don’t hit these goals often: Semantle #14 took me over 300 tries D: (I’ve also witnessed people get it in absurdly few tries: currently the fastest I’ve ever seen are 12, 5, and 2 guesses : o )

Perhaps one of the reasons that I like Semantle so much is that it reminds me of a game that I’ve played a non-zero amount: French Toast or Waffles.

The game roughly goes like this: someone thinks of a word, and then everyone tries to figure it out by iteratively asking for comparisons between two objects. The game might go something like this, if the word was something like *microphone*:

> A: French Toast or Waffles?
> B: Waffles (*maybe it looks more like a microphone?*)
> A: Waffles or Toaster?
> B: Toaster (*uses electricity, probably closer*)
> A: Toaster or Tree?
> B: Toaster (*probably the electronic thing is better, even if [wood ear](https://www.wikiwand.com/en/Wood_ear) is a thing*)

… and so on, until the word is guessed.

French Toast isn’t a completely novel idea. People at my high school played
“Karl Mark or French Toast”. There’s a board game that is based on the same concept that is literally called [“French Toast”](https://www.kickstarter.com/projects/peterchayward/french-toast). In fact, the creator of Semantle, [David Turner](https://novalis.org/),⁠[02](https://mitadmissions.org/blogs/entry/on-wordle-french-toast-and-copyright-law/#annotation-2) links to [a page that describes French Toast](http://www.topped-with-meat.com/connector/frenchtoast.html) in a way very similar to above. 

This last page is on a relatively amusing site — last updated in 1999, a relic of a bygone era of the internet. Some highlights:

- The tiny text at the bottom of this page reads: “There’s no copyright, but holy leaping lizards what the HELL is that THING on my SHOULDER getitoffgetitoffgetitoff”

- It links to the [“Ectoplastmic Connector”](http://www.topped-with-meat.com/connector/ectoplasmic.html), which features poetry from the site owner at age 6:

  > my poem. by dave (age 6)
  >
  > i like tigers. they are funny.
  > when tigers eat people they aren’t.
  > but sometimes they are.
  >
  > i like anteaters because they eat
  > ants and ants eat food at picnics.
  >
  > yogi bear is a good bear, so is smokey
  > because without him there would be more fires.

- And perhaps most interestingly, the site owner’s contact email is [email]@ihtfp.net.

Wait, what? IHTFP?

IHTFP is MIT lingo to simultaneously talk about how much we love this place and how hard it can be sometimes. On one day, it might stand for **I** **H**ave **T**ruly **F**ound **P**aradise, the next, **I** **H**ate **T**his **F**ucking **P**lace. IHTFP is [a core part of the MIT Identity](https://www.mit.edu/people/mjbauer/ihtfp.html), and there are [many](https://mitadmissions.org/blogs/entry/ihtfp/), [many](https://mitadmissions.org/blogs/entry/meltdown/) [many](https://mitadmissions.org/blogs/entry/ihtfparadise-a-journey-of-depression-at-mit/) [blogs](https://mitadmissions.org/?s=IHTFP) about the IHTFP feeling.)

And if you do a tiny little bit more digging, you can find that the owner of this site is one David LaMacchia, MIT class of 1995.

*NB: I am not an expert in copyright law or law at all. All of this is from my own understanding of the law after lots of internet sleuthing. [I am unconscious of intentional error, I am nevertheless too sensible of my defects not to think it probable that I may have committed many errors.](https://youtu.be/pEqnXNsAFL8?t=178)*

Quoting from [The Tech](http://tech.mit.edu/V114/N68/lamacchia.00n.html):

> For the typical MIT student, an average semester brings an un-average stress level. From problem sets to final exams to job interviews, the pressure can be intense.
>
> But for David M. LaMacchia ’95 the pressure was unusually high – even by MIT standards.
>
> On April 7, LaMacchia was indicted on one count of conspiracy to commit wire fraud, a crime that carries a maximum sentence of five years in prison and a $250,000 fine…

In 1994, David LaMacchia ran an online site named Cynosure on an MIT-connected computer. Users could upload copyrighted software, like Excel 5.0 and Sim City 2000, to Cynosure; those copies could then be downloaded by others who knew the site’s password. This site caused losses of over a million dollars to software companies. And eventually, all of that traffic led [MIT IST](https://ist.mit.edu/) (our IT department) and the FBI to take note, and the US Department of Justice indicted LaMacchia.

The problem was that the US couldn’t actually prosecute LaMacchia under copyright law at the time, because LaMacchia was running his site for free; copyright law only applied to those who earned a profit from their copyright-breaking activities. Instead, the US charged him under the [wire fraud statute](https://www.wikiwand.com/en/Mail_and_wire_fraud).

Appealing to an earlier Supreme Court Case, [Dowling v. United States, 473 U.S. 207 (1985)](https://www.wikiwand.com/en/Dowling_v._United_States_(1985)), LaMacchia and his lawyers argued that “copyright prosecutions for alleged copyright infringement must be brought, if at all, under the Copyright Act, and cannot be brought under statutes enacted by Congress to prohibit interstate theft and fraud”. This case went to the District Court of Massachusetts. And LaMacchia *won*. The charges were dropped.

Now, to be clear, the judge did not condone LaMacchia’s behavior. Quoting from [Wikipedia](https://www.wikiwand.com/en/United_States_v._LaMacchia):

> Justice Richard Stearns, while writing the memorandum, stated that “If the indictment is to be believed, one might at best describe [LaMacchia’s] action’s as heedlessly irresponsible, and at worst as nihilistic, self-indulgent, and lacking in any fundamental sense of values.” He asserted that this ruling was a result of a shortcoming of copyright law…

After all of this was said and done, digital lawyers were well-aware of the LaMacchia Loophole, as it came to be known: current copyright law didn’t apply if the copyright violations did not yield a profit. Two years later, Congress passed the [No Electronic Theft (NET) Act](https://www.wikiwand.com/en/No_Electronic_Theft_Act), created *specifically* to close the LaMacchia Loophole.

It is that same David LaMacchia that wrote about the game French Toast on his site. A description that David Turner read, and 20 years later amidst the Wordle craze, inspired him to make Semantle, a game that I’ve been playing every day since I learned about it.

It really is such a small world.

*Large credit to Nine M. ‘23 for doing lots of this fact-finding and telling me about it. I am just here writing it up for your entertainment.*

 
