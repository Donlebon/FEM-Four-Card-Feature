function countup(n) {
    if (n < 1) {
      return [];
    } else {
      let countArray = countup(n - 1);
      countArray.push(n);
      return countArray; 
      debugger
    }
  }
  
  console.log(countup(5));