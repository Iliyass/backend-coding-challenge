## Setup

Same as the parent repo

### .env File

Before you run anything, you need to rename the `.env.sample` to `.env` and you need to fill the env variables, each var has it's comment to how to get that.


### Seed Data

`npm run importData` is the first command that you should run before spinnin' the server, so, the database schema, and database is filled with initial data

### Spinin' the server

Once your complete the above steps, you can build and start the server



## Some Gotchas'

### ORM
I have used typeorm, I have never used this ORM, but I found their API well thought out, and plays well with typescript

### Data at Scale
For the importData script, I used the Steam API, just to show that's the recommended way of dealing with data at scale, but in the example you gave, the benifit of using Stream API wouldn't matter because the input file is JSON, which is not intended to deal with large files, as you cannot stream line the file, CSV would be a good fit as you can read the file line by line and you can save each entity that way, but for JSON it's not possible.

### Weather API
I have used https://www.weatherapi.com/, I have created an account to get the API KEY, I couldn't find a good api without api key

### Visa and Vaccination Requirements
I have used your requirements-api endpoint with a client key that got from a XHR request that I inpected from Network tab
