//  Start coding here
class OverallFacebook {
    constructor(id=null, name=null, content=null){
        this.id = id;
        this.name = name;
        this.content = content;
    };
};

class User extends OverallFacebook{
    constructor (id, name, email){
        super(id);
        this.name = name;
        this.email = email;
    };
};

class PostList {
    constructor (...post){ // posts is array from object post
        this.posts = post;
    };
    addPost(post){
        this.posts.push(post); //add post to posts
    };
    sharePost(i){ //share title post
        console.log(`You've shared post “${this.posts[i].title}” to your friend.`);
    };
};

class Post {
    constructor(id, title, content, ...comment){
        this.id = id
        this.title = title;
        this.content = content;
        this.comment = comment;
    };
    addComment(comment){
        this.comment.push(comment);
    };
}

class Comment {
    constructor (id, content, createBy){
        this.id = id;
        this.content = content;
        this.createBy = createBy;
        this.like = 0;
    };
    addLike(){
        this.like += 1;
    };
};

class Facebook {
    constructor (groupList, pageList){
        this.groupList = [groupList];
        this.pageList = [pageList];
    };
    addGroup(group){
        this.groupList.push(group);
    };
    addPage(page){
        this.pageList.push(page);
    };
};

class FacebookPage {
    constructor (name){
        this.name = name;
    };
};

class FacebookGroup {
    constructor (name){
        this.name = name;
    };
};

class Notification {
    constructor (id){
        this.id = id;
    };
    send(commentNoti,postNoti){
        console.log(`Notification: ${commentNoti.createBy} has just commented on this post—"${postNoti.title}"`)
    }
};

//test class User
const newUser1 = new User ('1', 'Bank', 'Example@email.com');
console.log(newUser1);

//test Post
const testPost = new Post ('1', 'testTitle1', 'testContent1', 'comment1');
console.log(testPost);
const testPost2 = new Post ('2', 'testTitle2', 'testContent2', 'comment2');
console.log(testPost2);

//test PostList
const testPostList = new PostList(testPost);
console.log(testPostList);

//test addPost to Postlist
testPostList.addPost(testPost2);
console.log(testPostList.posts);

//test sharePost from Postlist
testPostList.sharePost(0);

//test Comment
const testComment = new Comment(newUser1.id, testPost.content, newUser1.name);
console.log(testComment);

//test addComment
testPost.addComment('comment2');
console.log(testPost);

//test addLike
testComment.addLike();
console.log(testComment.like);

//test CreateFacebookPage
const testFacebookPage = new FacebookPage('TestFacebookPage1');
console.log(testFacebookPage);

//test CreateFacebookGroup
const testFacebookGroup = new FacebookGroup('TestFacebookGroup1');
console.log(testFacebookGroup);

//test Facebook
const facebook = new Facebook(testFacebookGroup,testFacebookPage);
console.log(facebook);

//test AddGroup/List
const testFacebookGroup2 = new FacebookGroup('TestFacebookGroup2');
const testFacebookPage2 = new FacebookPage('TestFacebookPage2');

facebook.addPage(testFacebookPage2);
facebook.addGroup(testFacebookGroup2);

console.log(facebook);

//test Notification
const notification = new Notification('1');
console.log(notification);
notification.send(testComment,testPost)


