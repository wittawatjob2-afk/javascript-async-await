// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
profile();
async function profile(){
  try{
const respond = await getJohnProfile();
 console.log(respond);
  }catch(err){
      console.log(err);
  }
}

