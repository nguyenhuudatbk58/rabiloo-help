var push = require('web-push');


let keys = {
  publicKey: 'BEis3o6KKe0YrX78UBIXVZ4wYWuB3HC0sbD1eI6OjdEb9QSHGXwYFjAlVkkZL_t2swgbAMsoVdq9lSiDrhZPov8',
  privateKey: 'gzlWloi5RiQaSruaIlPG6kSL7CYR0tMR3657AbGMHy4'
};

console.log(keys);

push.setVapidDetails("huudatbk58@gmail.com",keys.publicKey,keys.privateKey);


let sub = {};

push.sendNotification(sub,'hello from datnh');