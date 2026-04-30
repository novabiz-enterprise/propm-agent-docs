# Questions support et points flous observes dans ProPM Agent

Ce document regroupe uniquement les questions qui restent ouvertes apres relecture de la documentation mise a jour, exploration de l'application live et consultation de l'aide integree.

Environnement observe : `https://web-ca.graytree-f2cf4c37.centralus.azurecontainerapps.io/`

Perimetre parcouru : connexion, tableau de bord, navigation, projets, espace de travail, agents, connaissance, rapports & artefacts, journal IA, portefeuille, administration plateforme.

Principe de tri applique : les questions deja clairement traitees dans la documentation mise a jour n'ont pas ete reprises ici. Ce document conserve seulement les flous reels, les implicites persistants et les ecarts encore observables entre la documentation et l'application live.

## 1. Questions encore ouvertes

1. Quand plusieurs agents paraissent plausibles pour une meme demande, quel est le principe de selection attendu entre `kind`, `scope`, `status` et domaines couverts ? La documentation explique les champs, mais pas encore un ordre de priorisation suffisamment net quand plusieurs agents semblent legitimes.
2. Quel usage non-support attendez-vous du `Trace ID` de recherche pour un utilisateur fonctionnel dans l'application actuelle ? La documentation explique bien sa valeur pour le support, mais son utilite metier reste peu tangible.
3. Les notions `source label` et `source system` sont documentees, mais dans quels cas concrets l'utilisateur est-il cense s'en servir pour arbitrer une preuve ou juger sa provenance dans un usage courant ?
4. Le champ `Cost` expose `tokens` et `calls`. Est-ce seulement de la transparence technique ou est-ce cense guider des decisions de gouvernance, de cout ou d'optimisation d'usage dans le produit actuel ?
5. Les champs `Confidence` et `Source freshness` sont visibles et bien documentes, mais quel niveau de decision l'utilisateur est-il cense prendre a partir d'eux au-dela de la simple prudence documentaire ?
6. La page `Portfolio` s'adresse-t-elle avant tout a un PMO, a un responsable portefeuille, a un sponsor, ou a tout utilisateur avance ayant besoin de comparaison transverse ? La documentation explique bien l'ecran, mais le positionnement de cible reste encore un peu large.
7. Quel est le niveau attendu de maitrise analytique pour configurer `weights`, `thresholds`, `minimum severity` et `overall outlier threshold` sans tomber dans un parametrage arbitraire ?
8. Existe-t-il une logique de presets implicites ou recommandees pour differents rites de pilotage, par exemple revue hebdomadaire, comite de direction ou surveillance des risques ?
9. Quand aucun projet ne ressort dans Portfolio, quelle est la part respective d'une configuration restrictive, d'un manque de preuves ou d'une situation effectivement stable ?
10. Quand un signal apparait dans `Workspace` ou `Portfolio`, est-il calcule a l'ouverture, via une tache asynchrone, ou a partir d'un etat deja materialise ?
11. Quand une notification apparait, la source est-elle en general un run IA, un evenement d'artefact, une integration, un workflow de gouvernance, ou un melange de ces familles ?
12. Au-dela du projet memorise et de la continuite de chat, quelles autres interactions utilisateur restent strictement locales au navigateur et lesquelles ecrivent un etat partage dans la plateforme ?

## 2. Ecarts encore observes entre documentation et application live

13. Dans certains cas, la documentation montre des exemples plus riches que ce qui est visible dans l'environnement observe, notamment dans `Knowledge` et `Reports & artifacts`. Comment l'utilisateur doit-il interpreter cette difference lorsqu'il ne retrouve pas les exemples ou contenus illustratifs presentes dans la documentation ?
14. `Actions & approvals` est maintenant beaucoup mieux documente, mais dans l'application live cette surface reste celle qui demande le plus d'interpretation lorsqu'aucune option executable n'apparait.

## 3. Clarifications prioritaires a demander au support

1. Donner une regle de priorisation explicite pour choisir le bon agent quand plusieurs cartes semblent adaptees.
2. Preciser la valeur d'usage reelle de `Trace ID`, `Cost`, `Confidence` et `Source freshness` pour un utilisateur fonctionnel, pas seulement pour le support ou l'audit.
3. Preciser a quel profil cible correspond principalement `Portfolio` et quel niveau de maitrise analytique est attendu pour le parametrer correctement.
4. Expliquer comment interpreter les differences possibles entre les exemples presentes dans la documentation et ce qui est reellement visible dans l'environnement utilise.
5. Clarifier ce qui reste local navigateur au-dela des deux cas deja documentes, et ce qui modifie systematiquement l'etat partage de la plateforme.
