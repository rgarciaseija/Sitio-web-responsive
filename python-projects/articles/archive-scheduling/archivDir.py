from pathlib import Path
import configparser
import shutil
import arrow

# TODO: glob vs rglob
#       specifically glob('**/*')


# def displayFiles(dir: Path):
#     for file in Path(dir).glob('**/*'):
#         # loop inside each path
#         print(file.absolute())

# def archiveDir(dir: Path):
#     print("Arhive the directory here.")

config = configparser.ConfigParser()

# read configuration file
config.read('config_file.config')

# let's get the local timezone
localTz = arrow.utcnow()


# let's display each specified directories
# TODO: Learn various ways of iterating through collections in Python

# filesPath will now become a list
filesPath = [str(str_val)
             for str_val in config['MONITOR_DIR']['paths'].split(',')]

# archive destination path
archiveDest = config['ARCHIVE_DESTINATION']['path']

# loop through the specified folder to archive
for str in filesPath:
    # let's get the folder\directory name
    dirName = str[(str.rindex('/')+1):len(str)]
    fullArchiveDir = '{}/{}'.format(archiveDest, dirName)

    # try to create the full archive directory
    # do nothing if the directory alraedy exist
    try:
        Path(fullArchiveDir).mkdir()
    except FileExistsError:
        pass

    # arhive name is the dirName plus the local date and time
    # for the date time format, we use the arrow module
    archiveName = dirName + localTz.format('YYYY_MM_DD_HH_mm')

    # base name is the archive name along with its
    # complete path minus the file extension (i.e. .zip)
    baseName = '{}/{}'.format(fullArchiveDir, archiveName)
    # this is a bit of a tricky part
    # TODO: read shutil documentation
    shutil.make_archive(baseName, 'zip', str)

    print(archiveName)
