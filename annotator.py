import glob
import csv

mypath = "C:/Users/caojf/Desktop/proj/poke-techs/superset/"
bucket = "gs://validation-upload-test-1/"

ext = '.jpg'
multilabel = True
files = glob.glob(mypath + '/**/*'+ext, recursive=True)
row_list = []

for f in files:
    f = f.replace('\\', '/')
    f = f.replace(mypath,bucket)
    row = [f]
    if multilabel:
        labels = f.rsplit('/', 2)[1].split('_', 6)[1:]
        labels[-1] = labels[-1].replace('_', ' ')
    else:
        labels = [f.rsplit('/', 2)[1]]
    row.extend(labels)
    #print(row)
    row_list.append(row)
    
with open(mypath+'labels.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter=',')
    writer.writerows(row_list)