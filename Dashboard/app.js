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
        dateTime: "14 Feb at 23:57",
        contentPic: "https://picsum.photos/600/400?random=41",
        comments: 12,
        shares: 3
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
        profileName: "Sara Ahmed",
        dateTime: "13 Feb at 18:22",
        contentPic: "https://picsum.photos/600/400?random=42",
        comments: 8,
        shares: 5
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
        profileName: "Usman Tariq",
        dateTime: "12 Feb at 09:15",
        contentPic: "https://picsum.photos/600/400?random=43",
        comments: 25,
        shares: 10
    },
    {
        profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
        profileName: "Ayesha Noor",
        dateTime: "11 Feb at 14:40",
        contentPic: "https://picsum.photos/600/400?random=44",
        comments: 4,
        shares: 1
    },
    {
        profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
        profileName: "Hamza Ali",
        dateTime: "10 Feb at 20:10",
        contentPic: "https://picsum.photos/600/400?random=45",
        comments: 19,
        shares: 7
    }
];

let storiesSection=document.querySelector(".stories-section")
let createStoriesThroughMap=
    storiesOfCurrentUser.map(story=>{
    return `
     <div class="story" style="background-image: url('${story.imageUrl}');">
                            <div class="profile-pic">
                                <img src="${story.profilePic}" alt="pfp">
                            </div>
                            <div class="profile-name"><p>${story.name}</p></div>
                        </div>
    `
});
storiesSection.innerHTML+=createStoriesThroughMap.join("")


    



