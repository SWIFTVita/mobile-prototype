function connectCardTitle(title, subtitleText, which = "", id = 0) {
    return div(
        "titles",
        row(icon("people") + col(cardTitle(title) + cardSubtitle(subtitleText)))
    ) + actionItem("open", which, id)
}

function connectCardContent(groups, messageList = {messages: [], members: []}) {
    return [
        messagePanel(messageList.messages.slice(-3)),
    ].join("");
}

function connectCard(
    messageList = {messages: [], members: []},
    titleText = "",
    subtitleText = "",
    id = 0,
    groups = [],
    whenText = "",
    kind="1-ON-1") {

    let period = Period("");
    period.color = "#663399";


    return div(
        `card connect connect-${id}`,
        cardTitles(kind, "", whenText, "connect", -1, "connect") +
        title(titleText) +
        subtitle(subtitleText) +
        actionItem("add","connect", -1, "Participants"),
        action("open", "connect_chat")
    )
}

function connectPersonDetail(
    imagePath = "images/photos/cannon-beach.jpg",
    title = "",
    subtitle = "",
    content = "",
    tags = [],
    groups = [],
    actions = [],
    which = -1
) {
    return detail(
        "connect",
        "Details",
        div(
            `titles explore ${which}`,
            row(
                col(cardTitle(title) + cardSubtitle(subtitle))
            )
        ) + col(text(content) + text("Friends:") + cardGroups(groups)),
        groups,
        actions,
        imagePath,
        tags
    );
}
