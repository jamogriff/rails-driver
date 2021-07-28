# Rails Driver
### A basic Javascript/Rails front-end that utilizes the [Rails Engine API](https://github.com/jamogriff/rails-engine)

This application was built to illustrate how the [Rails Engine API](https://github.com/jamogriff/rails-engine) project can be consumed. Most of the front-end functionality comes from raw Javascript with assistance from Rails. 

## Set Up

Versions
- Rails 5.2.4.3
- Ruby 2.5.3

First clone the repository and then run the following commands:

1. `bundle` (if this fails, try to `bundle update` and then retry)
1. `rails db:create && rails db:migrate`
1. `bundle exec figaro install`

This last command should create the file `config/application.yml`. Open this file and add configuration for the Environment variable `RAILS_ENGINE_DOMAIN`. This should be the url from where Rails Engine is being served. If you are only using Rails Driver locally, append this to `config/application.yml`:

```
RAILS_ENGINE_DOMAIN: http://localhost:3000
```
**Remember: you need to set-up [Rails Engine](https://github.com/jamogriff/rails-engine) in order to use Rails Driver. Rails Engine has [CORS](https://github.com/cyu/rack-cors) enabled to allow resource sharing for the purpose of using this front-end.**

If you are running Rails Engine on `localhost:3000` as in the examples above, you will need to run Rails Driver on a different port, for example:

```
rails s -p 4000
```

Navigate your browser to `localhost:400` to see Rails Driver in action. You can use the front-end to explore how Javascript interacts with the Rails Engine API. Having both applications running locally and seeing how HTTP requests and responses get passed back and forth is very informative in understanding the roles of back-end and front-end software development.



## Test Suite

`spec/features/harness_spec.rb` includes tests for the Rails Engine roject. In order for this test suite to run properly, you will need to:

1. Make sure your Rails Engine eatabase is seeded with the data provided in the `pg-dump` file and `db/schema.rb` is accurate.
1. Ensure Rails Engine is serving from the url you specified in `config/application.yml` (`localhost:3000` if you copied
the example `config/application.yml` above)
