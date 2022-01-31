function page(
    selected = false,
    name,
    caption = "",
    choiceList = [],
    selectedChoice = "",
    content = "",
    selectedCard = "",
    parent = "",
    actionContent = "",
    searchMessage = "Where to?"
) {
    return div(
        `${name} page ${selected ? "" : "hidden"}`,
        div("header",
            title(
                actionItem(parent ? "back" : "menu") +
                div("title-middle", icon(name + "-black", "", caption)) +
                cardPerson(peopleList[RUBY])
                // actionItem("person", "me", 0, "", "black")
            ) +
            (searchMessage ? search([], -1, searchMessage) : "") +
            choiceSet(`${name}-filters`, choiceList, selectedChoice) +
            actionContent
        ) +
        contentPanel(
            content
        ),
        `id='page-${name}'`
    );
}
