---
layout: page
permalink: /preprints/
title: Preprints
description: 
nav: false
---

## Energy Efficiency in ROS Communication: A Comparison Across Programming Languages and Workloads (Frontiers in Robotics and AI)

The Robot Operating System (ROS) is a widely used framework for robotic software development, providing robust client libraries for both C++ and Python. These languages, with their differing levels of abstraction, exhibit distinct resource usage patterns, including power and energy consumption -an increasingly critical quality metric in robotics.Methods: In this study, we evaluate the energy efficiency of ROS 2 nodes implemented in C++ and Python, focusing on the primary ROS communication paradigms: topics, services, and actions.Through a series of empirical experiments, with programming language, message interval, and number of clients as independent variables, we analyze the impact on energy efficiency across implementations of the three paradigms.Results: Our data analysis demonstrates that Python consistently demands more computational resources, leading to higher power consumption compared to C++. Furthermore, we find that message frequency is a highly influential factor, while the number of clients has a more variable and less significant effect on resource usage, despite revealing unexpected architectural behaviors of underlying programming and communication layers.
- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/Energy_Efficiency_in_ROS_Communication_-_A_Comparison_Across_Programming_Languages_and_Workloads.pdf)



## Digital Twins for Software Engineering Processes (ICSE 2025 NIER)

Digital twins promise a better understanding and use of complex systems. To this end, they represent these systems at their runtime and may interact with them to control their processes. Software engineering is a wicked challenge in which stakeholders from many domains collaborate to produce software artifacts together. In the presence of skilled software engineer shortage, our vision is to leverage DTs as means for better representing, understanding, and optimizing software engineering processes to (i) enable software experts making the best use of their time and (ii) support domain experts in producing high-quality software. This paper outlines why this would be beneficial, what such a digital twin could look like, and what is missing for realizing and deploying software engineering digital twins.
- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/preprints/Digital_Twins_for_Software_Engineering_Processes.pdf)



## Hierarchical Digital Twin Ecosystem for Industrial Manufacturing Scenarios (ETFA 2024)

Modern industrial systems, characterised by distributed and fragmented equipment, present challenges due to their inherent heterogeneity and complexity. This should not impact the stakeholders’ business logic, who are more concerned with the information itself rather than how it is collected or processed. Recently, Digital Twins — software copies of physical assets and systems — emerged as a pivotal strategy to bridge the cyber-physical world into an effective digital layer decoupling applications from the management and interaction with physical assets. Fostering this vision, we propose a structured industrial Digital Twins ecosystem exploiting twin relationships and hierarchies to build a digitalised replica of the whole manufacturing system structure enabling a simplified navigation and interaction with the physical world and the data it generates. To support the depicted visions, a fully functioning prototype has been implemented and evaluated in an experimental scenario.

- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/preprints/Hierarchical_Digital_Twin_Ecosystem_for_Industrial_Manufacturing_Scenarios.pdf)



## Generating PLC Code with Universal Large Language Models (ETFA 2024)

Control software for production systems is typically developed by domain experts, despite its high complexity. The increasingly available Large Language Models (LLMs) can assist developers with code generation and debugging. However, their is still unexplored. Therefore, this study explores the generation of Structured Text (ST) according to IEC-61131-3 by different LLMs. We selected 21 coding examples that are representative suitability for generating control software for production systems of PLC programming and developed an approach for comparing the outputs of different LLMs using metrics for testing generated code (CodeBERTScore, pass@k, generation time). The strategies for prompt optimization that were developed as part of this work can be directly used for improved ST generation. Our results show that, at the time of the study, ChatGPT-4 had the highest reliability in generating syntactically correct ST code that expresses the desired functionality.

- [Download the preprint](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/preprints/Generating_PLC_Code_with_Universal_Large_Language_Models.pdf)



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