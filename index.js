const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { exec } = require('child_process');
const Table = require('cli-table');

const args = process.argv.slice(2);
if (args.length == 1) {
    runFile(args[0]);
}
else {
    runFile(lastEditedFile('./solutions'));
}

function lastEditedFile(folderPath) {
    const files = fs.readdirSync(folderPath);

    // Map files to their stats and sort by modified time
    const sortedFiles = files
        .map(file => ({
            file,
            mtime: fs.statSync(path.join(folderPath, file)).mtime
        }))
        .sort((a, b) => b.mtime - a.mtime);

    // Return the most recent file
    return sortedFiles.length > 0 ? `${folderPath}/` + sortedFiles[0].file : null;
}

async function getSolution(num) {
    const response = await axios.get('https://raw.githubusercontent.com/lucky-bai/projecteuler-solutions/refs/heads/master/Solutions.md');
    for (const solution of response.data.split('\r\n')) {
        if (solution.startsWith(`${num}. `)) {
            return solution.replace(`${num}. `, '').trim();
        }
    }
}

async function runFile(filePath) {
    if (!fs.existsSync(filePath)) return;

    const startTime = Date.now();
    exec(`node ${filePath}`, async (error, stdout) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        const endTime = Date.now();
        const runtime = ((endTime - startTime) / 1000).toFixed(3); // Runtime in seconds

        const file = path.basename(filePath);
        const problem_num = file.replace('.js', '').split('_')[0].slice(1);

        const is_answer = /^-?\d+(\.\d+)?$/.test(stdout.trim());
        if (is_answer) {
            const answer = stdout.replace(/[\r\n]+/g, '').trim();

            const table = new Table({
                head: ['Problem', 'Solution', 'Correct', 'Runtime', 'Pass'],
            });

            table.push([file, answer, answer == await getSolution(problem_num) ? 'Yes' : 'No', runtime, runtime <= 1 && answer == await getSolution(problem_num) ? 'Success' : 'Failed']);

            console.log(table.toString());
        }
        else {
            console.log(stdout);
        }
    });
}
