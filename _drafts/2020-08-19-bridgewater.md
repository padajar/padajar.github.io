---
title: "categories"
categories:
  - economics
  - work
  - thinking
tags:
  - bridgewater
  - finance
  - macroeconomics
  - growth
  - feedback
---

Last Friday, I finished up my internship at [Bridgewater Associates](https://www.wikiwand.com/en/Bridgewater_Associates), one of the biggest hedge funds in the world. I worked as an Investment Logic Engineer, which is a fancy way to say "think about the ways that economies work and turn that into actual code". Now that it's been a few days since my internship ended, I've had some time to reflect on a few different things from my experience there. 

## the work

One of my big worries was how much work I could reasonably do in 4 weeks. To give you as much of an overview that I can[^1], here's approximately what happened week-by-week:

* **Week 1: Markets Overview.** We spent a lot of time in small group discussions talking about the nature of markets, business cycles, and more. We ended the week with an exercise where we tried to predict what would happen with stocks, equities, and FX using just 2 pages of graphs of "what's been happening in an unknown economy at an unknown time".
* **Week 2: Market Analytics.** This week was spent diving very deeply into the math behind how bond pricing work and all of the information that can be inferred from the prices of different types of bonds. 
* **Weeks 3-4: Bond Trading Strategy.** The last 2 weeks were spent creating a fundamental strategy for trading sovereign 10Y bonds in 10 different developed countries in Python. In essence, we each had to think about a framework for understanding the movements of bond prices, and use relevant data streams to create a singular signal for how to trade each country's bonds. I ended up creating a signal with a Sharpe Ratio[^2] of 0.25, which seems to be fairly good :)
* **Other cool things we did.** The weeks were interspersed with many other things different activities, including lightning talks[^3], a talk on Egyptology, and many hours spent discussing the nature of BW's culture (more on that later).

## macroeconomics and financial economics

In the wide, wide realm of things that economists study, things relating to macro (countries, trade, productivity, currencies, bond markets, etc.) have not exactly been the thing I've most enjoyed. I tend enjoy more micro-level things: market design, development economics, labor economics, education, even healthcare and market competition. So being in this environment where you abstract away from the person and talk about bond movements, GDP growth, or unemployment without thinking of the actual people there was … different.

In week 1, we had an activity where we had a few graphs and needed to decide what was happening in the economy. My internal framework for doing these exercises was to 

## culture

One of the primary reasons that I wanted to work at Bridgewater is because of their very *different* culture. The founder of Bridgewater, Ray Dalio, has outlined "Principles" for his company in a book of the same name. One of the most interesting parts of these principles is the idea of ["radical transparency."](https://www.bridgewater.com/media-archive/culture/) The core idea behind this is that it's inherently important to be constantly giving feedback to each other, to be pushing everyone's ideas to their core concepts. The goal of this is twofold: one, to help collectively come to the correct answers about how the world works, regardless of if your initial ideas are correct or not, striving towards the ideal of an "idea meritocracy"; two, as a way of personal growth for all who are in the firm, so that future decisions and ideas they have are better than before.

This value plays out in some very interesting ways in the company. There's a system called "dots" where in each meeting, people continuously rate each other on different metrics. Had I interned in person, I would have used this tool — but virtual-ness meant that it was impossible to do so in the same way. Another way that it played out is that each week, we were explicitly told whether our work was below-the-bar, at-the-bar, or above-the-bar — and we were also told how each other did on these assessments. In-person, we wouldn't have meetings and time set aside to do this; it'd simply be something that happened as we did our work and participated in meetings. (Each "dot" is publicly available for anyone to see.)

Feedback of whether you're meeting performance goals isn't uncommon, but the idea of sharing it publicly feels much more interesting. We were told this was not done to shame people for failure, but to normalize it. I'm not sure that I entirely agree with this idea. In particular, with such a short internship, it's so hard to make any improvement from one feedback session to another. This is exacerbated by the fact that each of the 3 different "sections" of our internship emphasized relatively different skills (the first discussions and your thought processes, the second your raw analytical abilities, and the third your ability to build systems and write code) which means that what feedback you got on one area didn't necessarily translate to another. So while this feedback might be useful in the long-term for growth and a normalization of failure, it didn't quite feel like that to me this summer.

Some feedback (good and bad) I got throughout the summer included:

* I'm not all that great at starting conversations with my own thoughts. This I know from the ways that I have conversations with friends and with how I am in discussions with ESP, so it was interesting to see some other people observe it. The way it was phrased was that I should put my ideas out to "stress test" the more, which I think is a good way of thinking about it. 
* I'm relatively strong at listening and responding well to other people's ideas: building off of their ideas, thinking about whether their reasoning makes sense, etc. I like trying to get to the heart of what people are thinking, rather than just what they're saying.
* Not pushing my own thoughts further when I am struggling with something. There were definitely times where I started struggling with something and immediately defaulted to asking questions. In particular, I am quick to ask people whether my ideas had merit, and whether they made sense. This isn't a great initial instinct, and it's one I should definitely work on improving. It's definitely related to the first part of feedback I got — in the same vein of "actually create ideas myself and see how they are".
* Very clean code. This is an interesting piece of feedback for me, as someone who's never had an industry internship before :P It's definitely something that I'm trying to get better at (I have no idea how *real* coding work goes), but it's good to know that my work so far is decent :)

## private sector and finance

One of the things that I've grappled with when thinking about Bridgewater is what my personal feelings are on the finance industry. 

-idea fo working in fnanice morally

-hours

* reflections on working in private sector

[^1]: There are non-zero amounts of intellectual property concerns about what I can and can't share; this post has like 
[^2]: The Sharpe Ratio of some strategy is given by taking the rate of return that it gives, subtracting off how much money you'd make if you invested in risk-free assets (short-term treasury bonds), and all divided by the volatility of the strategy. In essence, it's a measure of the returns for some strategy adjusting for how risky the strategy is. US Equities have a Sharpe ratio of about 1, and passively holding 10Y bonds around .6, and a good actively managed strategy is around .2-.3 (or so we were told).

[^3]: I gave a modified version of my ESP scrabble presentation, with strategies for how to up your scrabble game. Didn't have time for "All 2 letter Scrabble words in 5 minutes", though :(