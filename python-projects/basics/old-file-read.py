# open a file.txt for reading
# rt means read (r) the file as text (t)
# note: r and t are both defaults
# meaing that open() function will by default
# read (r) the file and handle it as a text (t)
f = open("file.txt", "rt", encoding="utf8")

# f = open("file.txt", "rt") will cause python to throw an error:
# File "C:\Python310\lib\encodings\cp1252.py", line 23, in decode ...
# UnicodeDecodeError: 'charmap' codec can't decode byte 0x9d in position 412: character maps to <undefined>
# I think that Python, by default will us CP1252 encoding.
# The file I'm trying to read is not using that encouding.
# The default is UTF8. So, to resolve the issue, I specify the encoding to utf8

#
# let's print the file on the screen
# the line below basically means
# read the content of the file and print
# it on the screen
#print(f.read())

# Now, let's try to search for occurences of a particular string
# let's hard code the search parameters for now.

find_str = 'million'

# NOTE: if the file is not too large, these approaches will work just fine.
# Otherwise, let's look for another approach.

# read the file as string and then do the search from there
file_str = f.read()
ctr = 0

# TODO: What's with again?
with open("file.txt", "rt", encoding="utf8") as file:
    # read all lines in the file
    # store it on the lines variable
    lines = file.readlines()
    # loop through each line
    for line in lines:
        # TODO: Why is this returning -1
        # print(line.find(file_str, 0))
        # while this works fine?
        if find_str in line:
            # count it
            ctr += 1
            print(lines.index(line))

# display
print("found {} of the word {}. ".format(ctr, find_str))

# close the file stream
f.close()
