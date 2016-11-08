import csv, math, json, sys
from functools import reduce

def read_in():
    target_file = sys.argv[1]
    # #Since our input would only be having one line, parse our JSON data from that
    return target_file

def main():
    filename = read_in()
    file = open(filename)
    csv_f = csv.reader(file)
    heart_data = []
    for row in csv_f:
        heart_data.append(row[0])
    del heart_data[0]
    del heart_data[0]
    list_len = len(heart_data)
    results = [float(i) for i in heart_data]
    print(results)

if __name__ == '__main__':
    main()
