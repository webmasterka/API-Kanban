var prefix = "https://cors-anywhere.herokuapp.com/";
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3979',
    'X-Auth-Token': 'cd00ffe0e0339a517e3123695b2a9a38'
};

// OGÓLNA FUNKCJA

function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}

buttonToggle(true);
fetch(prefix + baseUrl + '/board', { headers: myHeaders })
    .then(function (resp) {
        return resp.json();
    })
    .then(function (resp) {
        setupColumns(resp.columns);
        buttonToggle(false);
    });

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}

function buttonToggle(state) {
    var btn = document.querySelectorAll('.button-toggle');

    for (var i = 0; i<btn.length; i++) {
        btn[i].disabled = state;
    }
}