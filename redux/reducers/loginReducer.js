//import {boolean} from 'yup';
import {
  LOGIN_RESPONSE,
  LOGIN_REQ,
  LOGIN_FAIL,
  LOG_OUT,LOGIN_USERNAME
} from '../actions/Constants';

function loginReducer(
  state = {
    loginData: {},

    status: '',

    statusCode: '',

    msg: '',

    extractName: '',



  },
  action,
) {
  switch (action.type) {
    case LOGIN_RESPONSE:
      let jsonData = action.payload;

      let extractStatus = jsonData.status;
      let extractStatusCode = jsonData.statuscode;

      //    let extractName = jsonData.data.name;

      return {
        status: extractStatus,

        statusCode: extractStatusCode,

        msg: jsonData.data,

        extractName: jsonData.data.name,
      };

      case LOGIN_USERNAME:
        let ddd = action.payload;
  
    
  
     
        return {
  
         ///  loginData:ddd,
          extractName: ddd.data.name,


        };
  



      


    case LOG_OUT:
      return {status: ''};

    default:
      return state;
  }
}

export {loginReducer};
