const fs = require('fs');
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'ecommerce-mysql-database.mysql.database.azure.com',
    user: 'vinay',
    database: 'product',
    password: 'admin@9618',
    port: 3306,
    ssl: {
        ca: fs.readFileSync('/media/vinay/48248854248846C2/06-editing-the-product-data/certificate/DigiCertGlobalRootCA.crt.pem'),
        // sslCert: fs.readFileSync('client-cert.pem'), // Path to the client certificate file (if applicable)
        // sslKey: fs.readFileSync('client-key.pem') // Path to the client private key file (if applicable)
    }
});

module.exports = pool.promise();
