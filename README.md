# InstiOverflow


#### Back-end Dev
* For handling server requests: `Node.js with Express.js Framework`
* Database: `MySQL`
* API tested using: `POSTMAN`

#### Front-end Dev
* Front-end Framework: `React.js (with Redux)`
* Styling: `SASS` and `BOOTSTRAP`

## Guidelines to setup
1. Install node and npm
    ```
    sudo apt install nodejs
    node -v   (check version of node)
    sudo apt install npm
    npm -v   (check version of npm)
    ```
2.Install mysql
    ```
    sudo apt update
    sudo apt install mysql-server
    ```
3.setup mysql user and server
    ```
setup user:-
    sudo mysql 
    mysql>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY mysql@123; (change password of root mysql@123 in this case)
    mysql>SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
    mysql>flush privileges;
    mysql>exit
Login with root user-
     mysql -u root -p
     //enter password


4. Run these commands then - 
    ```
    npm install (UI , API and instiOverflow folder)
    ```
3. Run `instiOverflow.sql` file in the mysql client
    ```
    mysql -u root -p  < instiOverflow.sql   (user-root)
    ```
4. Start the servers
    ```
    Option 1 (for running both the servers simultaneously):
    
    npm run dev
    
    ```
