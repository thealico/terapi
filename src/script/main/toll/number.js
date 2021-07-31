/* nParse    : Number Parse
@  Desc      : Format'i number'a cevir */

function nPar(strg,isNum) {
   
   if ( isNum && isNumeric(strg) ) return strg;

    var strg = strg || "";
    var decimal = '.';
    strg = strg.replace(/[^0-9$.,]/g, '');
    if(strg.indexOf(',') > strg.indexOf('.')) decimal = ',';
    if((strg.match(new RegExp("\\" + decimal,"g")) || []).length > 1) decimal="";
    if (decimal != "" && (strg.length - strg.indexOf(decimal) - 1 == 3) && strg.indexOf("0" + decimal)!==0) decimal = "";
    strg = strg.replace(new RegExp("[^0-9$" + decimal + "]","g"), "");
    strg = strg.replace(',', '.');
    return parseFloat(strg);

}


/* nFor   : Number Format 
@  Soruce : https://gist.github.com/xiel/5688446
@  Desc   : Number'i Format'a cevir */

function nFor(number, decimals, decPoint, thousandsSep,num) {
    
    decimals = ( set.page.cat == 'market' || set.page.mod == 'sepet' ) ? app.market.onda  :  decimals;
    
    //decimals = Math.abs(decimals) || ( decimals === false ? 2 : decimals );
    
    decimals = decimals || decimals===0 ? Math.abs(decimals) : 2;

    number = parseFloat(number);

    if (!decPoint || !thousandsSep) {
        decPoint = ',';
        thousandsSep = '.';
    }

    var roundedNumber = Math.round(Math.abs(number) * ('1e' + decimals)) + '';
    
    while (roundedNumber.length < decimals) {
        roundedNumber = '0' + roundedNumber;
    }

    var numbersString = decimals ? (roundedNumber.slice(0, decimals * -1) || 0) : roundedNumber;
    var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
    var formattedNumber = "";

    while (numbersString.length > 3) {
        formattedNumber += thousandsSep + numbersString.slice(-3)
        numbersString = numbersString.slice(0, -3);
    }

    if (decimals && decimalsString.length === 1) {
        while (decimalsString.length < decimals) {
            decimalsString = decimalsString + decimalsString;
        }
    }

    var str = (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');

    return num ? str.replace(',','') : str;
}



/* nFor   : Number Html Format 
@  Soruce : https://gist.github.com/xiel/5688446
@  Desc   : Number'i Format'a cevir */

function nHtm(str) {
   
    str = nFor(str);
    str = str.split(",");
    
    return '<span>'+str[0]+'</span><sup>,'+str[1]+'</sup>';
}


/* nFix  : Number Fix 
@  Desc  : Number'i odanlik kesim yapar yine number olarak doner */

function nFix(number,hane){

   hane = hane ? hane : 2;
   return parseFloat(number.toFixed(hane));
}


function nFit(num){

    let n;
    n = num.toString();
    n = n.split(".");
    
    if(!n[1]) return num;

    let onda = n[1] ? n[1].substr(0,2) : false;

    n = Number(n[0]+'.'+onda);

    return n;
}


/* mKur  : Money Kur
@  Desc  : Para kur turlerine gore donus yapar */

function mKur(str,id,span){
    
    if(id) {

        switch (id) {
            case 0:  $str = '₺'; break;
            case 1:  $str = '$'; break;
            case 2:  $str = '€'; break;
            case 6:  $str = 'f'; break;
            default: $str = '₺'; break;
        }    
    }
    
    let chf = '₣';

    if( span ){

        chf = span.chf == 'ico' ? '<i class="icon-franc"></i>'      : chf;
        chf = span.chf == 'htm' ? '<dd class="chf">f<i>i</i></dd>'  : chf;
        chf = span.chf == 'txt' ? '₣'                               : chf;
    }

    str = ( str == 'CHF' ) ? chf : str;

    return str;
}

/* percent_diff  
@  Desc  : A ve B arası yuzde farki */

function percent_diff(a,b){

    var int = 100 - (100/a)*b;
    
    int =  int > 0 ? int : 0 ;

    return nFix(int);
}

/* percent_diff  
@  Desc  : B yüzde kac inmis  */

function percent_disc(a,b,c,num){

   
    var int =  c ? ((100/a)*b) : 100 - ((100/a)*b);
    
    int =  int > 0 ? int : 0 ;

    return num ? int : nFix(int);
}




