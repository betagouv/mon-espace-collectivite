# We use `npx` to avoid using the local prisma dependency
# like that we can throw away all the dependencies at once without complicating things by reinstalling prisma
postdeploy: cd apps/web && npx prisma migrate deploy
