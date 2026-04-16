---
title: Erste Schritte
slug: /demarrage
description: Voraussetzungen, Zugriff, Authentifizierung und Erstkonfiguration.
---

[Startseite](./index.md) · [Azure Marketplace-Bereitstellung](./deploiement-azure-marketplace.md) · [Oberfläche und Navigation](./interface-et-navigation.md)

![Projektverzeichnis](/img/screenshots/localized/de/07-projects-directory.png)

## Ziel

Diese Seite erklärt, wie der Zugang zu ProPM Agent vorbereitet wird, die erste Anmeldung erfolgreich durchgeführt wird, das richtige Projekt ausgewählt wird und die technisch unverzichtbaren Punkte unmittelbar nach einer Bereitstellung überprüft werden.

## Wer diese Seite nutzen kann

- **Fachanwender**, der eine URL erhält und sich ohne umfangreiche Unterstützung anmelden muss;
- **Projektinhaber**, der den ersten Projektkontext erstellen oder auswählen muss;
- **Technischer Administrator**, der die Authentifizierung, die Laufzeitumgebung und den initialen Zugriff validieren muss.

## Wenn Sie noch keine Anwendungs-URL haben

Wenn Ihre Instanz noch nicht bereitgestellt ist, beginnen Sie mit [Azure Marketplace-Bereitstellung](./deploiement-azure-marketplace.md). Dieser Schritt ermöglicht es, die Web-URL, die API und die erforderlichen Laufzeitparameter zu erhalten, bevor sich ein Benutzer anmeldet.

## Bevor Sie beginnen

### Voraussetzungen auf Benutzerseite

Für die normale Nutzung benötigen Sie:

- die **URL der ProPM Agent-Bereitstellung**;
- ein **Microsoft Entra ID**-Konto, das für den betreffenden Mandanten autorisiert ist;
- Zugriff auf mindestens ein Projekt oder das Recht, eines zu erstellen;
- einen modernen Browser, der aktuelle Webanwendungen unterstützt;
- falls Sie Sprache verwenden, einen Browser, der mit Spracherkennungs-APIs kompatibel ist.

### Voraussetzungen auf Seite des technischen Administrators

Die folgenden Elemente sind durch die beobachtete Konfiguration explizit vorgesehen:

| Element | Rolle |
| --- | --- |
| `clientId` | Identifiziert die auf der Webseite verwendete Entra-Anwendung |
| `authority` | Definiert die Microsoft Entra-Anmeldeinstanz |
| `scopes` | Definiert die zum Zeitpunkt der Authentifizierung angeforderten Berechtigungen |
| `redirectUri` und `postLogoutRedirectUri` | Steuern die Rückkehr nach An- und Abmeldung |
| `allowedTenantId` | Beschränkt, falls konfiguriert, den autorisierten Mandanten |
| `/runtime-config.json` | Dynamische Überschreibung der URLs und Authentifizierungsparameter zur Laufzeit |
| API-URL und WebSocket-URL | Ermöglichen dem Frontend, die Backend-Dienste und Echtzeitdienste zu erreichen |
| Abonnement / Lizenzen | Bedingt den Zugang in Bereitstellungen, die eine Lizenz pro Benutzer vorschreiben |

## Ablauf der ersten Anmeldung

1. Öffnen Sie die veröffentlichte URL Ihrer Bereitstellung;
2. Lassen Sie die Anwendung Sie zur Microsoft-Anmeldeseite weiterleiten;
3. Melden Sie sich mit dem autorisierten Konto an;
4. Kehren Sie zur Anwendung zurück, in der Regel zum **Dashboard**;
5. Überprüfen Sie die Benutzeroberflächensprache, das aktuelle Projekt und eventuelle sichtbare Meldungen in der oberen Leiste;
6. Öffnen Sie **Projekte**, um Ihr erstes Projekt auszuwählen oder zu erstellen.

## Zu kennende Zugriffsstatus

In der Oberfläche existieren zwei verschiedene Status:

- **Nur Lesen**: Sie können eine Oberfläche einsehen, aber keine Einstellungen ändern;
- **Zugriff verweigert**: Die Route oder Aktion ist für Ihr Konto nicht verfügbar.

Diese Unterscheidung ist wichtig für Administrationsbereiche: Manchmal kann eine technische Seite zur Einsicht geöffnet werden, ohne dass Änderungen gespeichert werden können.

## Erwartetes Ergebnis nach der ersten Anmeldung

Wenn alles korrekt konfiguriert ist, sollten Sie in der Lage sein:

- das **Dashboard** ohne blockierende Fehler zu erreichen;
- **Projekte** zu öffnen;
- ein Projekt auszuwählen oder zu erstellen;
- anschließend je nach Ihren Rechten auf **Arbeitsbereich**, **Wissen**, **Agenten**, **Berichte & Artefakte** und **KI-Protokoll** zuzugreifen.

## Ein erstes Projekt erstellen

Das in der Anwendung beobachtete Formular bietet folgende Felder:

- **Projekt-ID**;
- **Name**;
- **Beschreibung**;
- **Standard-Datensprache**;
- **Zusätzliche Datensprachen**.

![Projekterstellungsfenster](/img/screenshots/localized/de/07-project-create-modal.png)

### Wichtiger Hinweis

Die **Datensprache des Projekts** ist nicht dasselbe wie die **Sprache der Benutzeroberfläche**.

Die Datensprache beeinflusst insbesondere:

- die standardmäßig vorgeschlagenen Dokumentenkategorien;
- bestimmte Einstellungen oder Systemaufforderungen auf Seiten der Agenten;
- die projektspezifischen Anfangswerte.

## Wenn kein Projekt erscheint

Mehrere Bildschirme zeigen einen expliziten leeren Zustand an, wenn kein Projekt ausgewählt ist. Das ist normal.

Um fortzufahren:

1. Verwenden Sie den **Projektauswahl** in der oberen Leiste;
2. Öffnen Sie **Projekte**, um ein zugängliches Projekt auszuwählen;
3. Wenn Sie das Erstellungsrecht haben, erstellen Sie ein Projekt;
4. Wenn die Liste leer bleibt, überprüfen Sie mit Ihrem Administrator, ob Ihr Konto korrekt zum richtigen Projekt hinzugefügt wurde.

## Checkliste nach der Bereitstellung für den technischen Administrator

Überprüfen Sie nach einer neuen Bereitstellung mindestens:

1. die tatsächlich veröffentlichte **Web-URL**;
2. die Verfügbarkeit der Datei **`/runtime-config.json`**;
3. die Konsistenz zwischen der veröffentlichten URL und den in Entra konfigurierten **Redirect URIs**;
4. das Vorhandensein einer gültigen **Client-ID**;
5. den korrekten Wert für **authority** und, falls verwendet, für **allowedTenantId**;
6. die vom Frontend und der API erwarteten **Scopes**;
7. die **API**-URL und, falls verfügbar, die **WebSocket**-URL;
8. den Verbrauch oder die Verfügbarkeit der **Lizenzen**, falls der Plan dies vorschreibt;
9. einen ersten Anmeldetest mit einem Standardbenutzerkonto und einem Administratorkonto.

## Häufige Vorfälle bei der ersten Anmeldung

### Das Microsoft-Konto authentifiziert sich, aber die Anwendung bleibt blockiert

Überprüfen Sie in dieser Reihenfolge:

1. den während der Anmeldung verwendeten **Mandanten**;
2. ob das Konto in diesem Mandanten tatsächlich autorisiert ist;
3. die Verfügbarkeit einer **Lizenz**, falls der Plan eine Lizenz pro Benutzer anwendet;
4. die Existenz von mindestens einem für dieses Konto zugänglichen Projekt.

### Mandantenfehler oder externes / Gastkonto

Wenn Microsoft angibt, dass Ihr Konto im Zielmandanten nicht existiert, bedeutet dies in der Regel, dass es als **externer Benutzer / Gast** in den Mandanten eingeladen werden muss, der die Anwendung hostet, und dann auf die Unternehmensanwendung oder über eine Gruppe autorisiert werden muss.

### `redirect URI mismatch`

Wenn die Anmeldung einen Umleitungsfehler zurückgibt, vergleichen Sie die tatsächlich veröffentlichte URL mit den **Redirect URIs** der Entra-Anwendungsregistrierung. Jede veröffentlichte Umgebung muss exakt und ohne Tippfehler aufgeführt sein.

### `unauthorized_client` oder Client im falschen Mandanten

Dieses Symptom deutet in der Regel darauf hin, dass die Anwendungsregistrierung sich nicht im richtigen Mandanten befindet oder dass die Bereitstellung eine mit einer **Single-Tenant**-Anwendung inkompatible Autorität verwendet.

### Erfolgreicher Zugriff, aber Admin-Bildschirm nur lesbar

Dies bedeutet oft, dass das Konto authentifiziert ist, aber nicht als modifizierbarer Plattformadministrator aufgelöst wurde. Überprüfen Sie die Administratorengruppen, den Mandanten des Tokens und die von Ihrer Umgebung verwendete Methode zur Administratorauflösung.

### Anmeldung OK, Dashboard geladen, aber Gesundheitspanel beeinträchtigt

Dieser Fall deutet oft darauf hin, dass die Authentifizierung erfolgreich war, aber die Laufzeitumgebung, Echtzeitdienste oder Konnektivität teilweise beeinträchtigt bleiben. Öffnen Sie den **Gesundheitsindikator**, erfassen Sie den Status **API**, **realtime / WebSocket**, **auth**, die **Latenz** und das **aktuelle Projekt**, und fahren Sie dann mit [Oberfläche und Navigation](./interface-et-navigation.md) fort, um das Panel zu lesen, und mit [Wartung, Support und FAQ](./maintenance-support-faq.md) für den Lösungsweg.

## Schneller Entscheidungsbaum — blockierter Zugriff

| Anfangssymptom | Zuerst überprüfen | Dann |
| --- | --- | --- |
| Microsoft gibt einen Fehler zurück, bevor die Rückkehr in die Anwendung erfolgt | `authority`, verwendeter Mandant, `clientId`, `redirectUri`, `postLogoutRedirectUri`, `allowedTenantId` | Vergleichen Sie die Laufzeitkonfiguration und die Entra-Registrierung, dann testen Sie erneut mit dem richtigen Konto |
| Die Microsoft-Anmeldung ist erfolgreich, aber die Anwendung bleibt blockiert | Verfügbarkeit einer **Lizenz**, Gesundheitsindikator, API- / WebSocket-URLs | Überprüfen Sie anschließend den Zugriff auf ein Projekt und die tatsächlichen Rechte des Kontos |
| Die Anmeldung ist erfolgreich, das Dashboard lädt, aber das Gesundheitspanel ist beeinträchtigt | Status **auth**, **API**, **realtime / WebSocket**, Latenz und aktives Projekt | Öffnen Sie [Oberfläche und Navigation](./interface-et-navigation.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md), um Auth, Laufzeit und Projektkontext zu unterscheiden |
| Die Anwendung öffnet sich, aber es erscheint kein Projekt | Projektauswahl, Liste **Projekte**, Projektzugehörigkeit, Erstellungsrecht | Bitten Sie den **Projektinhaber**, das Konto bei Bedarf zum richtigen Projekt hinzuzufügen |
| Eine Seite ist sichtbar, aber nicht bearbeitbar | Projektrolle oder Admin-Rolle, Status **Nur Lesen** vs. **Zugriff verweigert** | Kontrollieren Sie anschließend die betreffende Administratorengruppe oder die Projektberechtigungen |

## Symptom, zu sammelnder Nachweis und nächste Seite

| Symptom | Zu sammelnder Nachweis | Nächste zu öffnende Seite |
| --- | --- | --- |
| Microsoft-Fehler vor Rückkehr in die Anwendung | Exakte Meldung, Screenshot, verwendetes Konto, tatsächlich geöffnete URL | [Erste Schritte](./demarrage.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md), falls Zweifel bestehen |
| Dashboard geladen, aber Gesundheit beeinträchtigt | Status **API**, **realtime**, **auth**, Latenz, Testzeitpunkt, aktuelles Projekt | [Oberfläche und Navigation](./interface-et-navigation.md), dann [Wartung, Support und FAQ](./maintenance-support-faq.md) |
| Kein Projekt sichtbar | Screenshot der Projektauswahl, E-Mail des Kontos, erwartetes Projekt | [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md) |
| Seite sichtbar, aber Steuerelemente ausgegraut | Name der Seite, erwartete Rolle, Screenshot der deaktivierten Schaltflächen | [Zugriffskontrolle und Projektrollen](./controle-acces-et-roles.md) oder [Portfolio und technische Administration](./portefeuille-et-administration-technique.md) je nach Oberfläche |
| Anmeldung OK, aber Runs starten nicht | `Trace ID` falls vorhanden, aktives Projekt, Gesundheitsindikator, erwarteter KI-Anbieter | [Wartung, Support und FAQ](./maintenance-support-faq.md), dann [Berichte, KI-Protokoll und Nachverfolgbarkeit](./rapports-journal-ia-et-tracabilite.md) |

Für einen Vorfall, der Authentifizierung, Laufzeitumgebung, Projekt, Lizenz oder KI-Anbieter vermischt, verwenden Sie anschließend [Wartung, Support und FAQ](./maintenance-support-faq.md) als seitenübergreifende Diagnoseseite.

## Best Practices von Anfang an

- Wählen Sie das richtige Projekt **bevor** Sie Agenten starten;
- Definieren Sie bei der Erstellung korrekt die Datensprache des Projekts;
- Überprüfen Sie Ihre Berechtigungsebene, bevor Sie Governance oder technische Administration ändern;
- Wenn Ihre Bereitstellung ein Lizenzmodell verwendet, kontrollieren Sie, ob Ihr Zugang korrekt zugewiesen wurde;
- Bewahren Sie die URL der Bereitstellung und, falls nötig, die **Trace ID** des Fehlers für den Support auf.

## Weiterführend

- [Azure Marketplace-Bereitstellung](./deploiement-azure-marketplace.md)
- [Oberfläche und Navigation](./interface-et-navigation.md)
- [Projekte und Arbeitsbereich](./projets-et-espace-de-travail.md)
- [Wartung, Support und FAQ](./maintenance-support-faq.md)
