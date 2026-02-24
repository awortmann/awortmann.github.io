---
layout: page
permalink: /research/industry-40/
title: Industry 4.0 
description: 
nav: false
---

Industry 4.0, the fourth industrial revolution, raises new challenges for future manufacturing which are driven by four disruptions: (1) data volumes, computational power, and connectivity; (2) the emergence of analytics and business-intelligence capabilities; (3) new forms of human-machine interaction; (4) and improvements in transferring digital instructions to the physical world, such as advanced robotics and 3D printing. One of the most promising concepts of Industry 4.0 are digital twins, integrated digital data, models, and services that foster a better understanding of the production systems of Industry 4.0 and a more sustainable handling of resources. We, therefore, conduct research on modeling languages in Industry 4.0, on the efficient management of manufacturing data, and on the systematic conception, engineering, and deployment of self-adaptive digital twins.

### Industrial Digital Twins

#### A Method for Model-Driven Engineering of Digital Twins in Manufacturing

The paper [A Method for Model-Driven Engineering of Digital Twins in Manufacturing](https://awortmann.github.io/downloads/paper/A_Method_for_Model-Driven_Engineering_of_Digital_Twins_in_Manufacturing.pdf) introduces a systematic approach for creating digital twins (DTs) in manufacturing, addressing the lack of structured methodologies in the field. The method leverages model-driven engineering (MDE) techniques, including MontiArc and MontiGem, to generate executable DTs from formalized specifications. It involves identifying requirements, analyzing asset interfaces and models, deriving service specifications, and mapping needs with available information. The approach was validated through an industrial case study involving a FiveX milling machine, demonstrating its applicability and adaptability. The method supports automation, flexibility, and compliance with ISO 23247 standards, while highlighting challenges like data modeling and real-time requirements.

[PDF](https://awortmann.github.io/downloads/paper/A_Method_for_Model-Driven_Engineering_of_Digital_Twins_in_Manufacturing.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label dt">Digital Twin</span> <span class="label mde">Model-Driven</span>

#### Digital Twins for Machine Tools: A Systematic Mapping Study

The paper [Digital Twins for Machine Tools: A Systematic Mapping Study](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/downloads/preprints/Digital_Twins_for_Machine_Tools_-_A_Systematic_Mapping_Study.pdf) examines the use, development, and communication of digital twins (DTs) for machine tools. The study reveals that DTs primarily represent individual machine tools or technical systems, focusing on milling processes to enhance quality. DTs typically consist of models (e.g., CAD, simulation) and software (e.g., MATLAB, Unity) for behavior analysis and optimization. Most DTs are used in the operational phase, with limited application in earlier lifecycle phases like virtual commissioning. The study highlights a lack of systematic reuse and composition methods for DTs, suggesting future research should focus on real-time capabilities, horizontal connectivity, and modularity to improve DT integration and efficiency in manufacturing.

[PDF](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/downloads/preprints/Digital_Twins_for_Machine_Tools_-_A_Systematic_Mapping_Study.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label cps">Cyber-Physical Systems</span> <span class="label dt">Digital Twin</span>  

#### Explaining Cyber-Physical System Behavior with Digital Twins

The paper explores integrating self-explainability techniques into digital twins to enhance transparency and trust in their decision-making processes. By combining model-driven engineering with the MAB-EX framework (Monitor, Analyze, Build, Explain), the authors propose deriving explanation models from system description, process, and reasoning models. These models are tailored to different explainee types (e.g., end-users, engineers) and merged to avoid redundancy. The approach supports real-time explanation generation, fostering better human-machine cooperation and system maintainability. Challenges include handling diverse model types, tailoring explanations, and managing computational complexity during runtime.

[PDF](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/downloads/paper/Explaining_Cyber-Physical_System_Behavior_with_Digital_Twins.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label cps">Cyber-Physical Systems</span> <span class="label dt">Digital Twin</span> 

### Sustainability 

#### Framework for Holistic Online Optimization of Milling Machine Conditions to Enhance Machine Efficiency and Sustainability

The paper [Framework for Holistic Online Optimization of Milling Machine Conditions to Enhance Machine Efficiency and Sustainability](https://awortmann.github.io/downloads/paper/Framework_for_Holistic_Online_Optimization_of_Milling_Machine_Conditions_to_Enhance_Machine_Efficiency_and_Sustainability.pdf) introduces a novel framework for optimizing milling processes in industrial production using advanced data analysis and machine learning. The framework analyzes real-time measurement data from milling machines, extracts key indicators, and uses a fuzzy control system to recommend adjustments for reducing energy consumption, tool wear, and improving surface quality. Validation with steel and aluminum parts demonstrated the framework's ability to generate actionable recommendations, though more precise models are needed for real-world application. The modular design allows adaptability to other machines like lathes or 3D printers, highlighting its potential for sustainable and efficient manufacturing.

[PDF](https://awortmann.github.io/downloads/paper/Framework_for_Holistic_Online_Optimization_of_Milling_Machine_Conditions_to_Enhance_Machine_Efficiency_and_Sustainability.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label cps">Cyber-Physical Systems</span> 

### Industrial Data Modeling (OPC UA, Asset Administration Shell)

#### AI-Powered Semantic Matching and Data Harmonization for Industrial Applications with OPC UA & Asset Administration Shells

The paper [AI-Powered Semantic Matching and Data Harmonization for Industrial Applications with OPC UA & Asset Administration Shells](https://www.researchgate.net/publication/394119437_AI-Powered_Semantic_Matching_and_Data_Harmonization_for_Industrial_Applications_with_OPC_UA_Asset_Administration_Shells) introduces a framework that uses AI, including embeddings and large language models, to automate the semantic matching of data from OPC UA servers and PDF manuals into IDTA-compliant Asset Administration Shells. The framework aims to address the challenge of integrating heterogeneous data sources to meet regulatory requirements, such as the upcoming Battery Passport. Evaluation results demonstrate the effectiveness of the approach, with the RAG system achieving high precision and recall, outperforming raw node matching methods. The framework shows promise for improving data interoperability and compliance in industrial contexts.

[PDF](https://www.researchgate.net/publication/394119437_AI-Powered_Semantic_Matching_and_Data_Harmonization_for_Industrial_Applications_with_OPC_UA_Asset_Administration_Shells) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label ki">AI</span> <span class="label cps">Cyber-Physical Systems</span>

### Automated Generation of PLC Code

#### Generating PLC Code with Universal Large Language Models

The paper [Generating PLC Code with Universal Large Language Models](https://awortmann.github.io/downloads/paper/Generating_PLC_Code_with_Universal_Large_Language_Models.pdf) explores the use of large language models (LLMs) for generating Structured Text (ST) code according to the IEC-61131-3 standard. The study compares five LLMs—ChatGPT-3.5, ChatGPT-4, Bard, Code Llama, Platypus2, and StableCode—using metrics like CodeBERTScore, pass@k, and generation time. Results show that ChatGPT-4 outperforms others in generating syntactically correct and functional ST code. Prompt optimization significantly improved performance, especially for Bard. However, local LLMs struggled with syntax and functionality, highlighting the need for further development and hardware improvements for effective PLC code generation.

[PDF](https://awortmann.github.io/downloads/paper/Generating_PLC_Code_with_Universal_Large_Language_Models.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label ki">AI</span> <span class="label plc">PLC</span>

### Further Selected Publications

- Evcenko, D., Heinemann, T., Kett, H., Lechler, A., Riedel, O., & Wortmann, A. (2024). [Identifying machine times with OPC UA for Equipment as a Service (EaaS)–possibilities and limitations](../../downloads/paper/Identifying_machine_times_with_OPC_UA_for_Equipment_as_a_Service_EaaS_-_possibilities_and_limitations.pdf). Procedia CIRP, 130, 578-583.

- Tran, K., Zhang, J., Pfeiffer, J., Wortmann, A., & Wiesmayr, B. (2024). [Generating PLC Code with Universal Large Language Models](../../downloads/paper/Generating_PLC_Code_with_Universal_Large_Language_Models.pdf). In 2024 IEEE 29th International Conference on Emerging Technologies and Factory Automation (ETFA) (pp. 1-8). IEEE.

- Bolender, T., Bürvenich, G., Dalibor, M., Rumpe, B., & Wortmann, A. (2021). [Self-Adaptive Manufacturing with Digital Twins](../../downloads/paper/Self_Adaptive_Manufacturing_with_Digital_Twins.pdf). In *Proceedings of the 2021 International Symposium on Software Engineering for Adaptive and Self-Managing Systems (SEAMS)*, (pp. 156-166). IEEE Computer Society.

- Bibow, P., Dalibor, M., Hopmann, C., Mainz, B., Rumpe, B., Schmalzing, D., Schmitz, M., & Wortmann, A. (2020). [Model-Driven Development of a Digital Twin for Injection Molding](../../downloads/paper/Model_Driven_Development_of_a_Digital_Twin_for_Injection_Molding.pdf). In S. Dustdar, E. Yu, C. Salinesi, D. Rieu, & V. Pant (Eds.), *International Conference on Advanced Information Systems Engineering (CAiSE'20)*, (pp. 85-100). Springer International Publishing.

- Wortmann, A., Barais, O., Combemale, B., & Wimmer, M. (2020). [Modeling Languages in Industry 4.0: an Extended Systematic Mapping Study](../../downloads/paper/Modeling_Languages_in_Industry_4.0__an_Extended_Systematic_Mapping_Study.pdf). *Software and Systems Modeling, 19*(1), (pp. 67-94). Springer.

### Related Topics

Find other research topics from my [research](../../research/) website.