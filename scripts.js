let postsToAnalyze = [{ body: 'invasion immigration this is an article about invasion invasion immigration', showRating: 0}, { body: 'immigration invasion', showRating: 0 }];
let keywords = ['invasion', 'immigration']
function isThisDangerous(posts) {
    // posts is an array of social media posts, each of which is an object. we'll iterate through the array to look at its contents
    for (let i = 0; i < posts.length; i++) {
        // let's name the values of each object, within the body key, in a variable called data
        let data = posts[i].body;
        // we need to split this string into an array that we can serach through, by splitting at all spaces. 
        let words = data.split(' ');
        for (let j = 0; j < keywords.length; j++){
            // next, we search through our new array, called words, to try to find our risk words using the method indexOf
            if (words.indexOf(keywords[i]) !== -1 ) {
                // count how many times the word is used and add that number to the risk rating
                let count = posts[i].showRating;
                let occurrence = words.filter(x => x === keywords[i]).length;
                count += occurrence; 
                posts[i].showRating += count;
            }
        } 
    }
    sortPostsByRiskRanking(posts);
}
// limit the number of posts that are shown
function limitPosts(number){
    let arrayToPost = postsToAnalyze.splice(0, number);
    console.log(arrayToPost)
}
// sort the data so that the highest ranked posts are listed first.
function sortPostsByRiskRanking(posts) {
    let sorted = posts.sort((a, b) => (b.showRating > a.showRating) ? 1 : -1);
    console.log(sorted)
    return sorted;
}

isThisDangerous(postsToAnalyze);
limitPosts(1);

