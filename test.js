const arr = (n) => {
  const newArr = [];
  for (let i = 1; i <= 50; i++) {
    if (n / 2 === 0) {
      newArr.push(n);
    }
  }
  return newArr;
};
