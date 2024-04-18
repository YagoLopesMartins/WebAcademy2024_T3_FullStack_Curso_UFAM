### Curso Web Academy 2024

# Acessando mysql via terminal

$ mysql -u root -p

# Por padrão o único usuário criado é o root, para criar um novo faça (Exemplo):

$ CREATE USER 'yago'@'localhost' IDENTIFIED BY 'Yago*1234';
$ GRANT ALL PRIVILEGES ON * . \_ TO 'yago'@'localhost';

# Acessando mysql com docker via terminal

$ docker pull mysql:latest
$ docker images
$ docker run mysql --name docker-mysql
$ docker run --name docker-mysql -e MYSQL_ROOT_PASSWORD=Yago_1234 -d mysql
$ docker ps
$ docker inspect docker-mysql

"IPAddress": "172.17.0.2"

# Caso der problema quando tiver 2 instancias do mysql em execução, faça:

sudo systemctl stop mysql.service

# Adicionando no prisma

datasource db {
provider = "mysql"
url = env("DATABASE_URL_DOCKER")
}

# .env (exemplo)

DATABASE_URL="mysql://yago:Yago_1234@localhost:3306/loja"
DATABASE_URL_DOCKER="mysql://root:Yago_1234@172.17.0.2:3306/loja"

# npx prisma migrate dev --name create-produtos-table
