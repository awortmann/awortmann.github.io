---
layout: page
permalink: /language-composition/
title: Composition Operators for Modeling Languages
description: 
nav: false
---

# Composition Operators for Modeling Languages: A Literature Review

Replication package for a submission to the Journal of Computer Languages.  

## Abstract

Efficiently engineering modeling languages demands their reuse through composition. 
Research in language engineering has produced many different operators to reuse and compose languages and language parts. These operate on different dimensions of languages, produce diverse results, and are distributed across various technological spaces and publications. This hampers understanding the state of language composition for researchers and practitioners. To mitigate this, we report the results of a literature review on modeling language composition operators. In this review, we identify operators, their properties, supported language dimensions, and relate them to the categories of language composition. Through this, our survey draws a new, detailed map of modeling language composition operators that can guide SLE researchers in identifying uncharted territory and practitioners in employing the most suitable composition operators.

## Search Process

To produce a corpus of relevant publications on modeling language composition, we first identified relevant search terms as follows:
Synonymous or at least closely related to these is also the term "domain-specific language" or "DSL" for short.
The basis for defining such languages and thus also a language composition mechanism are usually metamodels or grammars.
These terms, therefore, form the first part of our search clause. 
Conjugated with these terms, we consider the concept of composition in the second part of the search clause and additionally include terms used in the context of language composition such as integration, derivation, and extension. 
These led to the following search term:
```
("metamodel" OR "modelling language" OR "modeling language" OR "software language" OR "DSL" OR "domain-specific language" OR "grammar") AND ("composition" OR "integration" OR "derivation" OR "extension")
```

We limited the search to keywords, titles, and abstracts as we expect relevant publications to mention combinations to match our query in these parts. 
Moreover, we limited our search from January of 2012 to March 1st of 2022. For searching, we limited ourselves to the ACM Digital Library, IEEE Xplore, Springer, Scopus, and the Web of Science. We excluded Google Scholar for its well-known problems.
Instead, we employed snowballing to identify potentially relevant literature that we might have missed in the initial search. Also, for the databases that did not support the search query as presented, we split the query into multiple queries and merged their results manually. For the ACM Digital Library, this resulted in three search queries, one for the keywords, one for the title, and one for the abstract. For Scopus, we similarly split the search query into three parts but could combine these parts using disjunctions. For Springer, we had to search for exact phrases, i.e., perform a search for each conjunction of the search terms separately. Finally, for the Web of Science, we could reuse the search query as presented with minor modifications. Other limitations did not affect our query.

Since we had to use multiple overlapping queries for some of the libraries, the search on these libraries already resulted in duplicate findings. When manually merging the multiple queries for a single library, we removed the duplicate findings for that library. This resulted in 8.741 publications. However, across the different libraries, we again had duplicate findings. We first removed these 2.703 duplicates, resulting in **6038** publications. We then applied inclusion and exclusion criteria to keywords, titles, and abstracts to remove 5.915 publications, resulting in 123 English, potentially relevant, peer-reviewed publications. These publications we then analyzed in detail during the classification phase to understand if they were relevant to our study. Again applying our inclusion and exclusion criteria, this time to a deeper analysis of the publications, finally resulted in 26 publications. We then performed forward and backward snowballing resulting in **203** publications. Performing our analysis again, we found 10 publications presenting composition operators. This, finally, resulted in **36** that remained in the corpus of this study.

For better transparency and replicability, this website provides
-   a list of the initial [6038 publications](../../downloads/replication/language-composition/Corpus_Candidates_Initial_Search.xlsx) without duplicates,
- a list of the [203 publications](../../downloads/replication/language-composition/Snowballing_Corpus_Candidates.xlsx) found by forward and backward snowballing, and
-   a sanitized list of the [36 included publications](../../downloads/replication/language-composition/Corpus.xlsx).

We hope that this data supports better comprehension of the systematic mapping study and its results.


---
