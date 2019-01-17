import pandas as pd
from influxdb import DataFrameClient

HOST='influxdb'
PORT=8086
DATABASE = 'power'
MEASUREMENT = 'data'
FILENAME = './data.csv'
BATCH_SIZE = 1000
RESAMPLE = '15T'

def main():

    # Read the data into CSV, and output as a
    df = pd.read_csv(FILENAME,
                     infer_datetime_format=True,
                     parse_dates=['datetime'],
                     index_col='datetime')
    df = df.resample(RESAMPLE).mean().interpolate('time').dropna()

    df = df.shift(periods=6, freq='H')

    influx = DataFrameClient(HOST, PORT)

    try:
        influx.create_database(DATABASE)
    except:
        print("Database already exists.")

    influx.write_points(df, MEASUREMENT, batch_size=BATCH_SIZE, database=DATABASE)

    print("Data successfully published to InfluxDB")

if __name__ == "__main__":
    main()

