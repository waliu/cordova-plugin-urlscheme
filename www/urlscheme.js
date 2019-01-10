var exec = require('cordova/exec');

var UrlScheme={
    Init:(successFn,errorFn)=>{
        console.log("你被调用了");
      exec(successFn,errorFn,'UrlScheme','Init',[]);
    }
};
module.exports = UrlScheme;
