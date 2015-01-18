/**
 * Created by Moc Tran on 1/18/2015.
 */
var Add = function (numbers) {
    if(numbers != undefined || numbers != null){
        if(numbers === ""){
            return 0;
        }
        else{
            var result = 0;
            var arrayByDefault = numbers.split(",");
            for(var i = 0; i < arrayByDefault.length; i++){
                var num = arrayByDefault[i];
                if(num.indexOf("\n") > -1){
                    var arrayByLines = num.split("\n");
                    for(var i = 0; i < arrayByLines.length; i++){
                        result += parseInt(arrayByLines[i]);
                    }
                }
                result += parseInt(arrayByDefault[i]);
            }
            return result;
        }
    }
}