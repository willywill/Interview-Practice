#include <iostream>
#include <string.h>
#include <algorithm>

using namespace std;

void Print (int const &n)
{
  cout << n << endl;
}

int sign (int x)
{
  return x <= -1 ? (x * -1) : x;
}

struct Rectangle
{
  unsigned int x;
  unsigned int y;
  unsigned int width;
  unsigned int height;
};

// TODO: Use a pointer here to pass the ref instead of recreating data.
int GetIntersectionArea (Rectangle r0, Rectangle r1)
{
  int left_0 = r0.x;
  int right_0 = r0.x + r0.width;
  int bottom_0 = r0.y;
  int top_0 = r0.y + r0.height;

  int left_1 = r1.x;
  int right_1 = r1.x + r1.width;
  int bottom_1 = r1.y;
  int top_1 = r1.y + r1.height;

  int f_left = max(left_0, left_1);
  int f_right = min(right_0, right_1);
  int f_top = min(top_0, top_1);
  int f_bottom = max(bottom_0, bottom_1);

  int unionSurfaceArea = sign((f_right - f_left) * (f_bottom - f_top));
  return unionSurfaceArea;
}

// TODO: Consider using the center of the rectangle to do half area calculations - https://gamedev.stackexchange.com/questions/586/what-is-the-fastest-way-to-work-out-2d-bounding-box-intersection
bool isAABBIntersect (Rectangle r0, Rectangle r1)
{
  bool xmin = r0.x < r1.x + r1.width,
  xmax = r0.x + r0.width > r1.x,
  ymin = r0.y < r1.y + r1.height,
  ymax = r0.height + r0.y > r1.y;

  // If there is no space between the edges of the rectangles, it must be a collision.
  if (xmin && xmax && ymin && ymax) return true;
  else return false;
}

// Points are based on bottom left as origin
int main ()
{
  Rectangle r0 = {2, 3, 4, 7}; // This produces a rect between the points (2, 3) lower-left and (6, 10) upper-right
  Rectangle r1 = {3, 2, 5, 4}; // This produces a rect between the points (3, 2) and (8, 6)

  string doTheyIntersect = isAABBIntersect(r0, r1) ? "Yes, with a surface area of: " + to_string(GetIntersectionArea(r0, r1)) + "in²" : "No";

  cout << doTheyIntersect;
  return 0;
}
