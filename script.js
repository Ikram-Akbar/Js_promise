const promise = new Promise((resolved, reject) => {
  //work Logic :
  const isMale = true;

  if (isMale) {
    resolved('Promise resolved successfull');
  } else {
    reject('Promise Rejected');
  }
});

promise
  .then((message) => {
    console.log("Success: ",message);
  })
  .catch((err) => {
    console.log('Error : ', err);
  });
