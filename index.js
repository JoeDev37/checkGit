const { exec } = require('child_process');

exec('git config --global user.name', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Git Username: ${stdout.trim()}`);
});

exec('git config --global user.email', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Git Email: ${stdout.trim()}`);
});

