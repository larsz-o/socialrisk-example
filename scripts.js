const postsToAnalyze = [{ body: '...', riskRating: 10}, { body: '...', riskRating: 0 }];

function isThisDangerous(posts) {
    // posts is an array of social media posts, each of which is an object. we'll iterate through the array to look at its contents
    for (let i = 0; i < posts.length; i++) {
        // let's name the values of each object in a variable called data
        let data = Object.values(posts[i].body);
        // if the object contains the word invasion anywhere in it, then execute this code
        if (data.indexOf('invasion') !== -1) {
            // add one to the existing riskRating for this post 
            posts[i].riskRating += 1;
            //if the object contains the word invasion and also the word immigration anywhere in it, then execute this code
        } else if (data.indexOf('invasion') !== -1 && data.indexOf('immigration') !== -1) {
            // add two to the existing riskRating for this post 
            posts[i].riskRating += 2;
        }
    }
    sortPostsByRiskRanking(posts);
}

// sort the data so that the riskiest posts are listed first.
function sortPostsByRiskRanking(posts) {
    let sorted = posts.sort((a, b) => (b.riskRating > a.riskRating) ? 1 : -1);
    console.log(sorted);
    return sorted;
}

isThisDangerous(postsToAnalyze);
