var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/wang-joseph/svelte-portfolio.git', // Update to point to your repository  
        user: {
            name: 'Joseph Wang', // update to use your name
            email: 'joseph.wang1516@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
