const pairSumOrLess = (nums, target) => {
    const sum = [];
    const pair = [];
    let mIndex = 0;
    let i = 0;
    let j = 1;
    while (i < nums.length) {
        while (j < nums.length) {
            if (nums[i] + nums[j] === target) 
                return [nums[i], nums[j]].sort();
            else if (nums[i] + nums[j] < target) {
                sum.push(nums[i] + nums[j]);
                pair.push([nums[i], nums[j]].sort());
            }
            j++
        }
        i++
        j = i + 1;
    }
    if (sum.length === 0) return [-1, -1];
    mIndex = sum.indexOf(Math.max(...sum));
    return pair[mIndex];
}