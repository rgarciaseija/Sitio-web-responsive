# import date time object
from datetime import datetime

# current date and times
now = datetime.now()

# r = read, t = text, a = append
with open("file.txt", "at", encoding="utf8") as f:
    date_time = now.strftime("%d-%b-%Y, %H:%M:%S")
    msg = "Log time: "
    # write on the file
    str = "found {0} of the word {1}. \n".format(msg, date_time)
    f.write(str)

# raed the file
with open("file.txt", "rt", encoding="utf8") as file:
    # read all lines in the file
    # store it on the lines variable
    print(file.read())
