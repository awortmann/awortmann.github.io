---
layout: page
permalink: /research/sle/
title: Software Language Engineering
description: 
nav: false
---

Identifying or engineering appropriate languages for the various activities in software and systems development is one of the most important issues in Software Engineering. Programming and modeling languages are still subject to improvement. In various domains, it is appropriate to employ Domain-Specific Languages (DSLs) to enable non-software developers to specify properties, configuring their systems, etc. in terms of established domain concepts and corresponding language elements. With increasing digitalization, we expect a growth in DSLs and increasing efforts in their efficient engineering, integration, and composition. But designing DSLs is challenging, because, on one hand, they need to be precise enough for being processed by a computer and, on the other hand, comprehensible by humans. The monolithic design of a language can already benefit from methods for language engineering in the small including design guidelines and tooling. Therefore, we conduct research on the systematic engineering  of (domain-specific) modeling languages and reusable modeling language libraries  leveraging concepts from component-based software engineering and software product lines for a variety of different domains .

### Compositional Reuse of Software Languages

#### Composition Operators for Modeling Languages: A Literature Review

The paper presents a systematic literature review of modeling language composition operators, identifying 25 distinct operators from 36 publications. Most operators fall under language extension, with fewer supporting language unification or restriction. The review categorizes operators based on their support for syntax, semantics, and technological spaces (e.g., grammars, metamodels). It highlights that most operators are modular and closed under composition, but few enable black-box reuse. The findings reveal gaps in heterogeneous composition and black-box capabilities, suggesting future research directions to enhance language reuse and automation in software language engineering.

[PDF](https://awortmann.github.io/downloads/paper/Composition_operators_for_modeling_languages__A_literature_review.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label sle">Software Language Engineering</span>

#### A Compositional Framework for Systematic Modeling Language Reuse

The paper [A Compositional Framework for Systematic Modeling Language Reuse](https://awortmann.github.io/downloads/paper/A_Compositional_Framework_for_Systematic_Modeling_Language_Reuse.pdf) introduces a method for efficiently engineering domain-specific languages (DSLs) by reusing multi-dimensional language components in a black-box fashion. The framework supports systematic reuse through closed and open variability, allowing DSL syntaxes to be embedded, well-formedness rules joined, and code generators integrated. The approach includes a conceptual model, a method for systematic application, a collection of integrated modeling languages, and an extensible framework for deriving novel DSLs from language product lines. This facilitates the creation of tailored DSLs, addressing the gap between generic modeling languages and domain-specific needs, and promoting wider adoption of modeling techniques in engineering complex cyber-physical systems.

[PDF](https://awortmann.github.io/downloads/paper/A_Compositional_Framework_for_Systematic_Modeling_Language_Reuse.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label sle">Software Language Engineering</span>

#### A Library of Literals, Expressions, Types, and Statements for Compositional Language Design

The paper introduces a modular library of reusable language components—such as literals, expressions, types, and statements—for the MontiCore language workbench, aiming to streamline the development of domain-specific languages (DSLs). By leveraging these pre-built, tested components, language engineers can efficiently create new languages without reinventing common elements. The library supports modularity through MontiCore’s grammar extension mechanisms, enabling flexible reuse and customization. A case study demonstrates how these components can be combined to build a lightweight architecture description language (ADL) and extend it with advanced features, showcasing the library’s potential to enhance language engineering productivity and promote model-driven development (MDD).

[PDF](https://awortmann.github.io/downloads/paper/A_Library_of_Literals__Expressions__Types__and_Statements_for_Compositional_Language_Design.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label sle">Software Language Engineering</span>

#### A Low-Code Platform for Systematic Component-Oriented Language Composition

The paper introduces a low-code platform for systematic component-oriented language composition, leveraging the SCOLaR method to reuse language components in a black-box fashion. The platform supports importing existing language projects, creating language families, and deriving new languages through feature configuration. It features a three-tier architecture with a web-based interface, enabling language engineers to compose languages with minimal manual coding. The platform automates the derivation of language components, supports customization, and allows exporting composed languages for deployment. The demonstration showcases the platform's workflow, highlighting its potential to streamline language engineering and promote reuse.

[PDF](https://awortmann.github.io/downloads/paper/A_Low_Code_Platform_for_Systematic_Component_Oriented_Language_Composition.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label sle">Software Language Engineering</span>

### Language Engineering for Cyber-Physical Systems

#### Language Engineering for Heterogeneous Collaborative Embedded Systems

The paper introduces a method for modularizing and composing domain-specific modeling languages (DSLs) using language components, enabling systematic reuse and customization for collaborative embedded systems (CESs). By leveraging the MontiCore language workbench, the approach supports language extension, embedding, and aggregation, facilitating the creation of language product lines tailored to specific application domains. This reduces accidental complexity and promotes efficient model-driven development (MDD) by allowing domain experts to contribute using familiar terminology. The method enhances maintainability, reusability, and adaptability of DSLs, addressing challenges in engineering heterogeneous CESs.

[PDF](https://awortmann.github.io/downloads/paper/Language_Engineering_for_Heterogeneous_Collaborative_Embedded_Systems.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label cps">Cyber-Physical Systems</span> <span class="label sle">Software Language Engineering</span> 

#### Maturity Evaluation of Domain-Specific Language Ecosystems for Cyber-Physical Production Systems

The paper introduces a maturity evaluation model for domain-specific language (DSL) ecosystems in cyber-physical production systems (CPPSs), addressing the need for structured assessment of DSL maturity. The model evaluates nine components—grammar and syntax, semantics, naming conventions, style guides, libraries, patterns, analyses, tools, and documentation—using qualitative criteria. Applied to five CPPS DSLs (IEC 61499, SysML, MontiArc, IVML, PPR-DSL), the model reveals that all components are relevant, with SysML and MontiArc scoring highest in maturity. The study highlights the influence of community support and open accessibility on DSL ecosystem maturity, suggesting future research to refine and validate the model with industry practitioners.

[PDF](https://awortmann.github.io/downloads/paper/Maturity_Evaluation_of_Domain_Specific_Language_Ecosystems_for_Cyber_Physical_Production_Systems.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label cps">Cyber-Physical Systems</span> <span class="label sle">Software Language Engineering</span> 

### Software Language Evolution

### A Taxonomy of Change Types for Textual DSL Grammars

The paper presents a taxonomy of change types for textual domain-specific language (DSL) grammars, addressing the need to understand the impact of grammar changes on meta-models and models. The taxonomy categorizes change operations—such as renaming, deleting, or adding keywords, nonterminals, and imports—and analyzes their effects on both meta-model (M2) and model (M1) levels. A case study using the SysML-V2 repository demonstrates the taxonomy’s applicability for historical change impact analysis (CIA), showing how it can guide language engineers in managing DSL evolution. The taxonomy is also shown to be compatible with other language workbenches like MontiCore and Neverlang.

[PDF](https://awortmann.github.io/downloads/paper/A_Taxonomy_of_Change_Types_for_Textual_DSL_Grammars.pdf) &#124; [Bibtex](https://raw.githubusercontent.com/awortmann/awortmann.github.io/master/_bibliography/andreaswortmann.bib) &#124; Topics <span class="label sle">Software Language Engineering</span>


### Further Selected Publications

- Pfeiffer, J., Rumpe, B., Schmalzing, D., & Wortmann, A. (2023). [Composition operators for modeling languages: A literature review](../../downloads/paper/Composition_operators_for_modeling_languages__A_literature_review.pdf). Journal of Computer Languages, 76, 101226. Elsevier.

- Pfeiffer, J., & Wortmann, A. (2023). [A low-code platform for systematic component-oriented language composition](../../downloads/paper/A_Low_Code_Platform_for_Systematic_Component_Oriented_Language_Composition.pdf). In Proceedings of the 16th ACM SIGPLAN International Conference on Software Language Engineering (pp. 208-213), ACM.

- Butting, A., & Wortmann, A. (2021). [Language Engineering for Heterogeneous Collaborative Embedded Systems](../../downloads/paper/Language_Engineering_for_Heterogeneous_Collaborative_Embedded_Systems.pdf). In W. Böhm, M. Broy, C. Klein, K. Pohl, B. Rumpe, & S. Schröck (Eds.), *Model-Based Engineering of Collaborative Embedded Systems*, (pp. 239–253). Springer.

- Butting, A., Eikermann, R., Hölldobler, K., Jansen, N., Rumpe, B., & Wortmann, A. (2020). [A Library of Literals, Expressions, Types, and Statements for Compositional Language Design](../../downloads/paper/A_Library_of_Literals__Expressions__Types__and_Statements_for_Compositional_Language_Design.pdf). In L. Hamann, R. Paige, A. Pierantonio, B. Rumpe, & A. Vallecillo (Eds.), *Special Issue dedicated to Martin Gogolla on his 65th Birthday, Journal of Object Technology, 19*(3), (pp. 3:1-16). AITO.

- Butting, A., Pfeiffer, J., Rumpe, B., & Wortmann, A. (2020). [A Compositional Framework for Systematic Modeling Language Reuse](../../downloads/paper/A_Compositional_Framework_for_Systematic_Modeling_Language_Reuse.pdf). In *Proceedings of the 23rd ACM/IEEE International Conference on Model Driven Engineering Languages and Systems (MODELS'20)*, (pp. 35-46). ACM.


### Related Topics

Find other research topics from my [research](../../research/) website.