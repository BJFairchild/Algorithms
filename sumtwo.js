var twoSum = function(nums, target) {
    for (i=0; i<nums.length; i++) {
        for (x=i+1; x<nums.length; x++){
            if(nums[i] + nums[x] == target){
                return [i,x]
            }
        }
    }
};

//could be optimized