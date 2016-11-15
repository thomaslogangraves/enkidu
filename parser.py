import csv, math, json, sys
from functools import reduce

def read_in():
    target_file = sys.argv[1]
    return target_file

def main():
    file_name = read_in()
    file = open(file_name)
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
