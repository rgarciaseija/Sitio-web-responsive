import time

sleep = 1
find_str = 'Done'
found_str = False

print("Will now look for {}".format(find_str))
print("Found the string? {}".format(found_str))

# open file for reading
with open("file.txt", "rt", encoding="utf8") as file:
    # keep looking for the string in the file
    # NOTE: this will keep looking for the string in the file
    # untill it finds that string
    while found_str != True:
        # let's read each lines
        for line in file.readlines():
            # let's try to find specific word
            if find_str in line:
                print("Found {}! Exiting loop".format(find_str))
                found_str = True
                break  # out of for loop
            #else:
            #    continue  # looping

        if found_str:
            break
        else:
            print("String not found. Sleeping for half a sec before continuing.")
            time.sleep(sleep)
            continue

print("Found the string? {}".format(found_str))
print("Done.")
