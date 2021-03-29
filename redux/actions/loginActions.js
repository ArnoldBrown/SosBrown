import {
  LOGIN_FAIL,
  LOGIN_REQ,
  LOGIN_RESPONSE,
  LOGIN_USERNAME,
  LOG_OUT,
} from './Constants';
import {APILINKS} from '../../utils/apilinks';

// export const loginAction = (values, notificationValues, load) => async (dispatch) => {
//   try {
//     var form = new FormData();
//     let phoneNo = values.countrycode + values.mobilenumber;
//     form.append('phone', phoneNo);

//     await fetch(APILINKS.BASE_URL + APILINKS.LOGIN_POHONE_URL, {
//       method: 'POST',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//       }),
//       body: form,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("lllll",data)
//         dispatch({ type: LOGIN_RESPONSE, payload: data });
//       });
//   } catch (error) {

//     dispatch({ type: LOGIN_FAIL });
//   }
// };

export const otpAction = (valToken, valPhone, valOtp, from) => async (
  dispatch,
) => {
  try {
    var form = new FormData();
    form.append('api_token', valToken);
    form.append('phone', valPhone);
    form.append('otp', valOtp);
    var urlll = '';
    if (from === 'OLD') {
      urlll = APILINKS.OTP_LOGIN_AUTH_URL;
    } else {
      urlll = APILINKS.OTP_AUTH_URL;
    }

    await fetch(APILINKS.BASE_URL + urlll, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('lllcccll', data);
        dispatch({type: LOGIN_RESPONSE, payload: data});
      });
  } catch (error) {
    dispatch({type: LOGIN_FAIL});
  }
};

export const Ltout = () => async (dispatch) => {
  try {
    dispatch({type: LOG_OUT});
  } catch (error) {
    console.log(error);
  }
};

export const setUseraction = (token, name) => async (dispatch) => {
  try {
    var form = new FormData();

    form.append('api_token', token);
    form.append('name', name);

    fetch(APILINKS.BASE_URL + APILINKS.UPDATE_NAME_URL, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        dispatch({type: LOGIN_RESPONSE, payload: data});
      });
  } catch (error) {
    console.log(error);
  }
};


export const setFbLogin = (fid, femail, fname) => async (dispatch) => {
  try {
    var form = new FormData();

    form.append('fb_id', fid);
    form.append('name', fname);
    form.append('email', femail);
    form.append('dob', '');

    fetch(APILINKS.BASE_URL + APILINKS.FB_LOGIN_URL, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        dispatch({type: LOGIN_RESPONSE, payload: data});
      });
  } catch (error) {
    console.log(error);
  }
};
