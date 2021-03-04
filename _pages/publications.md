---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]
nav: true
---

I am researching various areas related to model-driven systems engineering for cyber-physical systems, including the model-driven development of semantically well-defined software architectures, digital shadows and digital twins, modeling methods, software languages, and more. The resulting publications are available as PDF and Bibtex from my [Google Scholar profile page](https://scholar.google.de/citations?user=6ImtercAAAAJ&hl=de&oi=ao). Preprints of publications in press are available from my [preprints](../preprints/) website.

## Publications

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<!--
Older publications are available from my [website at the Chair for Software Engineering](https://www.se-rwth.de/staff/wortmann/).
-->