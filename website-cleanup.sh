#!/usr/bin/env bash
# Aufräumen von downloads/paper/ (Nr. 6) und doppelter robotics-Seite.
# Im Wurzelverzeichnis des Repos awortmann.github.io (Branch main) ausführen.
set -euo pipefail
P=downloads/paper

# 1) Duplikate mit Zeilenumbruch bzw. doppeltem Punkt im Namen löschen
git rm -q -- "$P/Compositional_Language_Engineering_using_Generated__"$'\n'"Extensible__Static_Type_Safe_Visitors.pdf"
git rm -q -- "$P/Der_Weg_zur_Modellbasierten_Evolution_und_Adaption_"$'\n'"medizinischer_Leitlinien.pdf"
git rm -q -- "$P/Embedding_Component_Behavior_DSLs_into_the_"$'\n'"MontiArcAutomaton_ADL.pdf"
git rm -q -- "$P/Retrofitting_Controlled_Dynamic_Reconfiguration_into_the_"$'\n'"Architecture_Description_Language_MontiArcAutomaton.pdf"
git rm -q -- "$P/Model_Driven_Separation_of_Concerns_for_Service_"$'\n'"Robotics.pdf"
git rm -q -- "$P/A_Cross-Domain_Systematic_Mapping_Study_on_Software_Engineering_for_Digital_Twins..pdf"

# 2) Umbenennen auf die einheitliche Konvention (Wörter mit Unterstrich getrennt, nur ASCII)
git mv "$P/Shepherding_Model_Evolution_in_Model_Driven_Development..pdf" "$P/Shepherding_Model_Evolution_in_Model_Driven_Development.pdf"
git mv "$P/we.pdf" "$P/Web_Based_Tracing_for_Model_Driven_Applications.pdf"
git mv "$P/Compositional-Language-Engineering-using-Generated-Extensible-Static-Type-Safe-Visitors.pdf" "$P/Compositional_Language_Engineering_using_Generated_Extensible_Static_Type_Safe_Visitors.pdf"
git mv "$P/Der-Weg-zur-Modellbasierten-Evolution-und-Adaption-medizinischer-Leitlinien.pdf" "$P/Der_Weg_zur_Modellbasierten_Evolution_und_Adaption_medizinischer_Leitlinien.pdf"
git mv "$P/Embedding-Component-Behavior-DSLs-into-the-MontiArcAutomaton-ADL.pdf" "$P/Embedding_Component_Behavior_DSLs_into_the_MontiArcAutomaton_ADL.pdf"
git mv "$P/Retrofitting-Controlled-Dynamic-Reconfiguration-into-the-Architecture-Description-Language-MontiArcAutomaton.pdf" "$P/Retrofitting_Controlled_Dynamic_Reconfiguration_into_the_Architecture_Description_Language_MontiArcAutomaton.pdf"
git mv "$P/Fifth-Workshop-on-the-Globalization-of-Modeling-Languages.pdf" "$P/Fifth_Workshop_on_the_Globalization_of_Modeling_Languages.pdf"
git mv "$P/First-Workshop-on-Model-Driven-Knowledge-Engineering-for-Improved-Software-Modularity-in-Robotics-and-Automation-(MDKE).pdf" "$P/First_Workshop_on_Model_Driven_Knowledge_Engineering_for_Improved_Software_Modularity_in_Robotics_and_Automation_MDKE.pdf"
git mv "$P/Integration-Challenges-for-Digital-Twin-Systems-of-Systems.pdf" "$P/Integration_Challenges_for_Digital_Twin_Systems_of_Systems.pdf"
git mv "$P/Navigating-the-Low-Code-Landscape-A-Comparison-of-Development-Platforms.pdf" "$P/Navigating_the_Low_Code_Landscape_A_Comparison_of_Development_Platforms.pdf"
git mv "$P/Model-based_DevOps_für_digitale_Zwillinge.pdf" "$P/Model_based_DevOps_fuer_digitale_Zwillinge.pdf"

# 3) Doppelte Seite für /research/robotics/ entfernen (Inhalt landet per Patch in _pages/research/robotics.md)
git rm -q _pages/robotics.md

# 4) Textänderungen (Links, Meta-Daten, Bibliographie) einspielen
git apply website-optimierung.patch
echo "Fertig. Prüfen mit: git status"
