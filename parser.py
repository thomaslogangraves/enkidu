import csv, math, json, sys
from functools import reduce

def read_in():
data_file = sys.stdin.readlines()
#Since our input would only be having one line, parse our JSON data from that
return json.loads(lines[0])

file = open('HR.csv')
csv_f = csv.reader(file)
heart_data = []
for row in csv_f:
        heart_rate.append(row[0])
del heart_data[0]
del heart_data[0]
list_len = len(heart_rate)
results = [float(i) for i in heart_rate]
print(results)
