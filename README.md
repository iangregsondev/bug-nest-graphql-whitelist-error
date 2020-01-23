# nest-graphql-whitelist-error

Execute the following query against the server.

```
{
   recipes(id: "22") 
}
```

You will notice that the value was undefined that is received inside the resolver.

Setting whitelist to false on the validationPipe will fix the issue.
