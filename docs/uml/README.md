# UML

> **Note (2026-10-06):** v1 is frontend only. The sequence diagrams below still show the API and MongoDB of the full-stack plan; that backend comes later. In v1, the same steps happen inside the app, with the entries saved to `localStorage`.

The diagrams are written in PlantUML (`*.puml`, shared look in `skin.iuml`) and exported as PNG, SVG and one PDF. The Mermaid versions below are quick previews that render on GitHub.

| File | What |
|---|---|
| `jotern-uml.pdf` | The four diagrams in one PDF, bilingual titles |
| `01-use-case.puml` / `.png` / `.svg` | Use case diagram |
| `02-class.puml` / `.png` / `.svg` | Class diagram |
| `03-sequence-add-entry.puml` / `.png` / `.svg` | Sequence: add an entry |
| `04-sequence-export-week.puml` / `.png` / `.svg` | Sequence: export a week |
| `skin.iuml` | The Jotern colours and fonts for PlantUML |
| `jotern-style.css` | The same look as a Gaphor style sheet |

Regenerate: `java -jar plantuml.jar -tsvg docs/uml/*.puml` (and `-tpng` for the PNGs).

## 1. Use case (v1 in colour, Later greyed out)

```mermaid
flowchart LR
    I(["🧑‍🎓 Intern"])
    S(["Supervisor (Later)"])
    T(["School tutor (Later)"])
    subgraph J["Jotern — v1"]
        U1(["US-01 Log today's work"])
        U2(["US-02 Edit or delete an entry"])
        U3(["US-03 Note a difficulty, solution, lesson"])
        U4(["US-04 Tag an entry"])
        U5(["US-05 Set up my internship"])
        U6(["US-06 See a week"])
        U7(["US-07 Export a week to Markdown"])
        U8(["US-08 Build the report outline (ENSPD)"])
        U10(["US-10 See my dashboard"])
    end
    L14(["L-14 See my interns' submitted weeks"])
    L15(["L-15 Comment on a week"])
    L17(["L-17 Read the report outline"])
    I --- U1 & U2 & U5 & U6 & U7 & U8 & U10
    U1 -. include .-> U4
    U3 -. extend .-> U1
    S --- L14 & L15
    T --- L17
    classDef later fill:#F3F5FA,color:#9EA8CB,stroke:#9EA8CB
    class S,T,L14,L15,L17 later
```

US-10 sits on the Today page: the dashboard is the first thing the intern sees every day. US-11 (works with no internet) is a non-functional need, so it's a note on the diagram, not a use case. US-09 (paste my own school's template) moved to Later: v1 builds the report from a general template, and the template used now is ENSPD's.

## 2. Class

```mermaid
classDiagram
    class Internship {
        +String company
        +String supervisorName
        +String school
        +Date startDate
        +Date endDate
        +String[] tags
        +weekSummary(weekStart: Date) WeekSummary
        +buildReportOutline() String
    }
    class LogEntry {
        +Date date
        +String text
        +Integer minutes  «1..1440»
        +String[] tags
        +String difficulty [0..1]
        +String solution [0..1]
        +String learned [0..1]
        +String position [0..1]
    }
    class ReportTemplate {
        +String name
        +String school
        +String body  «Markdown with placeholders»
        +Boolean isDefault
    }
    class WeekSummary {
        <<computed>>
        +Date weekStart
        +Integer totalMinutes
        +Map minutesByTag
        +Integer daysLoggedInARow
        +toMarkdown() String
    }
    Internship "1" *-- "0..*" LogEntry : has
    Internship "0..*" --> "1" ReportTemplate : uses
    Internship ..> WeekSummary : computes
```

Two choices made here (change them in Gaphor if you disagree): **tags** are a list on the Internship, so each intern can rename them; **position** is an optional text on each entry, for the ENSPD "par poste" layout. WeekSummary is never stored: the API computes it from the entries.

## 3. Sequence: add an entry

```mermaid
sequenceDiagram
    actor I as Intern
    box Presentation (Angular)
        participant C as TodayPage
        participant S as EntriesService
    end
    box Business logic (Express)
        participant R as /api/entries route
        participant K as entriesController
    end
    box Data access
        participant M as LogEntry model (Mongoose)
        participant DB as MongoDB
    end
    I->>C: fills the form, clicks "Jot today"
    C->>S: create(entry)
    S->>R: POST /api/entries (JSON)
    R->>K: create(req, res)
    K->>M: LogEntry.create(body)
    M->>M: validate (minutes 1–1440, date, text)
    alt valid
        M->>DB: insertOne
        DB-->>M: saved document
        M-->>K: entry
        K-->>S: 201 + entry
        S-->>C: entry
        C-->>I: entry in today's list, dashboard updated
    else invalid
        M-->>K: ValidationError
        K-->>S: 400 { message, field }
        S-->>C: error
        C-->>I: "Add the time spent so the week adds up."
    end
```

## 4. Sequence: export a week

```mermaid
sequenceDiagram
    actor I as Intern
    participant W as WeekPage
    participant R as /api/weeks/:week/export
    participant K as weeksController
    participant M as LogEntry model
    participant DB as MongoDB
    I->>W: clicks "Export week"
    W->>R: GET /api/weeks/2026-W41/export
    R->>K: export(req, res)
    K->>M: find entries between Monday and Sunday
    M->>DB: find({ date: { $gte, $lt } })
    DB-->>M: entries
    M-->>K: entries
    K->>K: build WeekSummary, then Markdown
    K-->>W: 200 text/markdown (week-41.md)
    W-->>I: file saved, "Week 41 exported to Markdown."
```
