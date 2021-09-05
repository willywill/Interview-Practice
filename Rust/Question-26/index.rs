use std::collections::HashSet;

// Returns tha unique array of numbers without duplicates
pub fn dedupe(nums: Vec<i32>) -> Vec<i32> {
  // Create a new hash set to store unique values in
  let mut set: HashSet<i32> = HashSet::new();

  // Loop over the array and insert all of the values into the hash set
  for num in nums {
    set.insert(num as i32);
  }

  // Convert the hash set back into an array
  let res: Vec<_> = set.into_iter().collect();

  // Return the temporary array
  return res;
}