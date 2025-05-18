---
permalink: /iaq/
title: infrequently asked questions
---

**iaq** *noun*, pl. **iaqs** **:** <br>
  **1:** initialism for “infrequently asked questions”, a riff on *frequently asked questions*; <br>
  **2:** a page you should definitely share with anyone who will ask a fun question so that one day it will be half as cool as [bill wurtz’s](https://billwurtz.com/questions/questions.html) <br>
  **3:** an experimental section on my website!
{: .notice--info}

submit an iaq via [this form](https://docs.google.com/forms/d/e/1FAIpQLSfx3GqkDudgWlpfbI7Pa0IrRgqp4pz1BKPDypk_HMdmEJdrDQ/viewform)! no promises i’ll answer… but given what i’ve responded to so far, there is very little i wouldn’t answer :P

<div class="container" style="margin-top: -1em;">
  <a href="#" id="expand-all" class="btn btn--primary">Expand All</a> <!-- Format button to use btn btn--primary class -->
  <a href="#" id="collapse-all" class="btn btn--primary">Collapse All</a> <!-- Add button to collapse all -->
  <div class="accordion">
    {% assign iaqs = site.data.iaq | reverse %}
    {% for iaq in iaqs %}
    <div class="accordion-item">
      <button id="accordion-button-{{ forloop.index }}" aria-expanded="false"><span class="accordion-title">{{ iaq.question }}</span><span class="icon" aria-hidden="true"></span></button>
      <div class="accordion-content">
        <p>{{ iaq.answer }} </p> <p>{% if iaq.qdate %} <small><i>{{ iaq.qdate }}</i></small> {% endif %} </p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
