let game_list = {  games: [
  {name: "Undertale", category: "RPG", company: "Toby Fox", price: 9.99},
  {name: "Age of Mytholy", category: "Strategy", company: "Xbox Games Studio", price: 29.99},
  {name: "Muv-Luv Alternative", category: "Story", company: "aNCHOR Inc", price: 39.99},
  {name: "PUBG", category: "Shooting", company: "KRAFTON Inc", price: 0.00},
 ],
};

let jsonString = JSON.stringify(game_list);
console.log(jsonString);
game_list = JSON.parse(jsonString);
console.table(game_list);

const table = document.getElementById("game-content");

for(i in game_list.games)
  {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = game_list.games[i].name;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.textContent = game_list.games[i].category;
    row.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.textContent = game_list.games[i].company;
    row.appendChild(cell3);

    const cell4 = document.createElement("td");
    cell4.textContent = game_list.games[i].price;
    row.appendChild(cell4);

    table.appendChild(row);
  }
