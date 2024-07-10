prepend with front matter:

---
title:
tags: [ notes ]
permalink: "notes/{{ page.filePathStem }}"
layout: note.liquid
---

#### Benchmarking application performance with a large data set:

##### Questions

- Compile time scaling for larger sets?
- Search time scaling for larger sets?

##### Napkin Math
Javascript internally stores a single char value as 16 bits / 2 bytes [StackOverflow](https://stackoverflow.com/a/42191869).

- Est 1000 word article 
- 5 chars / word on average
- 2 bytes / char

1000 words / article * 5 chars / word * 2 bytes / word = **10 kB / article** for raw text

- The search index is another struct that is generated in addition
    - 6 ~ 10kB articles it is 218 kB -> IndexSize <= 5x
        - search is instant
        - compile < 1s

- Target sample set 100 articles at 1000 words each
    - 100_000 words
    - 500_000 est chars
    - 1_000_000 bytes => 1 MB raw content
    - 5_000_000 bytes => 5 MB searchIndex

##### GPT Generation
Prepend the markdown with the following text:
---
title: 
tags: [ notes ]
permalink: "notes/{{ page.filePathStem }}"
layout: note.liquid
---

Write me 1000 word summary in the raw text of a markdown file format on the Walrus:

# List of 100 Animals

| Number | Animal Name       | Done |
|--------|-------------------|------|
| 1      | African Elephant  | [x]  |
| 2      | Panda Bear        | [x]  |
| 3      | Bengal Tiger      | [x]  |
| 4      | Koala             | [x]  |
| 5      | Arctic Fox        | [x]  |
| 6      | Blue Whale        | [x]  |
| 7      | Emperor Penguin   | [x]  |
| 8      | Giraffe           | [x]  |
| 9      | Grizzly Bear      | [x]  |
| 10     | Hippopotamus      | [x]  |
| 11     | Kangaroo          | [x]  |
| 12     | Komodo Dragon     | [x]  |
| 13     | Lion              | [x]  |
| 14     | Cheetah           | [x]  |
| 15     | Mandrill          | [x]  |
| 16     | Narwhal           | [x]  |
| 17     | Octopus           | [x]  |
| 18     | Platypus          | [x]  |
| 19     | Quokka            | [x]  |
| 20     | Rhinoceros        | [x]  |
| 21     | Sea Turtle        | [x]  |
| 22     | Tapir             | [x]  |
| 23     | Uakari            | [x]  |
| 24     | Vampire Bat       | [x]  |
| 25     | Walrus            | [x]  |
| 26     | X-ray Tetra       | [x]  |
| 27     | Yak               | [x]  |
| 28     | Zebra             | [x]  |
| 29     | Anteater          | [x]  |
| 30     | Beaver            | [x]  |
| 31     | Chameleon         | [x]  |
| 32     | Duck              | [x]  |
| 33     | Elephant Seal     | [x]  |
| 34     | Flamingo          | [x]  |
| 35     | Gorilla           | [x]  |
| 36     | Hammerhead Shark  | [x]  |
| 37     | Iguana            | [x]  |
| 38     | Jaguar            | [x]  |
| 39     | Kiwi              | [x]  |
| 40     | Lemur             | [x]  |
| 41     | Meerkat           | [x]  |
| 42     | Newt              | [x]  |
| 43     | Ostrich           | [x]  |
| 44     | Puffin            | [x]  |
| 45     | Quail             | [x]  |
| 46     | Raccoon           | [x]  |
| 47     | Squirrel          | [x]  |
| 48     | Tiger Shark       | [x]  |
| 49     | Umbrellabird      | [x]  |
| 50     | Vulture           | [x]  |
| 51     | Wolf              | [x]  |
| 52     | Xerus             | [x]  |
| 53     | Yellowjacket      | [x]  |
| 54     | Zebu              | [x]  |
| 55     | Albatross         | [x]  |
| 56     | Bonobo            | [x]  |
| 57     | Cougar            | [ ]  |
| 58     | Dingo             | [ ]  |
| 59     | Eel               | [ ]  |
| 60     | Falcon            | [ ]  |
| 61     | Gibbon            | [ ]  |
| 62     | Hyena             | [ ]  |
| 63     | Ibis              | [ ]  |
| 64     | Jellyfish         | [ ]  |
| 65     | Kiwi              | [ ]  |
| 66     | Llama             | [ ]  |
| 67     | Mongoose          | [ ]  |
| 68     | Numbat            | [ ]  |
| 69     | Orangutan         | [ ]  |
| 70     | Porcupine         | [ ]  |
| 71     | Quetzal           | [ ]  |
| 72     | Reindeer          | [ ]  |
| 73     | Swan              | [ ]  |
| 74     | Tarsier           | [ ]  |
| 75     | Urial             | [ ]  |
| 76     | Viper             | [ ]  |
| 77     | Warthog           | [ ]  |
| 78     | Xantus's Hummingbird | [ ]  |
| 79     | Yellowfin Tuna    | [ ]  |
| 80     | Zorilla           | [ ]  |
| 81     | Axolotl           | [ ]  |
| 82     | Badger            | [ ]  |
| 83     | Caracal           | [ ]  |
| 84     | Dugong            | [ ]  |
| 85     | Electric Ray      | [ ]  |
| 86     | Frigatebird       | [ ]  |
| 87     | Gila Monster      | [ ]  |
| 88     | Hummingbird       | [ ]  |
| 89     | Impala            | [ ]  |
| 90     | Jackrabbit        | [ ]  |
| 91     | Kudu              | [ ]  |
| 92     | Leopard           | [ ]  |
| 93     | Monarch Butterfly | [ ]  |
| 94     | Nutria            | [ ]  |
| 95     | Ocelot            | [ ]  |
| 96     | Pika              | [ ]  |
| 97     | Quahog            | [ ]  |
| 98     | Rattlesnake       | [ ]  |
| 99     | Starfish          | [ ]  |
| 100    | Tamarin           | [ ]  |
