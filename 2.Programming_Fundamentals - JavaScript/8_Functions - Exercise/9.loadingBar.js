function loadingBar(value) {
  let loading = [];
  if (value === 100) {
    console.log('100% Complete!');
    console.log('[%%%%%%%%%%]');
    return;
  } else {
    for (let i = 10; i <= 100; i += 10) {
      if (i <= value) {
        loading.push('%');
      } else {
        loading.push('.');
      }
    }
    console.log(`${value}% [${loading.join('')}]`);
    console.log('Still loading...');
  }
}

loadingBar(51);
