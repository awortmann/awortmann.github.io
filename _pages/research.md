---
layout: page
permalink: /research/
title: Research
description: 
nav: true
---

This website presents selected research topics and related publications. The full list of publications is available from my [publications](../publications) website.



## Automotive Software Engineering

Developing software for automotive systems has become increasingly complex. Sophisticated driver assistance, collaboration, and Car2X-communication systems as well as advanced active and passive safety-systems result in complex, software-intensive automotive systems. As these feature-driven subsystems may be arbitrarily combined by the customer, a huge amount of distinct variants needs to be managed, developed, and tested. Thus, we are carrying out numerous projects in automotive software engineering, here we concentrate on the modeling of functional and logical architectures for collaborative systems, on managing variability, and on model-driven testing.

#### Selected Publications

- [BBD+21] B. Böhm, W. Böhm, M. Daun, A. Hayward, S. Kranz, N. Regnat, S. Schröck, I. Stierand, A. Vogelsang, J. Vollmar, S. Voss, T. Weyer, A. Wortmann. 
[Engineering of Collaborative Embedded Systems](../downloads/paper/Engineering_of_Collaborative_Embedded_Systems.pdf). In. W. Böhm, M. Broy, C. Klein, K. Pohl, B. Rumpe, S. Schröck, editors, Model-Based Engineering of Collaborative Embedded Systems, pp. 15–48, Springer, Jan. 2021. 
- [DRW+20] I. Drave, B. Rumpe, A. Wortmann, J. Berroth, G. Hoepfner, G. Jacobs, K. Spuetz, T. Zerwas, C. Guist, J. Kohl. [Modeling Mechanical Functional Architectures in SysML](../downloads/paper/Modeling_Mechanical_Functional_Architectures_in_SysML.pdf). In. Proceedings of the 23rd ACM/IEEE International Conference on Model Driven Engineering Languages and Systems (MODELS'20), pp. 79-89, ACM, Oct. 2020. 
- [KRW20] O. Kautz, B. Rumpe, A. Wortmann. [Automated semantics-preserving parallel decomposition of finite component and connector architectures](../downloads/paper/Automated_semantics_preserving_parallel_decomposition_of_finite_component_and_connector_architectures.pdf). In. Automated Software Engineering Journal, 27, pp. 119-151, Springer, April 2020. 
- [BKRW19] A. Butting, O. Kautz, B. Rumpe, A. Wortmann. [Continuously Analyzing Finite, Message-Driven, Time-Synchronous Component &amp; Connector Systems During Architecture Evolution](../downloads/paper/Continuously_analyzing_finite__message_driven__time_synchronous_component____connector_systems_during_architecture_evolution.pdf). In. P. Pelliccione, J. Bosch, M. Marija, editors, Journal of Systems and Software (JSS), 149, pp. 437-461, Elsevier, March 2019. 
- [DGH+19] I. Drave, T. Greifenberg, S. Hillemacher, S. Kriebel, E. Kusmenko, M. Markthaler, P. Orth, K. S. Salman, J. Richenhagen, B. Rumpe, C. Schulze, M. von Wenckstern, A. Wortmann. [SMArDT Modeling for Automotive Software Testing](../downloads/paper/SMArDT_modeling_for_automotive_software_testing.pdf). In. R. Buyya, J. Bishop, K. Cooper, R. Jonas, A. Poggi, S. Srirama, editors, Software: Practice and Experience, 49(2):301-328, Wiley Online Library, Feb. 2019. 



## Digital Twins

Research and industry leverage digital twins to monitor and control (cyber-physical) systems in various domains, including automotive, avionics, biology, construction, manufacturing, medicine, and many more. They promise a tremendous potential to reduce cost and time and improve our understanding of the represented systems.
The various digital twins serve different purposes, including analysis, control, and behavior prediction, and they are used at different times relative to the represented system, e.g., before it exists to explore its design space or during its runtime to optimize its behavior. Despite a plethora of definitions, there is little consensus about what a digital twin is.

This also is reflected in many of the available definitions being 
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

Selected publications below highlight how we leverage this notion of digital twins to facilitate their engineering and operations

#### Selected Publications

- [LPT+22] D. Lehner, J. Pfeiffer, E. Tinsel, M. Strljic, S. Sint, M. Vierhauser, A. Wortmann, M. Wimmer: [Digital Twin Platforms: Requirements, Capabilities, and Future Prospects](https://ieeexplore.ieee.org/abstract/document/9640612). In IEEE Software, vol. 39, no. 2, pp. 53-61, 2022.
- [EBC+22] R. Eramo, F. Bordeleau, B. Combemale, M. van den Brand, M. Wimmer, A. Wortmann: [Conceptualizing Digital Twins](../downloads/paper/Conceptualizing_digital_twins.pdf). In IEEE Software, vol. 39, no. 2, pp. 39-46, 2022.
- [BBD+21a] T. Bolender, G. Bürvenich, M. Dalibor, B. Rumpe, and A. Wortmann. [Self-Adaptive Manufacturing with Digital Twins](..downloads/paper/Self_Adaptive_Manufacturing_with_Digital_Twins.pdf), In: 2021 International Symposium on Software Engineering for Adaptive and Self-Managing Systems (SEAMS), pages 156-166, May, 2021, IEEE Computer Society.
- [BDH+20] P. Bibow, M. Dalibor, C. Hopmann, B. Mainz, B. Rumpe, D. Schmalzing, M. Schmitz, A. Wortmann. [Model-Driven Development of a Digital Twin for Injection Molding](../downloads/paper/Model_Driven_Development_of_a_Digital_Twin_for_Injection_Molding.pdf). In. S. Dustdar, E. Yu, C. Salinesi, D. Rieu, V. Pant, editors, International Conference on Advanced Information Systems Engineering (CAiSE'20), pp. 85-100, Grenoble, Springer International Publishing, June 2020. 
- [KMR+20] J. C. Kirchhof, J. Michael, B. Rumpe, S. Varga, A. Wortmann. [Model-Driven Digital Twin Construction. Synthesizing the Integration of Cyber-Physical Systems with Their Information Systems](../downloads/paper/Model_Driven_Digital_Twin_Construction__Synthesizing_the_Integration_of_Cyber_Physical_Systems_with_Their_Information_Systems.pdf). In. Proceedings of the 23rd ACM/IEEE International Conference on Model Driven Engineering Languages and Systems (MODELS'20), pp. 90-101, ACM, Oct. 2020. 



## Industry 4.0

Industry 4.0, the fourth industrial revolution, raises new challenges for future manufacturing which are driven by four disruptions: (1) data volumes, computational power, and connectivity; (2) the emergence of analytics and business-intelligence capabilities; (3) new forms of human-machine interaction; (4) and improvements in transferring digital instructions to the physical world, such as advanced robotics and 3D printing. One of the most promising concepts of Industry 4.0 are digital twins, integrated digital data, models, and services that foster a better understanding of the production systems of Industry 4.0 and a more sustainable handling of resources. We, therefore, conduct research on modeling languages in Industry 4.0, on the efficient management of manufacturing data, and on the systematic conception, engineering, and deployment of self-adaptive digital twins.

#### Selected Publications

- [BDJ+22] P. Brauner, M. Dalibor, M. Jarke, I. Kunze, I. Koren, G. Lakemeyer, M. Liebenberg, J. Michael, J. Pennekamp, C. Quix, B. Rumpe, W. van der Aalst, K. Wehrle, A. Wortmann, and M. Ziefle. [A Computer Science Perspective on Digital Transformation in Production](../downloads/paper/A_Computer_Science_Perspective_on_Digital_Transformation_in_Production.pdf), ACM Trans. Internet Things, 3, pages 1-32, February, 2022.
- [BBD+21b] F. Becker, P. Bibow, M. Dalibor, A. Gannouni, V. Hahn, C. Hopmann, M. Jarke, I. Koren, M. Kröger, J. Lipp, J. Maibaum, J. Michael, B. Rumpe, P. Sapel, N. Schäfer, G. J. Schmitz, G. Schuh, and A. Wortmann. [A Conceptual Model for Digital Shadows in Industry and its Application](../downloads/paper/A_Conceptual_Model_For_Digital_Shadows.pdf), In: Aditya Ghose, Jennifer Horkoff, Vitor E. Silva Souza, Jeffrey Parsons, Joerg Evermann, editors, Conceptual Modeling, ER 2021, pages 271-281, October, 2021, Springer.
- [BBD+21a] T. Bolender, G. Bürvenich, M. Dalibor, B. Rumpe, and A. Wortmann. [Self-Adaptive Manufacturing with Digital Twins](..downloads/paper/Self_Adaptive_Manufacturing_with_Digital_Twins.pdf), In: 2021 International Symposium on Software Engineering for Adaptive and Self-Managing Systems (SEAMS), pages 156-166, May, 2021, IEEE Computer Society.
- [BDH+20] P. Bibow, M. Dalibor, C. Hopmann, B. Mainz, B. Rumpe, D. Schmalzing, M. Schmitz, A. Wortmann. [Model-Driven Development of a Digital Twin for Injection Molding](../downloads/paper/Model_Driven_Development_of_a_Digital_Twin_for_Injection_Molding.pdf). In. S. Dustdar, E. Yu, C. Salinesi, D. Rieu, V. Pant, editors, International Conference on Advanced Information Systems Engineering (CAiSE'20), pp. 85-100, Grenoble, Springer International Publishing, June 2020. 
- [WBCW20] A. Wortmann, O. Barais, B. Combemale, M. Wimmer. [Modeling Languages in Industry 4.0: an Extended Systematic Mapping Study](../downloads/paper/Modeling_Languages_in_Industry_4.0__an_Extended_Systematic_Mapping_Study.pdf). In. J. Gray and V. Kulkarni, editors, Software and Systems Modeling, 19(1), pp. 67-94, Springer, Jan. 2020. 



## Robotics

Deploying robotics applications requires expertise from multiple domains, including general software engineering and the application domain itself. Consequently, successful robotics applications are developed by teams of software experts, robotics experts, and application domain experts. The conceptual gap between application domain challenges and implementation domain solutions gives rise to accidental complexities from solving problem domain challenges with programming domain details. This complicates development and may lead to failure. Domain and robotics experts are rarely software engineering experts. Their involvement in the software engineering of reusable robotics applications requires that they become software experts or that implementation details can be abstracted. To enable the efficient engineering of robotics systems in heterogeneous teams with experts from manifold domains, we conduct research on the model-driven development of service robotics software  and robotic manufacturing.

#### Selected Publications

- [CCC+22] G. Casalaro, G. Cattivera, F. Ciccozzi, I. Malavolta, A. Wortmann, P. Pelliccione. [Model-driven engineering for mobile robotic systems: a systematic mapping study](https://link.springer.com/article/10.1007/s10270-021-00908-8). In Software and Systems Modeling volume 21, pages 19–49, 2022.
- [ABH+17] K. Adam, A. Butting, R. Heim, O. Kautz, J. Pfeiffer, B. Rumpe, A. Wortmann. [Modeling Robotics Tasks for Better Separation of Concerns, Platform-Independence, and Reuse](https://www.se-rwth.de/publications/Modeling-Robotics-Tasks-for-Better-Separation-of-Concerns-Platform-Independence-and-Reuse.pdf). In Aachener Informatik-Berichte, Software Engineering, Band 28. ISBN 978-3-8440-5319-7. Shaker Verlag, Dec. 2017.
- [AHRW17b] K. Adam, K. Hölldobler, B. Rumpe, A. Wortmann. [Modeling Robotics Software Architectures with Modular Model Transformations](../downloads/paper/Modeling_Robotics_Software_Architectures_with_Modular_Model_Transformations.pdf) In. Journal of Software Engineering for Robotics (JOSER), 8(1):3–16, 2017. 
- [ABH+16] K. Adam, A. Butting, R. Heim, O. Kautz, B. Rumpe, A. Wortmann. [Model-Driven Separation of Concerns for Service Robotics](../downloads/paper/Model_Driven_Separation_of_Concerns_for_Service_Robotics.pdf) In. International Workshop on Domain-Specific Modeling (DSM'16), pp. 22-27. ACM, October 2016. 
- [BRS+15] A. Butting, B. Rumpe, C. Schulze, U. Thomas, A. Wortmann. [Modeling Reusable, Platform-Independent Robot Assembly Processes](../downloads/paper/Modeling_Reusable__Platform_Independent_Robot_Assembly_Processes.pdf) In. Proceedings of the Sixth International Workshop on Domain-Specific Languages and Models for Robotic Systems (DSLRob 2015), 2015. 



## Software Language Engineering

Identifying or engineering appropriate languages for the various activities in software and systems development is one of the most important issues in Software Engineering. Programming and modeling languages are still subject to improvement. In various domains, it is appropriate to employ Domain-Specific Languages (DSLs) to enable non-software developers to specify properties, configuring their systems, etc. in terms of established domain concepts and corresponding language elements. With increasing digitalization, we expect a growth in DSLs and increasing efforts in their efficient engineering, integration, and composition. But designing DSLs is challenging, because, on one hand, they need to be precise enough for being processed by a computer and, on the other hand, comprehensible by humans. The monolithic design of a language can already benefit from methods for language engineering in the small including design guidelines and tooling. Therefore, we conduct research on the systematic engineering [BPR+20] of (domain-specific) modeling languages and reusable modeling language libraries [BEH+20] leveraging concepts from component-based software engineering [Wor19] and software product lines for a variety of different domains [BW21].

#### Selected Publications

- [BW21] A. Butting, A. Wortmann: [Language Engineering for Heterogeneous Collaborative Embedded Systems](../downloads/paper/Language_Engineering_for_Heterogeneous_Collaborative_Embedded_Systems.pdf) In: W. Böhm, M. Broy, C. Klein, K. Pohl, B. Rumpe, S. Schröck, editors, Model-Based Engineering of Collaborative Embedded Systems, pp. 239–253, Springer, Jan. 2021. 
- [BEH+20] A. Butting, R. Eikermann, K. Hölldobler, N. Jansen, B. Rumpe, A. Wortmann: [A Library of Literals, Expressions, Types, and Statements for Compositional Language Design](../downloads/paper/A_Library_of_Literals__Expressions__Types__and_Statements_for_Compositional_Language_Design.pdf) In: L. Hamann, R. Paige, A. Pierantonio, B. Rumpe, A. Vallecillo, editors, Special Issue dedicated to Martin Gogolla on his 65th Birthday, Journal of Object Technology, 19(3), pp. 3:1-16, AITO, Oct. 2020. 
- [BPR+20] A. Butting, J. Pfeiffer, B. Rumpe, A. Wortmann: [A Compositional Framework for Systematic Modeling Language Reuse](../downloads/paper/A_Compositional_Framework_for_Systematic_Modeling_Language_Reuse.pdf) In: Proceedings of the 23rd ACM/IEEE International Conference on Model Driven Engineering Languages and Systems (MODELS'20), pp. 35-46, ACM, Oct. 2020. 
- [Wor19] A. Wortmann: [Towards Component-Based Development of Textual Domain-Specific Languages](../downloads/paper/Towards_Component_Based_Development_of_Textual_Domain_Specific_Languages.pdf) In: L. Lavazza, H. Mannaert, K. Kavi, editors, International Conference on Software Engineering Advances (ICSEA 2019), Valencia, pp. 68-73, IARIA XPS Press, Nov. 2019.

