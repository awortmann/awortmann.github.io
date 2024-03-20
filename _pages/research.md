---
layout: page
permalink: /research/
title: Research
description: 
nav: true
---

This website presents selected research topics and related publications. The full list of publications is available from my [publications](../publications) website. Presentations of keynotes and inivited talks are available from my [presentations](../presentations) website as well.

## Automotive Software Engineering

Developing software for automotive systems has become increasingly complex. Sophisticated driver assistance, collaboration, and Car2X-communication systems as well as advanced active and passive safety-systems result in complex, software-intensive automotive systems. As these feature-driven subsystems may be arbitrarily combined by the customer, a huge amount of distinct variants needs to be managed, developed, and tested. Thus, we are carrying out numerous projects in automotive software engineering, here we concentrate on the modeling of functional and logical architectures for collaborative systems, on managing variability, and on model-driven testing. 

[Continue reading](./research/automotive).

## Digital Twins

Research and industry leverage digital twins to monitor and control (cyber-physical) systems in various domains, including automotive, avionics, biology, construction, manufacturing, medicine, and many more. They promise a tremendous potential to reduce cost and time and improve our understanding of the represented systems.
The various digital twins serve different purposes, including analysis, control, and behavior prediction, and they are used at different times relative to the represented system, e.g., before it exists to explore its design space or during its runtime to optimize its behavior. Despite a plethora of definitions, there is little consensus about what a digital twin is.

This also is reflected in many of the [available definitions](../research/digital-twin-definitions) being 
- ambiguous, by deferring to another undefined term, such as a "virtual representation", a "computable virtual abstraction" , or a "a virtual projection of the industrial facility into the cloud"
 - narrow, by focusing on specific use cases, domains, or technologies, such as a "digital model of the real network environment" or a "virtual representation based on AR technology"
- utopian, due to all-encompassing aspirations, such as an "integrated virtual model of a real-world system containing all of its physical information", a "complete digital representation".

For us, a digital twin is a software system that leverages models and data from and about an original (cyber-physical) system, to represent, predict, and prescribe its behavior for a specific purpose. 

This entails that a digital twin 
- is neither bound to specific technology or application domain
- does not need to be complete (which is impossible most of the time)
- does not need to be a model but may use models
- may change the behavior of the original system

From this, interesting questions arise. Some of which I have discussed in my talk [Ceci n’est pas un jumeau numérique](https://edt.community/events/event/ceci-nest-pas-un-jumeau-numerique/) in the [Engineering Digital Twins Community](https://edt.community/). 

[Continue reading](./research/digital-twins).

## Explainable Cyber-Physical Systems

With the increasing complexity of cyber-physical systems, their behavior and decisions become increasingly difficult to understand and comprehend for users and other stakeholders. Our vision is to build self-explainable systems that can, at run-time, answer questions about the system’s past, current, and future behavior. As hitherto no design methodology or reference framework exists for building such systems, we propose the Monitor, Analyze, Build, Explain (MAB-EX) framework for building self-explainable systems that leverage requirements and explainability models at run-time. The basic idea of MAB-EX is to first Monitor and Analyze a certain behavior of a system, then Build an explanation from explanation models and convey this EXplanation in a suitable way to a stakeholder. We also take into account that new explanations can be learned, by updating the explanation models, should new and yet unexplainable behavior be detected by the system  Digital twins seem to be a useful means to this end.

[Continue reading](./research/explainable-cps).

## Industry 4.0

Industry 4.0, the fourth industrial revolution, raises new challenges for future manufacturing which are driven by four disruptions: (1) data volumes, computational power, and connectivity; (2) the emergence of analytics and business-intelligence capabilities; (3) new forms of human-machine interaction; (4) and improvements in transferring digital instructions to the physical world, such as advanced robotics and 3D printing. One of the most promising concepts of Industry 4.0 are digital twins, integrated digital data, models, and services that foster a better understanding of the production systems of Industry 4.0 and a more sustainable handling of resources. We, therefore, conduct research on modeling languages in Industry 4.0, on the efficient management of manufacturing data, and on the systematic conception, engineering, and deployment of self-adaptive digital twins.

[Continue reading](./research/industry-40).


## Robotics

Deploying robotics applications requires expertise from multiple domains, including general software engineering and the application domain itself. Consequently, successful robotics applications are developed by teams of software experts, robotics experts, and application domain experts. The conceptual gap between application domain challenges and implementation domain solutions gives rise to accidental complexities from solving problem domain challenges with programming domain details. This complicates development and may lead to failure. Domain and robotics experts are rarely software engineering experts. Their involvement in the software engineering of reusable robotics applications requires that they become software experts or that implementation details can be abstracted. To enable the efficient engineering of robotics systems in heterogeneous teams with experts from manifold domains, we conduct research on the model-driven development of service robotics software  and robotic manufacturing.

[Continue reading](./research/robotics).


## Software Language Engineering

Identifying or engineering appropriate languages for the various activities in software and systems development is one of the most important issues in Software Engineering. Programming and modeling languages are still subject to improvement. In various domains, it is appropriate to employ Domain-Specific Languages (DSLs) to enable non-software developers to specify properties, configuring their systems, etc. in terms of established domain concepts and corresponding language elements. With increasing digitalization, we expect a growth in DSLs and increasing efforts in their efficient engineering, integration, and composition. But designing DSLs is challenging, because, on one hand, they need to be precise enough for being processed by a computer and, on the other hand, comprehensible by humans. The monolithic design of a language can already benefit from methods for language engineering in the small including design guidelines and tooling. Therefore, we conduct research on the systematic engineering [BPR+20] of (domain-specific) modeling languages and reusable modeling language libraries [BEH+20] leveraging concepts from component-based software engineering [Wor19] and software product lines for a variety of different domains [BW21].

[Continue reading](./research/sle).
