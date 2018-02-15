const points = [ [-2, 4], [0, -2], [-1, 0], [3, 5], [-2, -3], [3, 2] ]

let distanceArray = []

const sortDistance = (x, y) => {
  return x.distance - y.distance
}

const getDistance = (x2, y2, x1, y1) => {
  const dx = (x2 - x1) * (x2 - x1)
  const dy = (y2 - y1) * (y2 - y1)
  return Math.sqrt(dx + dy)
}

/**
 * Returns K closest points to the origin. (Default at <0, 0>)
 * 
 * @param {Number[[]]} points Array of points.
 * @param {Number} k The amount of points close to the origin.
 * @param {Number[]} origin Center vector to do distance comparison with.
 */
const getKClosestPoints = (points, k, origin = [0, 0]) => {
  // Generate an object to work with
  const setOfPointData = points.reduce((result, point, index) => {
    const distances = getDistance(point[0], point[1], origin[0], origin[1])
    distanceArray.push(distances)
    const computedObj = {
      data: [...Array(index+1).keys()].map(x => {
        return {
          point: points[x],
          distance: distanceArray[x]
        }
      })
    }
    return {...result, ...computedObj}
  }, {})
  
  // Sort it's distances
  setOfPointData.data.sort(sortDistance)
  
  // Filter by k least distances
  setOfPointData.data.splice(k, setOfPointData.data.length)
  
  // Return the closest points
  const closestPoints = setOfPointData.data.map(x => x.point)
  
  return closestPoints
}

getKClosestPoints(points, 3)