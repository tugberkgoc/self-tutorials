# (2-4), (4-5), (4-5) <- input
list_of_ranges = (2, 4), (4, 5), (4, 5)


# 244, 245, 254, 255, 344, 345, 354, 355, 444, 445, 454, 455 <-  output


def find_concatenate_numbers(list_of_ranges, index=0, temp=''):
    if(index < len(list_of_ranges)):
        start = list_of_ranges[index][0]
        end = list_of_ranges[index][1]

        for x in range(start, end + 1):
            newTemp = temp + str(x)
            find_concatenate_numbers(list_of_ranges, index + 1, newTemp)

    else:
        print(temp)


find_concatenate_numbers(list_of_ranges)

print("================================")

# 244, 245, x254x, 255, 344, 345, x354x, 355, 444, 445, x454x, 455 <- output


def find_concatenate_numbers_increasing_order(list_of_ranges, index=0, temp='', prevNumber=0):
    if(index < len(list_of_ranges)):
        start = list_of_ranges[index][0]
        end = list_of_ranges[index][1]

        for x in range(start, end + 1):
            if prevNumber > x:
                continue

            newTemp = temp + str(x)
            find_concatenate_numbers_increasing_order(
                list_of_ranges, index + 1, newTemp, x)

    else:
        print(temp)


find_concatenate_numbers_increasing_order(list_of_ranges)
