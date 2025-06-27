---
layout: page
title: Digital Twin Reading List
permalink: /research/digital-twin-reading/
description: An initial reading list on digital twins
nav: false
---

## Concepts and Terminology

#### What makes a digital twin a digital twin?

This is one of the essential questions in the field of digital twins and there are various publications and conceptual models giving different answers (see the 112 definitions of digital twins [collected here](https://awortmann.github.io/research//digital-twin-definitions/)). Yet, the definition based on data flows [KKT+18] is the only one that distinguishes digital twins from other kinds of systems qualitatively by investigating the data flows between the digital twin and the twinned system. The gap of not explaining what a digital twin consists of is filled by the 5D model of digital twins [TZL+18] according to which a digital twin comprises 
- (a connection to the) twinned system,
- data from and about that system as well as data produced by the digital twin itself, 
- models about that system and models used by the digital twin,
- added-value services, and
- connections between these.

#### What is the field doing regarding the engineering of digital twins? 

While there are many surveys on different aspects of digital twins, there are very few surveys analyzing how digital twins are created across all disciplines. 
We analyzed 356 publications to uncover their conceptual properties, engineering methods, deployment, and evaluation [DJR+22]. Key findings include the predominant use of Digital Twins in manufacturing for behavior optimization and monitoring, the importance of models and real-time data, and the need for further research on standardization, tool support, and quality assurance.

## Important Methods and Technologies

#### Gateway

- AAS
- OPC UA

#### Verification and Validation

- Fidelity, Wimmer

## Digital Twin Exemplars

- **Injection Molding** [BDH+20]: This paper presents a model-driven approach for developing a Digital Twin (DT) tailored to injection molding, utilizing domain-specific languages (DSLs) and a reference architecture to automate tasks like Design of Experiment (DoE) optimization and reactive system behavior. It demonstrates the DT's effectiveness in real-world Cyber-Physical Production Systems (CPPSs) by enabling autonomous parameter adjustments and data-driven process improvements, reducing manual effort and enhancing production efficiency.

## Bibliography

- [BDH+20] Bibow, P., Dalibor, M., Hopmann, C., Mainz, B., Rumpe, B., Schmalzing, D., ... & Wortmann, A. (2020, June). Model-driven development of a digital twin for injection molding. In International Conference on Advanced Information Systems Engineering (pp. 85-100). Cham: Springer International Publishing.
- [DJR+22] Dalibor, M., Jansen, N., Rumpe, B., Schmalzing, D., Wachtmeister, L., Wimmer, M., & Wortmann, A. (2022). [A cross-domain systematic mapping study on software engineering for digital twins](https://www.sciencedirect.com/science/article/pii/S0164121222000917). Journal of Systems and Software, 193, 111361.
- [KKT+18] Kritzinger, W., Karner, M., Traar, G., Henjes, J., & Sihn, W. (2018). [Digital Twin in manufacturing: A categorical literature review and classification](https://www.sciencedirect.com/science/article/pii/S2405896318316021). Ifac-PapersOnline, 51(11), 1016-1022.
- [TZL+18] Tao, F., Zhang, H., Liu, A., & Nee, A. Y. (2018). [Digital twin in industry: State-of-the-art](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8477101&casa_token=PQm7GatFGw0AAAAA:HFsG-w4vMZUwz3nc3qO-6Xln2JA6HC8MyHtnyG5mtVcuPgUeXLL-c3HRhgCpv5zELVBPb-pq4bA). IEEE Transactions on industrial informatics, 15(4), 2405-2415.

## Further Reading

#### Conferences 

- [Engineering Digital Twins (EDTconf)](https://conf.researchr.org/home/edtconf-2025)
- [DigiTwin](http://www.dtiac.com/)

#### Workshops

- [Conceptual Modeling for Digital Twins (CoMoDiTy)](comodity.github.io)
- [Digital Twin Architecture (TwinArch) and Digital Twin Engineering (DTE)](https://www.iese.fraunhofer.de/en/events/twinarch-dte.html)
- [Digital Twin-enabled Autonomous Systems and Agents (DAT)](https://dat-workshop.github.io/)
- [Model-Driven Engineering of Digital Twins (MoDDiT)](https://gemoc.org/events/moddit2023.html)
