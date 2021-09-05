use std::collections::HashMap;

// Returns the two indices for the numbers that add up to the target
pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    // Create a new hashmap, key is the compliment, value is the index
    let mut m: HashMap<i32, i32> = HashMap::new();
        
    // Loop through the array of numbers and look for matches
    for (i, v) in nums.iter().enumerate() {
        match m.get(&(target - *v)) {
            Some(&i2) => {
                // If match, then return the index pair
                return vec![i2, i as i32]
            },
            None => {
                // If no match, insert index pair
                m.insert(*v, i as i32)
            },
        };
    }
    // Return empty vector if no matches found
    vec![]
}