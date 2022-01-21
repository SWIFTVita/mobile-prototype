function showSearchDialog() {
    showDialog("Search", search([
        ["Ruby Red", "Ruby", "Red", ""],
        ["Betty Ford", "Betty", "Ford", ""],
        ["Joe Schmoe", "Joe", "Schmoe", ""],
    ]));
}

function showProfileDialog(personIndex= RUBY) {
    showDialog("Profile",
        `
        Now is the
        time for 
        all good people...
        `
        // contentPanel(
        // personItem(peopleList[personIndex]) +
        //     actionPanel([
        //         "block",
        //         "friend",
        //         "follow",
        //     ].map(actionItem).join(""))
        // )
    );
}

function collapseCard(target, action, which, id){
    target.closest(".card").classList.toggle("collapsed")
    console.log("collapseCard", action, which, id);
}

function openPage(target, action, which, id) {
    if ("open" === action && which.toLowerCase().startsWith("http")) {
        window.open(which, "_self");
    } else if ("open" === action) {
        showPage(which, action, id);
    } else if ("person" === action) {
        showPage("connect_person", "open", id);
    } else if ("board" === action) {
        showPage("dream", "dream", id);
    }
}

TOAST_MESSAGES = {
    favorite: "Added to favorites!",
    follow: "Followed!",
    heart: "Added to your Favorites",
    share: "Shared to your Connections",
    pin: "Added to Dream Board",
    plan: "Added to Plan",
    accept: "Invitation Accepted and Added to Plan",
    decline: "Invitation Declined and Not Added to Plan",
    settle: "Payment Settled",
    zelle: "Payment Settled",
    paypal: "Payment Settled",
    venmo: "Payment Settled",
}

ACTION_PAGES = {
    back: () => showPage(window.lastPage),
    open: openPage,
    add: addMessage,
    new: addMessage,
    search: showSearchDialog,
    more: showSearchDialog,
    hide: hideDialog,
    collapse: collapseCard,
    right: toggleCollapse,
    person: showProfileDialog,
}
function toggleCollapse(target, action, which, id){
    target.closest(".card-list").classList.toggle("collapse");
}
function route(target, action, which = "", id = "") {
    if (TOAST_MESSAGES.hasOwnProperty(action)) {
        return showToast(TOAST_MESSAGES[action]);
    } else if (ACTION_PAGES.hasOwnProperty(action)) {
        console.log("ACTION: " + action, which, id);
        const f = ACTION_PAGES[action];
        console.log(f);
        return f(target, action, which, id);
    } else {
        console.log("UNKNOWN ACTION:" + action);
    }
}
