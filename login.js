const axios = require('axios');
const qs = require('qs');
const { calcSign, rsa } = require("./utils");

// 登录西电体育账号
function login(username, password) {
  return new Promise(async (resolve, reject) => {
    const body = {
      uname: username,
      pwd: rsa(password),
      openid: '',
    };
    const timestamp = new Date().getTime();
    const response = await axios.post('https://xd.boxkj.com/app/h5/login', qs.stringify(body),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          version: '99999',
          channel: 'H5',
          timestamp: timestamp,
          type: 0,
          sign: calcSign(body),
        }
      }
    );
    const responseData = response.data;
    if (responseData?.returnCode !== '200') {
      console.error(responseData);
      reject();
    } else {
      resolve(responseData);
    }
  });
}

module.exports = { login };