const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

describe('Pruebas unitarias en user-controller', () =>{

  test('add user to userController', () => {    
      let user = new User(1234,"Santiago", "santiago@generation.org");
      userController.add(user);  
      //console.log(userController.getUsers());  
      expect(userController.getUsers()).toContain(user);
      //toCointain:arreglo
    });
  
  test('remove user to userController', () => {    
      let user = new User(1234,"Santiago", "santiago@generation.org");
      userController.add(user);    
      userController.remove(user);
      expect(userController.users).not.toContain(user);
    });
  
    test ('findByEmail userController', () =>{
      let email = 'nayelli@gmail.com';
      let user = new User(123213, 'Nayelli Gutiérrez Pérez', email );
      userController.add(user);
      expect(userController.findByEmail(email)).toEqual(user);
      //toEqual: compara
    })
  //buscar el usuaro por el id
  test ('findById userController', () =>{
    let id = 123213;
    let user = new User( id, 'Nayelli Gutiérrez Pérez','nayelli@gmail.com');
    userController.add(user);
    expect(userController.findById(id)).toEqual(user);
    //toEqual: compara
  })
  
  });
  
  