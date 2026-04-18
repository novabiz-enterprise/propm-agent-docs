---
title: Start
slug: /demarrage
description: Voraussetzungen, Zugriff, Authentifizierung und erste Konfiguration.
---

[Startseite](./index.md) · [Azure Marketplace‑Bereitstellung](./deploiement-azure-marketplace.md) · [Benutzeroberfläche und Navigation](./interface-et-navigation.md)

![Projektverzeichnis](/img/screenshots/localized/de/07-projects-directory.png)

## Ziel

Diese Seite erklärt, wie Sie den Zugriff auf ProPM Agent vorbereiten, die erste Anmeldung erfolgreich durchführen, das richtige Projekt auswählen und die unverzichtbaren technischen Punkte unmittelbar nach einer Bereitstellung prüfen.

## Wer kann diese Seite nutzen

- **Geschäftsanwender**, der eine URL erhält und sich ohne umfangreiche Unterstützung anmelden muss;
- **Projektinhaber**, der den ersten Projektkontext erstellen oder auswählen muss;
- **Technischer Administrator**, der die Authentifizierung, die Laufzeit und den ersten Zugriff validieren muss.

## Wenn Sie noch keine Anwendungs‑URL haben

Wenn Ihre Instanz noch nicht bereitgestellt wurde, beginnen Sie mit [Azure Marketplace‑Bereitstellung](./deploiement-azure-marketplace.md). Dieser Schritt ermöglicht es, die Web‑URL, die API und die erforderlichen Laufzeitparameter vor jeder Benutzeranmeldung zu erhalten.

## Vor dem Start

### Voraussetzungen für den Benutzer

Für die normale Nutzung benötigen Sie:

- die **URL der Bereitstellung** von ProPM Agent;
- ein **Microsoft Entra ID‑Konto**, das im betreffenden Mandanten autorisiert ist;
- Zugriff auf mindestens ein Projekt oder das Recht, ein Projekt zu erstellen;
- einen modernen Browser, der aktuelle Web‑Anwendungen unterstützt;
- wenn Sie Sprache nutzen, einen Browser, der die Spracherkennungs‑APIs unterstützt.

### Voraussetzungen für den technischen Administrator

Die folgenden Elemente sind explizit in der beobachteten Konfiguration vorgesehen:

| Element | Rolle |
| --- | --- |
| `clientId` | Identifiziert die Entra‑Anwendung, die im Web verwendet wird |
| `authority` | Legt die Microsoft Entra‑Authentifizierungs‑Authority fest |
| `scopes` | Definiert die bei der Authentifizierung angeforderten Berechtigungen |
| `redirectUri` und `postLogoutRedirectUri` | Steuern die Rückkehr nach Anmeldung und Abmeldung |
| `allowedTenantId` | Beschränkt, falls konfiguriert, den autorisierten Mandanten |
| `/runtime-config.json` | Dynamisches Überschreiben von URLs und Authentifizierungsparametern zur Laufzeit |
| URL API und URL WebSocket | Ermöglichen der Web‑Oberfläche, die Plattform‑Services und Echtzeit zu erreichen |
| Abonnement / Sitzplätze | Bedingt den Zugriff in Bereitstellungen, die eine Lizenz pro Benutzer erzwingen |

## Erstanmelde‑Pfad

1. Öffnen Sie die veröffentlichte URL Ihrer Bereitstellung;
2. Lassen Sie die Anwendung Sie zur Microsoft‑Anmeldeseite umleiten;
3. Melden Sie sich mit dem autorisierten Konto an;
4. Kehren Sie zur Anwendung zurück, in der Regel zum **Dashboard**;
5. Prüfen Sie die Interface‑Sprache, das aktuelle Projekt und eventuelle sichtbare Nachrichten in der oberen Leiste;
6. Öffnen Sie **Projekte**, um Ihr erstes Projekt auszuwählen oder zu erstellen.

## Zu kennende Zugriffs‑Zustände

In der Oberfläche gibt es zwei Zustände:

- **Nur‑Lesen**: Sie können eine Oberfläche ansehen, aber nicht ihre Einstellungen ändern;
- **Zugriff verweigert**: Die Route oder Aktion ist für Ihr Konto nicht verfügbar.

Diese Unterscheidung ist wichtig für Verwaltungsbereiche: Manchmal kann eine technische Seite nur zur Ansicht geöffnet werden, ohne Änderungen speichern zu können.

## Erwartetes Ergebnis nach der ersten Anmeldung

Wenn alles korrekt konfiguriert ist, sollten Sie:

- das **Dashboard** in guten Bedingungen erreichen;
- **Projekte** öffnen;
- ein Projekt auswählen oder erstellen;
- anschließend auf **Arbeitsbereich**, **Wissen**, **Agenten**, **Berichte & Artefakte** und **KI‑Journal** je nach Ihren Rechten zugreifen.

## Erstes Projekt erstellen

Das in der Anwendung beobachtete Formular bietet die folgenden Felder:

- **Projekt‑ID**;
- **Name**;
- **Beschreibung**;
- **Standard‑Daten­sprache**;
- **Zusätzliche Daten­sprachen**.

![Projekt-Erstellungsfenster](/img/screenshots/localized/de/07-project-create-modal.png)

### Wichtiger Punkt

Die **Daten­sprache des Projekts** ist nicht dasselbe wie die **Interface‑Sprache**.

Die Daten­sprache beeinflusst insbesondere:

- die standardmäßig vorgeschlagenen Dokumentkategorien;
- bestimmte Agenten‑System‑Prompts;
- die projektspezifischen Anfangswerte.

## Wenn kein Projekt angezeigt wird

Mehrere Bildschirme zeigen einen expliziten leeren Zustand, wenn kein Projekt ausgewählt ist. Das ist normal.

Um fortzufahren:

1. Verwenden Sie den **Projekt‑Auswahl‑Filter** in der oberen Leiste;
2. Öffnen Sie **Projekte**, um ein zugängliches Projekt auszuwählen;
3. Wenn Sie Erstellungsrechte haben, erstellen Sie ein Projekt;
4. Wenn die Liste weiterhin leer bleibt, prüfen Sie mit Ihrem Administrator, ob Ihr Konto dem richtigen Projekt hinzugefügt wurde.

## Checkliste nach der Bereitstellung für den technischen Administrator

Nach einer neuen Bereitstellung prüfen Sie mindestens:

1. die tatsächlich veröffentlichte **Web‑URL**;
2. die Verfügbarkeit der Datei **`/runtime-config.json`**;
3. die Konsistenz zwischen der veröffentlichten URL und den in Entra konfigurierten **Redirect‑URIs**;
4. das Vorhandensein eines gültigen **client ID**;
5. den korrekten Wert von **authority** und, falls verwendet, von **allowedTenantId**;
6. die erwarteten **scopes** für Frontend und API;
7. die **API‑URL** und, falls exponiert, die **WebSocket‑URL**;
8. den Verbrauch oder die Verfügbarkeit von **Sitzplätzen**, falls der Plan dies verlangt;
9. einen ersten Verbindungstest mit einem Standard‑Benutzerkonto und einem Administratorkonto.

## Häufige Prüfungen bei der ersten Anmeldung

### Der Microsoft‑Account authentifiziert sich, aber der Zugriff funktioniert noch nicht wie erwartet

Prüfen Sie in dieser Reihenfolge:

1. den **Mandanten**, der während der Anmeldung verwendet wird;
2. ob das Konto im Mandanten autorisiert ist;
3. die Verfügbarkeit eines **Sitzplatzes**, falls der Plan eine Lizenz pro Benutzer verlangt;
4. die Existenz mindestens eines zugänglichen Projekts für dieses Konto.

### Mandanten‑ oder externes / Gast‑Konto

Wenn Microsoft angibt, dass Ihr Konto im Ziel‑Mandanten nicht existiert, bedeutet dies in der Regel, dass es als **externer / Gast‑Benutzer** in den Mandanten eingeladen werden muss, der die Anwendung hostet, und dann auf die Unternehmens‑Anwendung oder über eine Gruppe autorisiert werden muss.

### `redirect URI mismatch`

Wenn die Anmeldung einen Weiterleitungsfehler zurückgibt, vergleichen Sie die tatsächlich veröffentlichte URL mit den **Redirect‑URIs** der Entra‑Anwendungs‑Registrierung. Jede veröffentlichte Umgebung muss exakt gelistet sein, ohne Tippfehler.

### `unauthorized_client` oder Client im falschen Mandanten

Dieses Symptom weist in der Regel darauf hin, dass die Anwendungs‑Registrierung nicht im richtigen Mandanten liegt oder die Bereitstellung eine inkompatible Authority für eine **single‑tenant**‑Anwendung nutzt.

### Erfolgreicher Zugriff, aber Admin‑Ansicht im Nur‑Lesen‑Modus

Das bedeutet häufig, dass das Konto authentifiziert ist, aber nicht als modifizierbarer Plattform‑Administrator aufgelöst wurde. Prüfen Sie die Admin‑Gruppen, den Token‑Mandanten und die von Ihrer Umgebung verwendete Admin‑Auflösungsmethode.

### Anmeldung OK, Dashboard geladen, aber zusätzliche Prüfung sinnvoll

Dieses Szenario weist oft darauf hin, dass die Authentifizierung erfolgreich war, aber eine zusätzliche Prüfung der Laufzeit, Echtzeit oder Konnektivität sinnvoll ist. Öffnen Sie den **Gesundheitsindikator**, notieren Sie den Zustand **API**, **realtime / WebSocket**, **auth**, die **Latenz** und das **aktuelle Projekt**, dann fahren Sie mit [Benutzeroberfläche und Navigation](./interface-et-navigation.md) fort, um das Panel zu lesen, und mit [Wartung, Support und FAQ](./maintenance-support-faq.md) für Prüfpunkte.

## Schnelle Referenzen – zu bestätigender Zugriff

| Ausgangssituation | Zuerst prüfen | Dann |
| --- | --- | --- |
| Microsoft gibt einen Fehler vor der Rückkehr in die Anwendung | `authority`, verwendeter Mandant, `clientId`, `redirectUri`, `postLogoutRedirectUri`, `allowedTenantId` | Vergleichen Sie die Laufzeit‑Konfiguration und die Entra‑Registrierung, dann führen Sie einen Test mit dem richtigen Konto durch |
| Microsoft‑Anmeldung funktioniert, aber die Anwendung bleibt blockiert | Verfügbarkeit eines **Sitzplatzes**, Gesundheitsindikator, API / WebSocket‑URLs | Prüfen Sie anschließend den Zugriff auf ein Projekt und die tatsächlichen Rechte des Kontos |
| Anmeldung funktioniert, Dashboard lädt, aber Verfügbarkeit prüfen empfohlen | Zustände **auth**, **API**, **realtime / WebSocket**, Latenz und aktives Projekt | Öffnen Sie [Benutzeroberfläche und Navigation](./interface-et-navigation.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md), um Auth, Laufzeit und Projektkontext zu unterscheiden |
| Anwendung öffnet sich, aber kein Projekt erscheint | Projekt‑Auswahl‑Filter, Liste **Projekte**, Projektzugehörigkeit, Erstellungsrecht | Bitten Sie den **Projektinhaber**, das Konto bei Bedarf dem richtigen Projekt hinzuzufügen |
| Eine Seite ist sichtbar, aber nicht bearbeitbar | Projekt‑Rolle oder Admin‑Rolle, Zustand **Nur‑Lesen** vs **Zugriff verweigert** | Prüfen Sie anschließend die Admin‑Gruppe oder die betreffenden Projekt‑Berechtigungen |

## Situation, zu erfassende Elemente und nächste Seite

| Beobachtete Situation | Zu erfassende Elemente | Nächste zu öffnende Seite |
| --- | --- | --- |
| Microsoft‑Fehler vor Rückkehr in die Anwendung | genaue Fehlermeldung, Screenshot, verwendetes Konto, tatsächlich geöffnete URL | [Start](./demarrage.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md), falls Zweifel bestehen |
| Dashboard geladen, aber Verfügbarkeit prüfen sinnvoll | Zustände **API**, **realtime**, **auth**, Latenz, Testzeit, aktuelles Projekt | [Benutzeroberfläche und Navigation](./interface-et-navigation.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md) |
| Kein Projekt sichtbar | Screenshot des Projekt‑Auswahl‑Filters, E‑Mail des Kontos, erwartetes Projekt | [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) |
| Seite sichtbar, aber Kontrollen ausgegraut | Seitennamen, erwartete Rolle, Screenshot der deaktivierten Buttons | [Zugriffskontrolle und Projekt‑Rollen](./controle-acces-et-roles.md) oder [Portefeuille und technische Administration](./portefeuille-et-administration-technique.md) je nach Oberfläche |
| Anmeldung OK, aber Runs starten nicht | `Trace ID` falls vorhanden, aktives Projekt, Gesundheitsindikator, erwarteter KI‑Provider | [Wartung, Support und FAQ](./maintenance-support-faq.md), dann [Berichte, KI‑Journal und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) |

Für eine Situation, die Authentifizierung, Laufzeit, Projekt, Sitzplatz oder KI‑Provider mischt, nutzen Sie anschließend [Wartung, Support und FAQ](./maintenance-support-faq.md) als übergreifende Prüfpunkte.

## Gute Praktiken von Anfang an

- wählen Sie das richtige Projekt **vor** das Starten von Agenten;
- definieren Sie die Daten­sprache des Projekts korrekt bei der Erstellung;
- prüfen Sie Ihr Rechte‑Level, bevor Sie Governance oder technische Administration ändern;
- wenn Ihre Bereitstellung ein Sitzplatzmodell nutzt, vergewissern Sie sich, dass Ihr Zugriff ordnungsgemäß zugewiesen wurde;
- behalten Sie die Bereitstellungs‑URL und, falls nötig, die angezeigte **Trace ID** für den Support.

## Weiter

- [Azure Marketplace‑Bereitstellung](./deploiement-azure-marketplace.md)
- [Benutzeroberfläche und Navigation](./interface-et-navigation.md)
- [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
