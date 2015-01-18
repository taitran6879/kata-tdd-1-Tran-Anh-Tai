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
            var nums = numbers.split(",");
            for(var i = 0; i < nums.length; i++){
                result += parseInt(nums[i]);
            }
            return result;
        }
    }
}