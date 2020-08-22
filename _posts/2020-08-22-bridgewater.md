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
* **Week 2: Market Analytics.** This week was spent diving very deeply into the math behind how bond pricing works and all of the information that can be inferred from the prices of different types of bonds. 
* **Weeks 3-4: Bond Trading Strategy.** The last 2 weeks were spent creating a fundamental strategy for trading sovereign 10Y bonds in 10 different developed countries in Python. In essence, we each had to think about a framework for understanding the movements of bond prices and use relevant data streams to create a singular signal for how to trade each country's bonds. I ended up creating a signal with a Sharpe Ratio of 0.25, which seems to be fairly good :)[^2] 
* **Other cool things we did.** The weeks were interspersed with many other things different activities, including lightning talks[^3], a talk on Egyptology, and many hours spent discussing the nature of BW's culture (more on that later).

## culture

One of the primary reasons that I wanted to work at Bridgewater is because of their very *different* culture. The founder of Bridgewater, Ray Dalio, has outlined "Principles" for his company in a book of the same name. One of the most interesting parts of these principles is the idea of ["radical transparency."](https://www.bridgewater.com/media-archive/culture/) The core idea behind this is that it's inherently important to be constantly giving feedback to each other, to be pushing everyone's ideas to their core concepts. The goal of this is twofold: one, to help collectively come to the correct answers about how the world works, regardless of if your initial ideas are correct or not, striving towards the ideal of an "idea meritocracy"; two, as a way of personal growth for all who are in the firm, so that future decisions and ideas they have are better than before.

This value plays out in some very interesting ways in the company. One system used is called "dots"; in each meeting, people continuously rate each other on different metrics. Had I interned in person, I would have used this tool — but virtual-ness meant that it was impossible to do so in the same way. Another way that it played out is that each week, we were explicitly told whether our work was below-the-bar, at-the-bar, or above-the-bar — and we were also told how each other did on these assessments. In-person, we wouldn't have meetings and time set aside to do this; it'd simply be something that happened as we did our work and participated in meetings. (Each "dot" is publicly available for anyone to see.)

Feedback of whether you're meeting performance goals isn't uncommon, but the idea of sharing it publicly feels much more interesting. We were told this was not done to shame people for failure, but to normalize it. I'm not sure that I entirely agree with this idea. In particular, with such a short internship, it's so hard to make any improvement from one feedback session to another. This is exacerbated by the fact that each of the 3 different "sections" of our internship emphasized relatively different skills (the first discussions and your thought processes, the second your raw analytical abilities, and the third your ability to build systems and write code) which means that what feedback you got on one area didn't necessarily translate to another. So while this feedback might be useful in the long-term for growth and normalizing failure, it didn't quite feel like that to me this summer.

Some feedback (good and bad) I got throughout the summer included:

* I'm not all that great at starting conversations with my own thoughts. This I know from the ways that I have conversations with friends and with how I am in discussions with ESP, so it was interesting to see some other people observe it. The way it was phrased was that I should put my ideas out to "stress test" the more, which I think is a good way of thinking about it. 
* I'm relatively strong at listening and responding well to other people's ideas: building off of their ideas, thinking about whether their reasoning makes sense, etc. I like trying to get to the heart of what people are thinking, rather than just what they're saying.
* Not pushing my own thoughts further when I am struggling with something. There were times where I started struggling with something and immediately defaulted to asking questions. In particular, I am quick to ask people whether my ideas had merit and whether they made sense. This isn't a great initial instinct, and it's one I should work on improving. It's related to the first part of the feedback I mentioned — in the same vein of "actually create ideas myself and see how they are".
* Very clean code. This is an interesting piece of feedback for me, as someone who's never had an industry internship before :P It's definitely something that I'm trying to get better at (I have no idea how *real* coding work goes), but it's good to know that my work so far is decent :)

## macroeconomics and financial economics

In the wide, wide realm of things that economists study, things relating to macro (countries, trade, productivity, currencies, bond markets, etc.) have not exactly been the thing I've most enjoyed. I tend to enjoy more micro-level things: market design, development economics, labor economics, education, even healthcare and market competition. So being in this environment where you abstract away from the person and talk about bond movements, GDP growth, or unemployment without thinking of the actual people there was … different.

In week 1, we had an activity where we had a few graphs and needed to decide what was happening in the economy. My internal framework for doing these exercises was to think through how consumers, businesses, and the central bank would act — thinking through their different incentives and goals. This framework ended up taking me pretty far, and I was able to completely nail 2 of the 4 different scenarios we were given, and get most of a 3rd. I was much worse at integrating information from areas where the incentives are much less clear to me, things like currency appreciation and commodity prices. In essence, I did pretty well just by applying the way that I think about microeconomics to macroeconomics, and it somewhat worked out, which was very interesting to see.

In week 2, we delved into trying to analyze different aspects of bond pricing and all of the information that could be extracted from markets. I was much worse at this task — partly from trying to wrap my head around completely new concepts, partly from the fact that the things I study are very much grounded in people but bond prices are abstracted very far away from any individuals. 

I also received feedback in weeks 3-4 about the idea of "thinking of like an investor". While I could go through the motions and do the tasks as designed, I wasn't all that great at thinking through "If I was an investor, what are the things that are useful for me? What would I tell someone whose money I was managing?" I didn't have a lot of time to develop this skill a lot, but if I ever end up returning to the world of finance, it's definitely something that I'll need to work much more on.

## private sector and finance

This is my first summer working in the private sector; I'd explicitly told myself that I wanted to try something out that wasn't research/public sector to see what this "third option" would be like for me. This summer I've been grappling with my personal feelings on the private sector and in the finance industry. There are two distinct parts of this all that I've been trying to think about.

* Is working in finance morally good? During my sophomore year, I went to a recruitment event hosted by BW on their campus. At that time, I wasn't very convinced that I'd want to do this kind of job. But while trying to stall for time in between events, one of the full times asked us all if any of us felt apprehensive about working in finance at a moral level, and we talked about those feelings for 10 minutes. I want to be around people that ask these kinds of questions about what they do, but hadn't really found anyone in the industry who talked about it so openly.

  For many people who ask this question but who end up working in finance, the usual answer I've heard roughly follows "At a hedge fund, I'm investing money for pension plans and the like, which isn't morally bad; and the money I earn I can give back through charity." After lots of thinking, I don't think I'm quite satisfied with this answer for myself. I generally think that anyone with the skillset to end up working in finance also can contribute very meaningfully to the world in other ways. While the answer of "giving back" can be seen as giving a net positive to the world, there's the question of whether it's something that gives the *most* back.

* Can I imagine myself working this kind of job with not-infrequent absurd hours? Finance is well known for having absurd hours; investment bankers regularly work over 80 hours a week. Bridgewater is "better" at an average of 50-60 hours. And working that much in a single week sounds pretty unsustainable to me. To be fair, I probably put in that number of hours into all of my classes, clubs, and other commitments every single week. And it's not like going into academia is any better — some estimates put a Ph.D. at 50-60 hours/week (varying with your year), and if you go into academia, the hours aren't all that much better; with no set work hours, it can very easily turn into an exhausting thing. When I worked in the government last summer, many of the economists I met there told me they worked in the public sector partly because the work-life balance was so much more manageable. I'm somewhat worried that the path that I'm going down is one that will just lead to me working my whole life, and I don't know how to deal with that.

For these reasons, I don't think that I can see myself working in the private sector as a long-term career trajectory. Maybe it's something that I do for a few years, but it's not something I can imagine being my whole life. 

----------

I think that working at BW was a good experience for me — it let me try out new things that I've never got exposure to. I learned a lot of things, both directly about financial macroeconomics and indirectly about an industry and how I'd fare in an environment like that. Of course, it's only been a week since this internship ended, so I'm definitely leaving room for these thoughts to evolve. 

[^1]: There are non-zero amounts of intellectual property concerns about what I can and can't share; this post has as much as I think I can share without venturing too close to the IP line. 
[^2]: The Sharpe Ratio of some strategy is given by taking the rate of return that it gives, subtracting off how much money you'd make if you invested in risk-free assets (short-term treasury bonds), and all divided by the volatility of the strategy. In essence, it's a measure of the returns for some strategy adjusting for how risky the strategy is. US Equities have a Sharpe ratio of about 1, and passively holding 10Y bonds around .6, and a good actively managed strategy is around .2-.3 (or so we were told). My signal wasn't quite the best investment, though — it was highly correlated to the performance of the overall bond market, meaning that it wouldn't be a useful addition to an existing portfolio in terms of diversification.

[^3]: I gave a modified version of my ESP scrabble presentation, with strategies for how to up your scrabble game. Didn't have time for "All 2 letter Scrabble words in 5 minutes", though :(

