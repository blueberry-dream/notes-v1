(function (window, document) {
    "use strict";

    // handles on rendering elements
    const resultsEl = document.getElementById("searchResults");
    const noResultsEl = document.getElementById("noResultsFound");


    // create list result items
    const mapResultToList = (result) => {
        console.log(result.doc);
        const { id, title, description } = result.doc;

        const listEl = document.createElement("li");
        resultsEl.appendChild(listEl);


        const titleEl = document.createElement("h3");
        listEl.appendChild(titleEl);

        const linkEl = document.createElement("a");
        linkEl.setAttribute("href", id);
        linkEl.textContent = title;
        titleEl.appendChild(linkEl);

        const descrEl = document.createElement("p");
        descrEl.textContent = description;
        listEl.appendChild(descrEl);
    }

    // search input event handler
    const search = (event) => {
        const results = window
            .searchIndex
            .search(event.target.value,
                {
                    bool: "OR",
                    expand: true
                })

        resultsEl.innerHTML = "";

        if (results.length != 0) {
            noResultsEl.style.display = "none";

            results.map(({ ref }) => {
                const doc = window.searchIndex.documentStore.getDoc(ref);
                const { id, title, description } = doc;

                const listEl = document.createElement("li");
                resultsEl.appendChild(listEl);

                const titleEl = document.createElement("h3");
                listEl.appendChild(titleEl);

                const linkEl = document.createElement("a");
                linkEl.setAttribute("href", id);
                linkEl.textContent = title;
                titleEl.appendChild(linkEl);

                const descrEl = document.createElement("p");
                descrEl.textContent = description;
                listEl.appendChild(descrEl);
            });
        } else {
            noResultsEl.style.display = "block";
        }
    }

    // fetch data set and set eventlistener
    fetch("searchIndex.json").then((response) =>
        response.json().then((rawIndex) => {
            window.searchIndex = elasticlunr.Index.load(rawIndex);
            document.getElementById("searchField").addEventListener("input", search);
        })
    );

})(window, document);