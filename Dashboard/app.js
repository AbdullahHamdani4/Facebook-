let storiesOfCurrentUser = [
    {
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Ali Khan",
        imageUrl: "https://picsum.photos/300/500?random=1",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Sara Ahmed",
        imageUrl: "https://picsum.photos/300/500?random=2",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Usman Tariq",
        imageUrl: "https://picsum.photos/300/500?random=3",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Ayesha Noor",
        imageUrl: "https://picsum.photos/300/500?random=4",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Hamza Ali",
        imageUrl: "https://picsum.photos/300/500?random=5",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Hira Malik",
        imageUrl: "https://picsum.photos/300/500?random=6",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Bilal Hussain",
        imageUrl: "https://picsum.photos/300/500?random=7",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Zainab Sheikh",
        imageUrl: "https://picsum.photos/300/500?random=8",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Daniyal Raza",
        imageUrl: "https://picsum.photos/300/500?random=9",
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
        name: "Fatima Iqbal",
        imageUrl: "https://picsum.photos/300/500?random=10",
    }
];
let postsOfCurrentUser = [
    {
        profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
        profileName: "Ali Khan",
        dateTime: "14 Feburary at 23:57",
        contentPic: "https://picsum.photos/600/400?random=41",
        comments: 12,
        shares: 3
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
        profileName: "Sara Ahmed",
        dateTime: "13 Feburary at 18:22",
        contentPic: "https://picsum.photos/600/400?random=42",
        comments: 8,
        shares: 5
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
        profileName: "Usman Tariq",
        dateTime: "12 Feburary at 09:15",
        contentPic: "https://picsum.photos/600/400?random=43",
        comments: 25,
        shares: 10
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
        profileName: "Ayesha Noor",
        dateTime: "11 Feburary at 14:40",
        contentPic: "https://picsum.photos/600/400?random=44",
        comments: 4,
        shares: 1
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
        profileName: "Hamza Ali",
        dateTime: "10 Feburary at 20:10",
        contentPic: "https://picsum.photos/600/400?random=45",
        comments: 19,
        shares: 7
    }
];

let storiesSection = document.querySelector(".stories-section");
let postsSection = document.querySelector(".posts-section");

let createStoriesThroughMap=()=>{
    let returnedArr = storiesOfCurrentUser.map(story => {
        return `
     <div class="story" style="background-image: url('${story.imageUrl}');">
                            <div class="profile-pic">
                                <img src="${story.profilePic}" alt="pfp">
                            </div>
                            <div class="profile-name"><p>${story.name}</p></div>
                        </div>
    `
    });
storiesSection.innerHTML += returnedArr.join("")
 }
createStoriesThroughMap()
let createPostsThroughMap=()=>{
    let returnedArr = postsOfCurrentUser.map(post => {
        return `
          <div class="post">
                            <div class="post-top">
                                <div class="post-top-left">
                                    <div class="profile-icon"><img src="${post.profilePic}"
                                            alt="pfp"></div>
                                    <div class="profile-name">
                                        <p>${post.profileName}</p>
                                        <p>${post.dateTime}</p>
                                    </div>
                                </div>
                                <div class="post-top-right">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="post-content">
                                <img src="${post.contentPic}" alt="img">
                            </div>
                            <div class="post-count">
                                <div class="count-left">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <i class="fa-regular fa-face-grin-squint-tears"></i>
                                </div>
                                <div class="count-right">
                                    <span>${post.comments} Comments</span>
                                    <span>${post.shares} shares</span>
                                </div>
                            </div>
                            <div class="post-btns">
                                <button><i class="fa-regular fa-thumbs-up"></i> Like</button>
                                <button><i class="fa-regular fa-comment"></i> Comment</button>
                                <button><i class="fa-solid fa-share"></i> Share</button>
                            </div>
                        </div>
    `
    });
postsSection.innerHTML = returnedArr.join("")
 }
createPostsThroughMap()




