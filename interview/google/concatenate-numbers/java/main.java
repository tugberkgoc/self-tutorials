import java.util.ArrayList;

class Interval {
  public int start;
  public int end;

  public Interval(int start, int end) {
    this.start = start;
    this.end = end;
  }

  public int getStart() {
    return start;
  }

  public void setStart(int start) {
    this.start = start;
  }

  public int getEnd() {
    return end;
  }

  public void setEnd(int end) {
    this.end = end;
  }
}

class ConcatenateNumbers {
  public static void main(String[] args) {
    // (2-4), (4-5), (4-5) <- input
    ArrayList<Interval> listOfRanges = new ArrayList<>();
    listOfRanges.add(new Interval(2, 4));
    listOfRanges.add(new Interval(4, 5));
    listOfRanges.add(new Interval(4, 5));

    findConcatenateNumbers(listOfRanges, 0, "");

    System.out.println("================================");

    findConcatenateNumbersIncreasingOrder(listOfRanges, 0, "", 0);
  }

  // 244, 245, 254, 255, 344, 345, 354, 355, 444, 445, 454, 455 <- output
  static void findConcatenateNumbers(ArrayList<Interval> listOfRanges, int index, String temp) {
    if (index < listOfRanges.size()) {
      Interval interval = listOfRanges.get(index);
      int start = interval.getStart();
      int end = interval.getEnd();

      for (int i = start; i <= end; i++) {
        String newTemp = temp + i;
        findConcatenateNumbers(listOfRanges, index + 1, newTemp);
      }

    } else {
      System.out.println(temp);
    }
  }

  // 244, 245, x254x, 255, 344, 345, x354x, 355, 444, 445, x454x, 455 <- output
  static void findConcatenateNumbersIncreasingOrder(ArrayList<Interval> listOfRanges, int index, String temp, int min) {
    if (index < listOfRanges.size()) {
      Interval interval = listOfRanges.get(index);
      int start = interval.getStart();
      int end = interval.getEnd();

      for (int i = start; i <= end; i++) {
        if (min > i) {
          i = min;
        }

        String newTemp = temp + i;
        findConcatenateNumbersIncreasingOrder(listOfRanges, index + 1, newTemp, i);
      }

    } else {
      System.out.println(temp);
    }
  }
}
