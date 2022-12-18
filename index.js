// variables
var s = {
    "page": "page_title",
    "gamemode": "spell",
    "cardset": "",
    "cards": [],
    "cards_complete": [],
}

// set variables
function set_page(page_id) {
    s["page"] = page_id
}

function set_gamemode(gamemode_id) {
    s["gamemode"] = gamemode_id
}

function set_cardset(set_id) {
    s["cardset"] = set_id
}


// functions
function add_terms() {
    s["cards"] = []
    s["cards_complete"] = []
    let terms_definitions_all = window[s["cardset"]].split("\n\n\n\n")
    for (let i = 0; i < terms_definitions_all.length; i++) {
        let term_definition = terms_definitions_all[i].split("\n")
        let term = term_definition[0]
        let definition = term_definition[1]
        if (term != "") {
            s["cards"].push([term, definition, 0])
        }
    }
    console.table(s["cards"])
}


// page: spell
function spell_summary_table() {
    // table
    const table = document.getElementById("spell_summary")
    table.innerHTML = "<tr><th>Term</th><th>Definition</th><th>Times Incorrect</th></tr>"
    for (let i = 0; i < s["cards_complete"].length; i++) {
        let card = s["cards_complete"][i]
        table.innerHTML += `
<tr>
<th>${card[0]}</th>
<th>${card[1]}</th>
<th>${card[2]}</th>
</tr>
`
    }
    table.style.width = "100%"
}


function spell_remove_perfect() {
    let card_removed = []
    for (let i = 0; i < s["cards_complete"].length; i++) {
        let card = s["cards_complete"][i]
        if (card[2] > 0) {
            card_removed.push(card)
        }
    }
    s["cards_complete"] = card_removed
    spell_summary_table()
}


function spell_update_desc() {
    document.getElementById("spell_input").placeholder = ""
    document.getElementById("spell_description").innerHTML = s["cards"][0][1]
}


function spell_check() {
    let input_box = document.getElementById("spell_input")
    let input = input_box.value
    if (input == s["cards"][0][0]) {
        s["cards_complete"].push(s["cards"][0])
        s["cards"].shift()
        if (s["cards"].length > 0) {
            spell_update_desc()
        } else {
            set_page("page_spell_summary")
            reset()
            // table
            spell_summary_table()
        }
    } else {
        input_box.placeholder = s["cards"][0][0]
        // add to "times missed" counter
        s["cards"][0][2] += 1
    }
    // focus on text box
    input_box.focus()
    input_box.value = ""
}


function spell_char(char) {
    // define text box
    const input_box = document.getElementById("spell_input")
    // fetch information
    let position = input_box.selectionEnd
    let input = input_box.value
    // insert character
    input_box.value = input.substring(0, position) + char + input.substring(position)
    // focus on textbox
    input_box.focus()
}


function reset() {
    console.clear()
    // hide all pages
    document.getElementById("page_title").style.display = "none"
    document.getElementById("page_spell").style.display = "none"
    document.getElementById("page_spell_summary").style.display = "none"

    // show selected page
    document.getElementById(s["page"]).style.display = "block"

}

// onload
window.addEventListener('load', (event) => {
    reset()
})
