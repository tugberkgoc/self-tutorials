# fibonacci => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

# f(0) = 0
# f(1) = 1
# f(2) = (0 + 1) = 1
# f(3) = (1 + 1) = 2
# f(4) = (1 + 2) = 3
# f(5) = (2 + 3) = 5
# f(6) = (3 + 5) = 8

# f(0) = 0
# f(1) = 1
# f(n) = f(n-1) + f(n-2)

def fibonacci(n):
    if n > 1:
        return fibonacci(n - 1) + fibonacci(n - 2)
    else:
        return n


fibonacci(6)  # 8
