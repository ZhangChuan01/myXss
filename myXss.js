export const myxss = {
    //1.用正则表达式实现str验证,转码
    strEncodeByRegExp : function (str){  
        let s = "";
        if(str.length == 0) return "";
        let reg = /[&<">' ]/g;
        if(reg.test(str)){
            s = str.replace(/&/g,"&amp;");
            s = s.replace(/</g,"&lt;");
            s = s.replace(/>/g,"&gt;");
            s = s.replace(/ /g,"&nbsp;");
            s = s.replace(/\'/g,"&#39;");
            s = s.replace(/\"/g,"&quot;");
            return s; 
        }else{
            return str;
        }
    },
    //2.用正则表达式实现str验证,解码
    strDecodeByRegExp : function (str){  
        let s = "";
        if(str.length == 0) return "";
        let reg = /(&amp;|&lt;|&gt;|&nbsp;|&#39;|&quot;)/g;
        if(reg.test(str)){
            s = str.replace(/&amp;/g,"&");
            s = s.replace(/&lt;/g,"<");
            s = s.replace(/&gt;/g,">");
            s = s.replace(/&nbsp;/g," ");
            s = s.replace(/&#39;/g,"\'");
            s = s.replace(/&quot;/g,"\"");
            return s;                            
        }else{
            return str;
        }
    }
};
