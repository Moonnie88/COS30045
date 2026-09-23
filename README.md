# COS30045 – Lab Exercise: PowerWise Website

A three-page website (Home, Televisions, About Us) with placeholder content about appliance energy consumption in the Australian market.

**Live demo:** [https://cos-30045-nine.vercel.app/](https://cos-30045-nine.vercel.app/)

## Structure

```
index.html        – all three pages as <section> elements
css/styles.css    – styling, colours taken from the power logo
js/script.js      – swaps between pages, highlights the current nav link, switches chart views
images/PowerIcon.png
images/charts/    – KNIME charts answering the 7 TV questions
```

## Features

- JavaScript page switching: clicking a nav link hides all `.page` sections and shows the selected one.
- Power logo in the top-left returns to the Home page.
- Hover feedback on nav links (orange background) and the logo (rotates slightly).
- Current page shown by an `active` class on the nav link, and in the browser tab title.
- Colour palette matched to the logo: cream `#f9e5a7`, orange `#eca843`, brown `#7b6344`.
- Footer with year, author name and GenAI acknowledgement.
- Televisions page shows 7 KNIME charts. Q1 and Q7 have tabs to switch between two chart views (pie/bar and box plot/bar).

## Use of GenAI

<!-- Keep notes here as you work. Be specific: what you asked, what it produced, what you changed. -->

| Date          | Tool        | What I asked for                 | What I changed / checked       |
|---------------|-------------|----------------------------------|--------------------------------|
|23/9/2026      | Claude Code | - help me code and understand it | - checks/change for preference |

### Reflection

<!-- Write a short reflection: how helpful was the tool, what did it get wrong, what did you learn? -->
Having claude to help me code out the website is faster and it gives me what I imagined.
Claude code misunderstood the idea of "provides mouse over feedback to user", what I want is something where user hover their mouse it show text like a tooltip but claude thought that user hover to it and it change the display (eg: the text turn bown with different backgroud).
I have learnt new things like some new coding ways and there is sysmbol codes like &copy; and &middot; which help so much instead of using the symbol by paste it.