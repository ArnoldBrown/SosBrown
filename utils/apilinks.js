export const APILINKS = {
  BASE_URL: 'http://tokyo.shiftlogics.com/',

  IMG_URL: 'http://shiftlogics.com/Tokyo/',

  IMG_URL_2: 'http://tokyo.shiftlogics.com/',

  NEW_POST_URL: 'api/newpost/viewNewpost',

  //AUTH
  //LOGIN_POHONE_URL: 'api/user/loginphone', //phone

  LOGIN_POHONE_URL: 'api/user/loginphonenew', //phone

  GET_OTP_URL: 'api/user/sendotp', //phone,api_token

  OTP_AUTH_URL: 'api/user/otpverified', //phone,api_token,otp

  OTP_LOGIN_AUTH_URL: 'api/user/loginotpverified', //phone,api_token,otp

  UPDATE_NAME_URL: 'api/user/updatename', //name,api_token

  //FACEBOOK_LOGIN
  FB_LOGIN_URL: 'api/user/loginfb', //fb_id, name, email, dob
  
  //EDIT_PROFILE
  UPDATE_PROFILE_URL: 'api/user/newprofileupdate', //api_token,name,email,referral_code

  //OUTLET
  OUTLET_URL: 'api/outlet/viewOutlet', //phone

  //RESERVATION
  RESERVATION_URL: 'api/reservation/viewReservation', //api_token

  RESERVATION_CANCEL_URL: 'api/reservation/cancelReservation', //id

  //CATALOG
  GET_CATEGORY_URL: 'api/category/betacategory', //api_token

  GET_SUBCATEGORY_URL: 'api/category/betasubcategory', //cateid

  GET_PRODUCT_URL: 'api/product/betaproductbyid', //cateid,subcateid

  //VOUCHER
  VOUCHER_URL: 'api/voucher/viewVoucherAPP', //api_token

  ADD_FAVOURITE_URL: 'api/favourite/addFavourite', //api_token,voucherID

  //FAVOURITE_LIST
  HOME_PRODUCT_URL: 'api/favourite/viewFavourite', //api_token

  //REDEEM
  ADD_REDEEM_URL: 'api/redeem/addRedeem',//api_token,voucherID
  
  CHECK_REDEEM_URL: 'api/redeem/checkRedeem',//api_token,voucherID

  

  //FEEDBACK
  POST_FEEDBACK_URL: 'api/user/feedback',

  //TERMS
  GET_TERMS_URL: 'api/setting/viewTerms',
  //PRIVACY
  GET_PRIVACY_URL: 'api/setting/viewPrivacyPolicy',
};
