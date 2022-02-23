function rightPlace(str, char, correct) {
  let tmpWord = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '_') {
      tmpWord += char;
    } else {
      tmpWord += str[i];
    }
  }

  if (tmpWord == correct) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}

rightPlace('Str_ng', 'I', 'Strong');
