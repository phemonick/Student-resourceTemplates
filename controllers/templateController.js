import "isomorphic-fetch";
class MyController{

  static async getList(req, res){
  try{
    console.log(`https://studentresourc.herokuapp.com/api/v1/list`)
    let data = await fetch(`https://studentresourc.herokuapp.com/api/v1/list`)
    let jso = await data.json();
    let response = jso.result;

     res.render('list', {title: response})
      console.log(response)
  }
  catch(err){
    console.log(err)
  }
  }

  static async createResource(req, res){

  }
  static home(req, res){
    res.render('index')
  }
  static userform(req, res){
    res.render('form')
  }
}

export default MyController;
