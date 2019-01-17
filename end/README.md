# Full-Stack Interview Exercise

We've prepared an exercise to help with the technical evaluation portion of our interview process, while also providing an idea of the technology stack and data that you'd be dealing with on a day-to-day basis.
**There is no single "correct" answer to this assignment, as we are looking to understand how you solve a problem and the thought process behind the implementation.**
We also use this exercise to facilitate a discussion during the on-site interview process, so please come prepared to discuss your solution to the exercise in more detail.

## What were using
* [Node 8.X LTS (Carbon)](https://nodejs.org/en/download/)
* [React 16](https://reactjs.org/)
* [Webpack 4](https://webpack.js.org/)
* [React Router 4](https://reacttraining.com/react-router/web)
* [Semantic UI](react.semantic-ui.com)
* [SASS](https://sass-lang.com/)
* [Babel](https://babeljs.io/)
* [Yarn](https://yarnpkg.com/en/)

## Exercise

For this exercise, you will be developing a dashboard application using ReactJS that will display some building load information.  We've provided the following for use in the implementation of the dashboard application:

- A CSV file (data.csv) with a 1-year of 15-minute interval timeseries data containing building energy usage and local weather information
- InfluxDB database instance (via docker-compose) that you can use to store and query building load information (pre-loaded with a "power" database containing the CSV data)
- A base ReactJS project (webapp) that contains a seed project using [Semantic UI](https://react.semantic-ui.com/).

We would like you to update the dashboard application (webapp) to retrieve the building load data using the InfluxDB query API and to display the data within the dashboard view.  You are encouraged to use the existing UI components in the webapp's Dashboard view, updating them to display the data queried from InfluxDB. The bulk of the work will likely be in the `src/components/Dashboard.jsx` file. However, feel free to perform any refactoring of the code you feel necessary, and also feel free to include any additional libraries or frameworks that you feel might be appropriate.

The following visualizations should be implemented:
- A line chart that displays the entire year of building load data (`USAGE_KWH` field in InfluxDB)
  - The line chart should allow for selection of a sub-range of the data
- Display the Min/Max/Avg load values for the year in 3 standalone boxes
  - Bonus: Update so that these values update reactively based on the range of data selected in the line chart
- We will also give bonus points for creativity and/or any additional visuals that you're able to think up or implement!

## Charting

You are welcome to use whatever charting library you would like to graph the building load data. We've had success with [Recharts](http://recharts.org/#/en-US) in the past, though by no means is it a requirement. For a sample of what we're going for, take a look at the [Synchronized Line Chart](http://recharts.org/#/en-US/examples/SynchronizedLineChart)

Please note we understand that this amount of data comes at the price of performance. While we have some libraries internally to handle resampling of data, that's not included in the scope of this exercise and if your app becomes slugish, that's okay. Feel free to prepare talking points on how you'd handle this though!

## Running the Webapp

Ensure that you have installed [Docker Compose](https://docs.docker.com/compose/install/).

Build the application using the following command:

```    
docker-compose build
```

Startup the application using the following command:

```
docker-compose up -d
```

You may also startup the services individually by running:

```
docker-compose up -d webapp
```

OR

```
docker-compose up -d influxdb
```

Finally the webapp can be run locally using ```npm``` assuming you have [NPM and NodeJS](https://nodejs.org/en/download/) installed.

```
npm install
npm run dev
```

Navigate to the webapp dashboard at [http://localhost:8888](http://localhost:8888)

To view a subset of the data in InfluxDB you can use the cli by connecting to the influx docker daemon:

```docker-compose exec influxdb influx```

And then query from the `power` database as spelled out in the [Influx Docs](https://docs.influxdata.com/influxdb/)

```
~/P/p/w/webapp ❯❯❯ docker-compose exec influxdb influx
Connected to http://localhost:8086 version 1.4.2
InfluxDB shell version: 1.4.2
> use power
Using database power
> select * from data limit 10
name: data
time                DAY_OF_WEEK HOUR_OF_DAY RELATIVE_HUMIDITY TEMP_C TEMP_F USAGE_KWH         VISIBILITY
----                ----------- ----------- ----------------- ------ ------ ---------         ----------
```

To select just the energy consumption data (kWh) you can use the following query:

```select USAGE_KWH from data limit 10```

You may want to use the [node-influx](https://github.com/node-influx/node-influx) client, or you can also choose to use the InfluxDB [HTTP API](https://docs.influxdata.com/influxdb/v1.4/guides/querying_data/) as well.

## Communication

We’re big on communication and want to help you out in any way we can.

* **Slack** - We use Slack for team communication and we think it’s great.  We’ll invite you to a Slack channel you can use to ask us questions or follow-up on anything related to the interview or assignment.

* **Gitlab** - We use Gitlab for source control so we’ll share out a Gitlab repo that you should use to source control any code, wiki notes or other information you might use as part of your research.  Feel free to commit often as you work through the problem.

## Next Steps

We’ll be in contact with you and will setup a follow-up onsite interview within the next two weeks (depending on your availability and schedule).  Before you come in for the on-site interview, please push your results to GitLab including an updated README with any additional instructions we may need to run any code.   Also, please list any tools/programming languages/etc you are using so that we can be prepared for the onsite interview.  When you come on-site, we will provide you some feedback and have a discussion about your approach, and there may also be some interactive coding and analysis that we’ll work through with you.

If you have any questions at any time please email us, call us, or message us on Slack!

### handy scripts.

#### check for any dependency upgrades with interactive feedback on upgradeability
`yarn upgrade-interactive --latest`
