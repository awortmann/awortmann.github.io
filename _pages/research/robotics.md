---
layout: page
permalink: /research/robotics/
title: Robotics Software Engineering
description:  
nav: false
---

Deploying robotics applications requires expertise from multiple domains, including general software engineering and the application domain itself. Consequently, successful robotics applications are developed by teams of software experts, robotics experts, and application domain experts. The conceptual gap between application domain challenges and implementation domain solutions gives rise to accidental complexities from solving problem domain challenges with programming domain details. This complicates development and may lead to failure. Domain and robotics experts are rarely software engineering experts. Their involvement in the software engineering of reusable robotics applications requires that they become software experts or that implementation details can be abstracted. To enable the efficient engineering of robotics systems in heterogeneous teams with experts from manifold domains, we conduct research on the model-driven development of service robotics software and robotic manufacturing.

### Model-Driven Industrial Robotics

The paper [Model-Driven Engineering for Mobile Robotic Systems: A Systematic Mapping Study](https://github.com/awortmann/awortmann.github.io/raw/master/downloads/paper/Model_driven_engineering_for_mobile_robotic_systems__a_systematic_mapping_study) systematically examines the state of Model-Driven Engineering (MDE) in mobile robotics. It investigates publication trends, supported robot types, MDE methods, validation approaches, and tool support through a review of 97 studies. Key findings include a focus on single terrestrial robots, prevalent use of domain-specific languages (DSLs), and a strong emphasis on code generation and model transformations. However, rigorous validation and tool reuse remain limited. The study highlights the need for better validation practices and industrial adoption to enhance MDE's impact in mobile robotics.

Topics <span class="label mde">Model-Driven</span> 

The paper [Survey on Robotic Systems Integration](https://awortmann.github.io/downloads/paper/Survey_on_Robotic_Systems_Integration.pdf) investigates how robotic software integration is currently performed and identifies common challenges and potential solutions. Through a survey of 118 researchers and practitioners, it explores the applicability of traditional software development methodologies (e.g., Waterfall, V-Model, Agile) to robotic integration. Key findings reveal that dynamic environment adaptation, safety certification, and system validation are the top challenges. While most respondents follow phases like implementation, design, and testing, there is a strong demand for tools—especially for validation, verification, and testing—and a preference for model-based approaches. The study highlights the need for standardized processes and tools to streamline robotic software integration.

Topics <span class="label mde">Model-Driven</span> 

The paper [Monte Carlo Tree Search and GR(1) Synthesis for Robot Tasks Planning in Automotive Production Lines](https://awortmann.github.io/downloads/paper/Monte_Carlo_Tree_Search_and_GR_1__Synthesis_for_Robot_Tasks_Planning_in_Automotive_Production_Lines.pdf) presents a method for optimizing multi-robot task planning in automotive production cells using GR(1) synthesis and Monte Carlo Tree Search (MCTS). The approach involves synthesizing a correct-by-construction controller from a GR(1) specification, which encodes task constraints and collision avoidance. MCTS is then used at runtime to optimize task execution sequences, considering movement times and interruption probabilities. Experiments with a spot welding cell show that MCTS reduces cycle times by up to 16% and improves standstill times by up to 5%, demonstrating its effectiveness in handling interruptions and optimizing task allocation.

Topics <span class="label auto">Automotive</span> <span class="label mde">Model-Driven</span> 

The paper [MDE and Learning for flexible Planning and optimized Execution of Multi-Robot Choreographies](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/downloads/paper/MDE_and_Learning_for_flexible_Planning_and_optimized_Execution_of_Multi-Robot_Choreographies.pdf) addresses the challenge of designing and optimizing multi-robot systems in dynamic, safety-critical environments like automotive manufacturing. It proposes a model-driven engineering (MDE) approach that integrates formal requirement specification, reactive synthesis, and reinforcement learning (RL) to handle uncertainties and optimize cycle time. The methodology involves formalizing requirements, computing collision-free robot trajectories, generating a correct-by-construction controller using GR(1) synthesis, and optimizing execution with RL. Findings demonstrate that Q-learning-based optimization significantly improves cycle time efficiency compared to traditional methods, enabling adaptive and resilient robot choreographies.

Topics <span class="label auto">Automotive</span> <span class="label mde">Model-Driven</span> 

The paper [Industry Best Practices in Robotics Software Engineering](https://arxiv.org/pdf/2212.04877) summarizes insights from a panel discussion at the 3rd International Workshop on Robotics Software Engineering, featuring experts from JPL, Bosch, Waymo, and XITASO. Key findings include:

- JPL emphasizes modularity, reusability, and testability in their F-Prime framework for flight software.
- Bosch highlights the importance of model-driven engineering (MDE) for behavior modeling and lightweight techniques integrated into code.
- Waymo focuses on simulation and real-world testing for autonomous driving systems, leveraging closed-course, public road, and large-scale log-based simulations.
- XITASO advocates for automated testing and human judgment in acceptance and safety testing, emphasizing DevOps practices for efficiency.

### Robotics Software Sustainability

The paper [Energy efficiency in ROS communication](https://awortmann.github.io/downloads/paper/Energy_efficiency_in_ROS_communication.pdf) examines how programming language (C++ vs. Python) and communication patterns (topics, services, actions) affect energy efficiency in ROS 2. It asks how energy use varies across communication types, languages, and workloads. Through 90 controlled experiments measuring CPU, memory, and energy, the authors found Python consistently consumes more energy and resources than C++, while message frequency strongly influences energy use and the number of clients has minor impact. The study concludes that programming language and message frequency are key factors for optimizing ROS-based systems toward greater energy efficiency.

Topics <span class="label sustainability">Sustianability</span>


### Robotics Software Engineering Education

The paper [Educating Future Software Engineers for Industrial Robotics](https://awortmann.github.io/downloads/paper/Educating_Future_Software_Engineers_for_Industrial_Robotics.pdf) addresses the evolving need for specialized education in robotics software engineering, driven by advancements like Industry 4.0, AI, IoT, and digital twins. It introduces seven key educational goals: robotics software, AI, human-robot interaction, IoT, digital twins, model-driven software engineering, and risk analysis. The research presents two connected model factories equipped with sensors, actuators, and controllers, enabling hands-on learning in a realistic industrial environment. Findings highlight the importance of interdisciplinary collaboration and practical experience, demonstrating how these factories foster innovation and prepare students for the digital economy by bridging theory and real-world application.

Topics <span class="label ai">AI</span> <span class="label dt">Digital Twin</span> 

### Further Selected Publications

- Adam, K., Butting, A., Heim, R., Kautz, O., Pfeiffer, J., Rumpe, B., & Wortmann, A. (2017). [Modeling Robotics Tasks for Better Separation of Concerns, Platform-Independence, and Reuse](https://www.se-rwth.de/publications/Modeling-Robotics-Tasks-for-Better-Separation-of-Concerns-Platform-Independence-and-Reuse.pdf). *Aachener Informatik-Berichte, Software Engineering, Band 28*. Shaker Verlag.

- Adam, K., Hölldobler, K., Rumpe, B., & Wortmann, A. (2017). [Modeling Robotics Software Architectures with Modular Model Transformations](../../downloads/paper/Modeling_Robotics_Software_Architectures_with_Modular_Model_Transformations.pdf). *Journal of Software Engineering for Robotics (JOSER), 8*(1), (pp. 3–16).

- Adam, K., Butting, A., Heim, R., Kautz, O., Rumpe, B., & Wortmann, A. (2016). [Model-Driven Separation of Concerns for Service Robotics](../../downloads/paper/Model_Driven_Separation_of_Concerns_for_Service_Robotics.pdf). In *Proceedings of the International Workshop on Domain-Specific Modeling (DSM'16)*, (pp. 22-27). ACM.

- Butting, A., Rumpe, B., Schulze, C., Thomas, U., & Wortmann, A. (2015). [Modeling Reusable, Platform-Independent Robot Assembly Processes](../../downloads/paper/Modeling_Reusable__Platform_Independent_Robot_Assembly_Processes.pdf). In *Proceedings of the Sixth International Workshop on Domain-Specific Languages and Models for Robotic Systems (DSLRob 2015)*.


### Related Events

- [International Workshop on Robotics Software Engineering (RoSE)](https://rose-workshops.github.io/) Workshop Series
- [The 6th International Workshop on Model-driven Robot Software Engineering (MORSE'19)](http://st.inf.tu-dresden.de/MORSE19/)
- [5th International Workshop on Model-driven Robot Software Engineering](http://st.inf.tu-dresden.de/MORSE18/)
- [4th International Workshop on Model-driven Robot Software Engineering](http://st.inf.tu-dresden.de/MORSE17/)

### Related Topics

Find other research topics from my [research](../../research/) website.
