# this defines a string
# a string in python is also an array
name = "moises"

# there are several ways to embed a 
# string into a string literal in Python.
# String literals are those enclosed in ""

# this is the oldest. using % operator
# here, we use %s as a placeholder for our string
# we use teh % to embed the value of our string variable
print("Hello, %s" % name)

# this is an integer vaiable
age = 38

# here, we're doing the same thing as above, except
# that we are using two variables (and one is and integer)
# %s can also be used as a placeholder for integers
print("Hi, My name is %s and I'm %d years old." %(name, age))

# this is the same as line 20. except that we are using the str.format() approach
# we can also enclose the string directly to print function for display
str = "Hello, my name is {}. I'm {} years old.".format(name, age)
print(str)

# this is the new approact
str2 = f"Hello, my name is {name}. I'm {age} years old."
print(str2)

# this will also work
# this will display 100
print(f"{10*10}")

# this too
# this will capitalize the entire string
print(f"{name.upper()}")