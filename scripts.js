const postsToAnalyze = [{ body: 'immigration', riskRating: 0}, { body: 'immigration invasion', riskRating: 0 }];

function isThisDangerous(posts) {
    // posts is an array of social media posts, each of which is an object. we'll iterate through the array to look at its contents
    for (let i = 0; i < posts.length; i++) {
        // let's name the values of each object, within the body key, in a variable called data
        let data = posts[i].body;
        // we need to split this string into an array that we can serach through, by splitting at all spaces. 
        let words = data.split(' ');
        // next, we search through our new array, called words, to try to find our risk words using the method indexOf
        if (words.indexOf('invasion') !== -1) {
            // add one to the existing riskRating for this post 
            posts[i].riskRating += 1;
            //if the post contains the word invasion and also the word immigration anywhere in it, then execute this code
        } else if (words.indexOf('invasion') !== -1 && words.indexOf('immigration') !== -1) {
            // add two to the existing riskRating for this post 
            posts[i].riskRating += 2;
        }
    }
    sortPostsByRiskRanking(posts);
}

// sort the data so that the riskiest posts are listed first.
function sortPostsByRiskRanking(posts) {
    let sorted = posts.sort((a, b) => (b.riskRating > a.riskRating) ? 1 : -1);
    return sorted;
}

isThisDangerous(postsToAnalyze);
