model Produto {
    id        String   @id @default(uuid()) @db.Char(40)
    nome      String   @unique @db.VarChar(100)
    preco     Decimal  @db.Decimal
    estoque   Int      @db.Int
    createdAt DateTime @default(now()) @map("created_at")
    updatedAt DateTime @updatedAt @map("updated_at")
  
    @@map("produtos")
  }
  
  model Post {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    title     String   @db.VarChar(255)
    content   String?
    published Boolean  @default(false)
    author    User     @relation(fields: [authorId], references: [id])
    authorId  Int
  }
  
  model Profile {
    id     Int     @id @default(autoincrement())
    bio    String?
    user   User    @relation(fields: [userId], references: [id])
    userId Int     @unique
  }
  
  model User {
    id      Int      @id @default(autoincrement())
    email   String   @unique
    name    String?
    Post    Post[]
    profile Profile?
  }
  