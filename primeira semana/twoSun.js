function twoSun(nums, target) {

    let contador =0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            contador++;
            if (nums[i] + nums[j] === target) {
                console.log("Contador:",contador);
                return [i, j];
            }
        }
    }
}

console.log(twoSun([2, 7, 11, 15], 18)); 