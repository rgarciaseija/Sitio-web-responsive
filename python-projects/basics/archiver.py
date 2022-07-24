import os
from datetime import datetime, timezone

# make this configurable
path = r"c:\Users\lenovo\Documents\Learning Resources"

# os.listdir will only return the file name
for f in os.listdir(path):
    # get full path
    fullPath = os.path.join(path, f)
    modified = datetime.fromtimestamp(
        os.stat(path).st_mtime, tz=timezone.utc).strftime('%Y-%m-%d-%H:%M')
    print(modified)
