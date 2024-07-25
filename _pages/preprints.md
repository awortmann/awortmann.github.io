---
layout: page
permalink: /preprints/
title: Preprints
description: 
nav: false
---



## Modeling Languages for Automotive Digital Twins (MODELS 2024)

The demand for digital twins and suitable modeling techniques in the automotive industry is increasing rapidly. Yet, there is no com- mon understanding of digital twins in automotive, nor are there modeling techniques established to create automotive digital twins. Recent studies on digital twins focus on the analysis of the literature on digital twins for automotive or in general and, thus, neglect the industrial perspective of automotive practitioners. To mitigate this gap between scientific literature and the industrial perspective, we conducted a questionnaire survey among experts in the German automotive industry to identify i) the desired purposes for and ca- pabilities of digital twins and ii) the modeling techniques related to engineering and operating digital twins across the phases of auto- motive development. To this end, we contacted 189 members of the Software-Defined Car research project and received 96 responses. The results show that digital twins are considered most useful in the usage and support phase of automotive development, representing vehicles as-operated. Moreover, simulation models, source code, and business process models are currently considered the most important models to be integrated into a digital twin alongside the associated, established tools.

- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/preprints/Modeling_Languages_for_Automotive_Digital_Twins.pdf)


## Energy Efficiency of ROS Nodes in Different Languages: Publisher–Subscriber Case Studies (RoSE 2024)

The Robot Operating System (ROS) is a de facto standard for pro- gramming robotic systems. It currently provides well-established client libraries for two major languages: C++ and Python. Different programming languages are known for their different abstraction levels, and as a consequence, their resource usage, including energy consumption. With energy efficiency being recurrently a quality requirement, it is important to understand how programming in those two languages may affect the energy consumption of robotic systems. In this study, we analyze the impact on energy consump- tion when programming ROS nodes in those two main supported languages. We design and conduct an empirical experiment on ROS 2 nodes implemented in C++ and Python for simple and well- documented topic-based examples. We statistically assess to what extent energy consumption is affected by language choice, where nodes programmed in C++ presented a consistently better energy efficiency. A deeper analysis of the measured variables indicates that the energy efficiency difference between the two client libraries is closely related to the underlying architecture.

- Best paper award winner at the [Robotics Software Engineering (RoSE) Workshop 2024](https://rose-workshops.github.io/rose2024/) at ICSE'24
- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/preprints/Energy_Efficiency_of_ROS_Nodes_in_Different_Languages_-_Publisher-Subscriber_Case_Studies.pdf)


## A Method for Template-based Architecture Modeling and its Application to Digital Twins (ECMFA 2024)

Digital Twins (DTs) have recently emerged to support domain experts in engineering and operating Cyber-Physical Systems (CPSs). As a result, software vendors started to create DT services offering advanced functionality to support the development and operation of DTs in the industry. However, the integration of services into a DT architecture is challenging. Services typically rely on specific software and modeling languages that are often not interoperable with other services. Hence, they have to be manually integrated which requires a significant, repetitive effort. Thus, currently, it is tedious to extend the DT’s underlying architectures with new services or exchange individual service implementations. In this paper, we propose a tool-supported method for architecture modeling and its application for digital twins. The presented method provides several steps to manage the complexity of current DT architectures. First, DT reference architectures are assembled by connecting DT templates, which provide an abstraction for a set of similar DT services. Second, dedicated DT modules are used to wrap existing services which provide concrete realizations of the DT templates. Third, a product-line-based generator supports the configuration of reference architectures into concrete architectures by selecting an appropriate set of modules for the used templates which are finally used in the derived integration solution. The transition from reference architecture modeling to the product-line-based configuration is supported by a dedicated model transformation. Our evaluation shows that the proposed DT templates enable the efficient modeling of different DT reference architectures and integration of new DT services into already existing architectures.

- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/preprints/A_Method_for_Template-based_Architecture_Modeling_and_its_Application_to_Digital_Twins.pdf)


## Modeling Variability of Hierarchical Component-Based Systems (ECMFA 2024)

The engineering of hierarchically decomposed component-based systems emphasizes the separation of concerns to reduce development complexity through work distribution and component reuse. Variability further promotes reuse, as system variants may be used in different markets or contexts. However, variability must be adequately managed as it introduces another layer of complexity to system development. Consequently, modeling of hierarchical component-based systems should support composition of variable components while simultaneously facilitating their formal analysis. To address this, we formally define variable component types, propose a modeling language for specifying the variability of hierarchically composed systems, and present a method to check the component variants’ well-formedness. We extend the semantically grounded architecture description language MontiArc to realize the modeling of variable component-based systems supporting the well-formedness of variable component types and late binding of variability. The resulting realization of variable component types enables the specification of reusable and flexible components while making customization options explicit in the component interface and maintaining the black-box view of components. This can ultimately reduce complexity in developing variable components and, thus, facilitate the engineering of component-based systems.

- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/preprints/Modeling_Variability_of_Hierarchical_Component-Based_Systems.pdf)

Find my other [publications here](https://awortmann.github.io/publications/).