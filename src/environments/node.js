const setEnv = () => {
    const fs = require('fs');
    const path = require('path');
    const successColor = '\x1b[32m%s\x1b[0m';
    const checkSign = '\u{2705}';
    const dotenv = require('dotenv').config({ path: 'src/.env' });

    const envFile = `export const environment = {
    authUrl: '${process.env['authUrl']}',
    authApiKey: '${process.env.authApiKey}',
    rapidApiUrl: '${process.env.rapidApiUrl}',
    rapidApiHost: '${process.env.rapidApiHost}',
    rapidApiKey: '${process.env.rapidApiKey}',
    base_link: '${process.env.base_link}',
};
`;
    const targetPath = './src/environments/environment.development.ts';
    fs.writeFile(targetPath, envFile, (err) => {
        if (err) {
            console.error(err);
            throw err;
        } else {
            console.log(successColor, `${checkSign} Successfully generated environment.development.ts`);
        }
    });

    const targetPathProd = './src/environments/environment.ts';
     fs.writeFile(targetPathProd, envFile, (err) => {
         if (err) {
             console.error(err);
             throw err;
         } else {
             console.log(successColor, `${checkSign} Successfully generated environment.ts`);
         }
     });
    
};

setEnv();
