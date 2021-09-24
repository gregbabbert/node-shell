

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  process.stdout.write(process.cwd() + cmd);
  process.stdout.write('\nprompt > ')
})
