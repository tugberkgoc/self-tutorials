# (2-4), (4-5), (4-5) <- input
listOfRanges = (2, 4), (4, 5), (4, 5)


# 244, 245, 254, 255, 344, 345, 354, 355, 444, 445, 454, 455 <-  output


def findConcatenateNumbers(listOfRanges, index=0, temp=''):
    if(index < len(listOfRanges)):
        start = listOfRanges[index][0]
        end = listOfRanges[index][1]

        for x in range(start, end + 1):
            newTemp = temp + str(x)
            findConcatenateNumbers(listOfRanges, index + 1, newTemp)

    else:
        print(temp)


findConcatenateNumbers(listOfRanges)

print("================================")

# 244, 245, x254x, 255, 344, 345, x354x, 355, 444, 445, x454x, 455 <- output


def findConcatenateNumbersIncreasingOrder(listOfRanges, index=0, temp='', prevNumber=0):
    if(index < len(listOfRanges)):
        start = listOfRanges[index][0]
        end = listOfRanges[index][1]

        for x in range(start, end + 1):
            if prevNumber > x:
                continue

            newTemp = temp + str(x)
            findConcatenateNumbersIncreasingOrder(
                listOfRanges, index + 1, newTemp, x)

    else:
        print(temp)


findConcatenateNumbersIncreasingOrder(listOfRanges)
