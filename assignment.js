function kilometerToMeter(kilo){

    meter = kilo*1000;

    if(meter<0){
        return "Unit cant be negative";
    }
    else if(typeof(kilo)=="string"){
        return "invalid meter !";
    }
    else{
        return meter;
    }

}

function budgetCalculator(watch_q,mobile_q,laptop_q){
    if(typeof(watch_q)=="string" || typeof(mobile_q)=="string" || typeof(laptop_q)== "string" || watch_q < 0 || mobile_q < 0 || laptop_q < 0){
        return "invalid quantity!!";

    }
    else{
        return watch_q*50 + mobile_q*100 + laptop_q*500;
    }
}

function hotelCost(day){
    if(typeof(day)=="string" || day< 0){
        return "Invalid Input !!!";

    }
    else{
        var total = 0;

        if(day<=10){
            var first10 = day*100;
            total = first10;
        }
        else if(day<=20){
            var first10 = 10*100;
            remaining = day - 10;
            var second10 = remaining*80;
            total = first10 + second10;
        }
        else{
            var first10 = 10 * 100;
            var second10 = 10 * 80;
            var remaining = day - 20;
            var thirdpart = remaining*50;
            total = first10 + second10 + thirdpart;
        }

        return total;
    }
}

function megaFriend(arr){
    var long1= 0;
    var largest
    if(typeof(arr)== 'string' || typeof(arr)=='number'){
      return "invalid input";
    }
    else{
      for (i=0; i<arr.length; i++){
        if (arr[i].length > long1){
          long1= arr[i].length;
          largest = arr[i];
        }
  
    }
    return largest;
    }
  }

