# Form validation problem (Node)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [Springload](https://www.springload.co.nz/) feel free to submit it too. We're always on the lookout for skilled developers.

## Problem definition

Imagine, if you will, an API

The API is in REST or GraphQL.

The API exposes a database which has information on Animals, and has the follow attributes:

* Anyone can access a list of Animals
* Only authenicated users can add Animals
* The schema is defined as
  * Animal 
    * Name (`string`),
    * Type (`Bear`, `Tiger`, `Snake`, and `Donkey`),
    * Tiger Type (`string`)
* If the Animal Type is `Tiger` then a Tiger Type is also required.

You can model this data however you'd like. E.g. SQLite, Postgres, MSSQL, flat file etc.

The API has READ / WRITE access to this.

Your objective is to produce this database and API with as much or as little sophistication as you see fit, explaining what informed your decisions.

## Other advice

2 hours isn't much, so it's ok to not do everything!

We want to see what you've prioritised, and a description of what hasn't been done.

You might want to consider:

- API security
- Error reporting
- Normalisation
- Testing
- Documentation

## Finally...

Submit your solution to the person who sent you the test, or to Springload... send a link to your repo or a ZIP or something like that.

Thanks!
