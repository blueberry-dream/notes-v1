# Note Taking App

This app is an prototype to support CSMISS10 Support in managing team knowledge.

## Tutorial

- [Markdown Review](https://commonmark.org/help/tutorial/07-links.html)


## Running the App

### Install

1. clone app source
2. install npm packages
3. run 'npm run dev' or double click start.bat 

### New Note

1. Copy .new-note.md to "\<new-note-title>.md"
2. Update front matter title and tags
3. Write note using markdown syntax

## TODO

### Build
- .bat file to copy new note and open in notepad++?

- nodejs exe to serve static site
    - cli argument to pass in PORT
    - check if port is busy, find free PORT

- gulp workflow for copying vendor dependencies
    - elasticlunr

### Start
- Pass in CLI arguments for variable port
    - .bat script will read from file?

### Search Feature 
- search settings
    - OR vs AND for multi-term search
    - field specific search/filter
    - tag based narrowing
- evaluate stem-only search for false-negative rate
- Weighting
    - consecutive search terms have equal weighting and can give counter-intuitive results
        - searching Afirca fish will raise documents with high scores for fish above those with scores for Africa
    - need to include AND field, i.e. only consider fish among articles that hit for Africa

### Image Content
- Test adding image content into .md template files
    - passthrough and serving static assets

### How to Use

- Editing Notes
    - Mark down guide
    - YAML Guide
- node packages
    - permissions on windows (vs2022)
    - shell scripts
    - bat file

### Content

#### Home

## Why Not {{ other tool }}

- single .txt file => inferior search, not easily parseable or shareable, restricted detail level
- logseq => IT doesn't allow people to run non-verified software
- obisdian => IT doesn't allow people to run non-verified software
- INSERT_TOOL_HERE => IT doens't allow people to run non-verified software

