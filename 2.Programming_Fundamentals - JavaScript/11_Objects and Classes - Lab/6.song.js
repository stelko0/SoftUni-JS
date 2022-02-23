function songs(arr) {
  let songs = Number(arr.shift());

  for (let i = 0; i < arr.length - 1; i++) {
    let splitted = arr[i].split('_');
    let type = splitted[0];
    let name = splitted[1];
    let time = splitted[2];
    let lastEl = arr[arr.length - 1];
    if (type === lastEl) {
      console.log(`${name}`);
    } else if (lastEl === 'all') {
      console.log(`${name}`);
    }
  }
}
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
