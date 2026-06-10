---
layout: page
permalink: /preprints/
title: Preprints
description:
nav: false
---

## Comparative Evaluation of AI-Based and Classical Algorithms for Risk-Aware Multi-Objective Skill Sequencing in Manufacturing (ETFA 2026)

This paper presents a comparative evaluation of classical and artificial intelligence (AI)-based scheduling algorithms for multi-criteria optimization in skill-based manufacturing systems. Using a modular, state-transition–based production planning framework, a factory is modeled in terms of machines, skills, and products, enabling the generation of feasible production plans under physical and logical constraints. Each skill execution is characterized by execution time, energy consumption, and reliability, allowing makespan, energy usage, and production risk to be jointly optimized. Within this setting, implementations of the A* graph-search algorithm, the Non-dominated Sorting Genetic Algorithm II (NSGA-II) evolutionary algorithm, and a Deep Q-Network (DQN)–based reinforcement learning approach are evaluated at the scheduling layer under identical conditions. Results from a representative case study reveal a fundamental trade-off between solution quality and computational effort: while A* guarantees optimal solutions at the cost of higher computation time, AI-based methods achieve high-quality, near-optimal solutions with significantly reduced planning time, making them well suited for complex, multi-objective scheduling problems.

## Change Impact Analysis in Virtual Commissioning: Unified Continuous Parameterization of Robotic Systems (ETFA 2026)

Virtual Commissioning (VC) links plant models and control software so that behavior can be validated before hardware is available. In robot-centric lines, kinematic, dynamic, and control parameters are tuned continuously. If these updates are not propagated traceably across Model-in-the-Loop (MiL), Software-in-the-Loop (SiL), and Hardware-in-the-Loop (HiL) environments, simulation and control can desynchronize. Classical Change Impact Analysis (CIA) and common toolchains primarily target discrete artifacts and repository events, but provide limited support for jointly governed numerical parameters. This paper addresses that gap through continuous parameterization. We propose an X-in-the-Loop (XiL)-oriented CIA workflow in which robot parameters are first-class, versioned configuration objects, graph-based checks encode admissible relations, and simulation and control remain aligned across XiL reconfigurations. Grounded in ISO~15288 and VDI/VDE~3693, the approach combines a five-step CIA process, a hierarchical three-tier runtime architecture (edge-local validation, central orchestration, and Git-backed persistence), and automated CI/CD pipelines that connect plant and controller models. Experiments on a six-axis Stäubli TX2-40 with per-axis Functional Mock-up Units (FMU) indicate stable synchronization between simulation and emulated controller under parameter adjustments, sub-millisecond full-axis constraint checks for interactive use, traceability from performance anomalies to parameter revisions, and robust operation during temporary connectivity loss via replicated state.

## Tuning ROS 2 for Energy-Efficient Navigation: Empirical Insights from Costmap 2D Configurations (ICRA 2026)

Robots are increasingly used in diverse application areas, where autonomous navigation plays a central role. As these systems become more widespread, improving their energy efficiency is critical to extending operational time and reducing environmental impact. The Robot Operating System (ROS) is a widely adopted middleware for robotics, offering a rich set of configurable packages. However, this flexibility can result in suboptimal software configurations in dynamic environments, negatively affecting both performance and energy consumption. This paper investigates the impact of ROS 2 package reconfigurations on the energy efficiency of mobile robot navigation. We conduct a controlled experiment in two warehouse-like scenarios (small and large) with varying obstacle layouts and Costmap 2D configurations (essential to the Nav2 stack). Through repeated trials, we measure energy usage, power profile, CPU load, memory consumption, and navigation performance. Results show that configurations must be carefully chosen for the specific robotic environment, and we were able to identify critical settings that lead to good and poor performance and energy consumption

- [Download the preprint](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/downloads/preprints/Tuning_ROS_2_for_Energy-Efficient_Navigation_-_Empirical_Insights_from_Costmap_2D_Configurations.pdf)

## Industrial Semantics-Aware Digital Twins: A Hybrid Graph Matching Approach for Asset Administration Shells (IDETWIN 2025)

Although the Asset Administration Shell (AAS) standard provides a structured and machine-readable representation of industrial assets, their semantic comparability remains a ajor
challenge, particularly when different vocabularies and modeling practices are used. Engineering would benefit from retrieving existing AAS models that are similar to the target in order to reuse submodels, parameters, and metadata. In practice, however, heterogeneous vocabularies and divergent modeling conventions hinder automated, content-level comparison across AAS. This paper proposes a hybrid graph matching approach to enable semantics-aware comparison of Digital Twin representations. The method combines rule-based pre-filtering using SPARQL with embedding-based similarity calculation leveraging RDF2vec to capture both structural and semantic relationships between AAS models. This contribution provides a foundation for enhanced discovery, reuse, and automated configuration in Digital Twin networks.

- [Download the preprint](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/downloads/preprints/Industrial_Semantics-Aware_Digital_Twins_-_A_Hybrid_Graph_Matching_Approach_for_Asset_Administration_Shells.pdf)

## Towards Formless Production with Skill-Based Industrial Digital Twins (IDETWIN 2025)

Digital twins enable optimization and flexibilityin cyber-physical production systems (CPPSs). However, mostimplementations still replicate static production structures ratherthan supporting dynamic adaptability. This paper introducesFormless Production as a paradigm in which production systemsemerge dynamically from modular, interoperable skills repre-sented through Skill-Based Digital Twins (SBDTs). In this ap-proach, skills encapsulate the operational knowledge of resources,enabling their flexible orchestration based on system state andcontext. The paper outlines the conceptual foundations of form-less production, illustrates how SBDTs realize this vision, andproposes a roadmap toward software-defined, self-configuringmanufacturing systems.

- [Download the preprint](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/downloads/preprints/Towards_Formless_Production_with_Skill-Based_Industrial_Digital_Twins.pdf)


Find my other [publications here](https://awortmann.github.io/publications/).
