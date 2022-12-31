// variables
var s = {
    "page": "page_title",
    "gamemode": "spell",
    "cardset": "",
    "cards": [],
    "cards_total": 0,
    "cards_complete": [],
    "input_correction": false,
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
            // term, defintion, times incorrect, times correct
            s["cards"].push([term, definition, 0, 0])
        }
    }
    s["cards_total"] = s["cards"].length
    console.clear()
    console.table(s["cards"])
}


function mix_terms() {
    let output = []
    while (s["cards"].length > 0) {
        let rand = Math.round(Math.random() * (s["cards"].length - 1))
        if (s["cards"][rand] != "") {
            output.push(s["cards"][rand])
            s["cards"].splice(rand, 1)
        }
    }
    s["cards"] = output
    console.clear()
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


function spell_rank() {
    let cards_rank = []
    let rank = 0
    while (s["cards_complete"].length > 0) {
        for (let i = 0; i < s["cards_complete"].length; i++) {
            let card = s["cards_complete"][i]
            console.log(card[2], rank)
            if (card[2] == rank) {
                cards_rank.push(card)
                s["cards_complete"].splice(i, 1)
            }
        }
        rank += 1
    }
    s["cards_complete"] = cards_rank
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
        if (s["input_correction"]) {
            s["input_correction"] = false
            mix_terms()
            spell_update_desc()
        } else {
            s["cards"][0][3] += 1  // add to "times correct" counter
            // remove card if completed
            if (s["cards"][0][3] >= 2) {
                s["cards_complete"].push(s["cards"][0])
                s["cards"].shift()
            }
            // next card
            if (s["cards"].length > 0) {
                mix_terms()
                spell_update_desc()
            } else {
                // summary page
                set_page("page_spell_summary")
                reset()
                // table
                spell_summary_table()
            }
        }
        // update status
        const status = document.getElementById("title_t4")
        let cards_left = s["cards"].length
        let cards_percent = Math.round(((s["cards_total"] - cards_left) / s["cards_total"]) * 100)
        status.innerHTML = `${cards_percent}% (${s["cards_total"] - cards_left}/${s["cards_total"]})`
        
    } else {
        input_box.placeholder = s["cards"][0][0]
        // add to "times incorrect" counter
        s["cards"][0][2] += 1
        // reset "times correct" counter
        s["cards"][0][3] = 0
        // input correction mode (do again later)
        s["input_correction"] = true
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
    // resize elements
    let window_width = window.innerWidth
    let window_height = window.innerHeight
    // resize title titles
    let title_title_size = window_height / 15 + "px"
    document.getElementById("title_t1").style.fontSize = title_title_size
    document.getElementById("title_t2").style.fontSize = title_title_size
    document.getElementById("title_t3").style.fontSize = title_title_size
    document.getElementById("title_t4").style.fontSize = title_title_size
    // resize title buttons
    let title_button_height = window_height / 20 + "px"
    let title_button_text_height = window_height / 40 + "px"
    document.getElementById("title_b1").style.height = title_button_height
    document.getElementById("title_b1").style.fontSize = title_button_text_height
    document.getElementById("title_b2").style.height = title_button_height
    document.getElementById("title_b2").style.fontSize = title_button_text_height
    document.getElementById("title_b3").style.height = title_button_height
    document.getElementById("title_b3").style.fontSize = title_button_text_height
    document.getElementById("title_b4").style.height = title_button_height
    document.getElementById("title_b4").style.fontSize = title_button_text_height
    document.getElementById("title_b5").style.height = title_button_height
    document.getElementById("title_b5").style.fontSize = title_button_text_height
    document.getElementById("title_b6").style.height = title_button_height
    document.getElementById("title_b6").style.fontSize = title_button_text_height
    // spell input box
    document.getElementById("spell_input").style.height = (window_width / 2) / 10 + "px"
    document.getElementById("spell_input").style.fontSize = (window_width / 2) / 20 + "px"
    // spell input box
    document.getElementById("spell_description").style.fontSize = (window_width / 2) / 20 + "px"
    document.getElementById("spell_description").style.marginLeft = (window_width - (window_width * 0.8)) / 2 + "px"
    // spell accent buttons
    let spell_accent_width = (window_width / 2) / 10 + "px"
    let spell_accent_text_size = (window_width / 2) / 20 + "px"
    document.getElementById("accent0").style.width = spell_accent_width
    document.getElementById("accent0").style.height = spell_accent_width
    document.getElementById("accent0").style.fontSize = spell_accent_text_size
    document.getElementById("accent1").style.width = spell_accent_width
    document.getElementById("accent1").style.height = spell_accent_width
    document.getElementById("accent1").style.fontSize = spell_accent_text_size
    document.getElementById("accent2").style.width = spell_accent_width
    document.getElementById("accent2").style.height = spell_accent_width
    document.getElementById("accent2").style.fontSize = spell_accent_text_size
    document.getElementById("accent3").style.width = spell_accent_width
    document.getElementById("accent3").style.height = spell_accent_width
    document.getElementById("accent3").style.fontSize = spell_accent_text_size
    document.getElementById("accent4").style.width = spell_accent_width
    document.getElementById("accent4").style.height = spell_accent_width
    document.getElementById("accent4").style.fontSize = spell_accent_text_size
    document.getElementById("accent5").style.width = spell_accent_width
    document.getElementById("accent5").style.height = spell_accent_width
    document.getElementById("accent5").style.fontSize = spell_accent_text_size
    document.getElementById("accent6").style.width = spell_accent_width
    document.getElementById("accent6").style.height = spell_accent_width
    document.getElementById("accent6").style.fontSize = spell_accent_text_size

    document.getElementById("spell_accents").style.marginLeft = (window_width - (window_width * 0.8)) / 2 + "px"
}

// event listeners
window.addEventListener("keydown", (event) => {
    if (s["page"] == "page_spell") {
        if (event.key == "Enter") {
            spell_check()
        }
    }
});


window.addEventListener('load', (event) => {
    reset()
})
