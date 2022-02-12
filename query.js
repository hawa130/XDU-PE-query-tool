const axios = require('axios');
const qs = require('qs');
const { calcSign } = require("./utils");
const { login } = require('./login');

const username = process.argv[2];
const password = process.argv[3];

const body = {
  pageIndex: 1,
  pageSize: 150,
  userNum: username,
  sysTermId: 11,
};
const commonHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  channel: 'H5',
  version: '99999',
  type: 0,
  sign: calcSign(body),
};

// 两个查询函数返回的结构
// {
//   total: number,
//   data: [
//     {
//       sysUserName: String,
//       machineName: String,
//       weekNum: String,
//       punchDay: String,
//       punchTime: String,
//       state: String
//     }
//   ],
//   returnCode: String,
//   returnMsg: null,
//   returnData: null
// }

// 查询有效打卡记录
function queryOK(loginInfo) {
  return new Promise(async (resolve, reject) => {
    loginInfo = loginInfo || await login(username, password);
    const responseOK = await axios.post('https://xd.boxkj.com/app/stuPunchRecord/findPagerOk',
      qs.stringify(body),
      {
        headers: {
          ...commonHeaders,
          token: loginInfo?.data.token,
          timestamp: new Date().getTime(),
        }
      }
    );
    if (responseOK.data?.returnCode !== '200') {
      console.error(responseOK.data);
      reject();
    } else {
      resolve(responseOK.data);
    }
  });
}

// 查询全部打卡记录
function queryTotal(loginInfo) {
  return new Promise(async (resolve, reject) => {
    loginInfo = loginInfo || await login(username, password);
    const responseTotal = await axios.post('https://xd.boxkj.com/app/stuPunchRecord/findPager',
      qs.stringify(body),
      {
        headers: {
          ...commonHeaders,
          token: loginInfo?.data.token,
          timestamp: new Date().getTime(),
        }
      }
    );
    if (responseTotal.data?.returnCode !== '200') {
      console.error(responseTotal.data);
      reject();
    } else {
      resolve(responseTotal.data);
    }
  });
}

// 同时查询两种类型的打卡记录
function query() {
  return new Promise(async (resolve) => {
    const loginInfo = await login(username, password);
    const responseOK = await queryOK(loginInfo);
    const responseTotal = await queryTotal(loginInfo);
    if (responseOK.returnCode === '200' && responseTotal.returnCode === '200') {
      resolve({
        OK: responseOK,
        total: responseTotal,
      });
    }
  });
}

query()
  .then(data => {
    console.log(`你的有效打卡次数为：${data.OK.total}`);
    console.log(`你的总打卡次数为：${data.total.total}`);
    const last = data.total?.data.length - 1;
    const dateTime = `${data.total?.data[last]?.punchDay} ${data.total?.data[last]?.punchTime}`;
    console.log(`你最近打卡于 ${dateTime} 在 ${data.total.data[last]?.machineName}`);
  });

module.exports = { query, queryOK, queryTotal, login };