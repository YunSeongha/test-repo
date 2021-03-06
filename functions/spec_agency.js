'use strict';

const data = require('./data.json');
const maxlength = data.length;

async function spec_agency(lat, lng, agency){
  var max = 100;//임시로 100
  var temp, result, lnn, laa;
  var agen = agency.trim();
  console.log('in func' + agency);
  for(var i=0; i<maxlength; i++){
    lnn = data[i].lo - lng; //a^2+b^2=c^2임 그래서 직선거리를 구함
    laa = data[i].la - lat;
    temp = Math.sqrt((lnn*lnn)+(laa*laa)); //대각선 거리를 계산
    if(temp < max && (data[i].entrps == agen)){ //만약에 max보다 지금 계산한게 작으면
      max = temp; //지금 계산한게 max
      result = data[i]; //그 데이터를 결과에 저장
    }//if
  }//for
  console.log('in func result '+result);
  return result;
}//spec_Agency
module.exports = {
  spec_agency:spec_agency
};
