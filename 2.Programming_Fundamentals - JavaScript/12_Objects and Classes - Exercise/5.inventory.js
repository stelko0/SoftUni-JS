function inventory(array) {
  let heroes = [];
  for (let el of array) {
    arr = el.split(' / ');
    let obj = {
      Hero: arr[0],
      lvl: Number(arr[1]),
      items: arr[2].split(', '),
    };
    obj.items.sort((a, b) => a.localeCompare(b));
    obj.items = obj.items.join(', ');
    heroes.push(obj);
  }
  heroes.sort((a, b) => a.lvl - b.lvl);
  for (let k of heroes) {
    console.log(`Hero: ${k.Hero}`);
    console.log(`level => ${k.lvl}`);
    console.log(`items => ${k.items}`);
  }
}

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
