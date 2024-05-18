// Define an array of objects with video data
const videos = [
    {
        id: 1,
        link: "https://www.flickr.com/photos/tsdn/53728201042/in/dateposted-public/",
        imageUrl: "https://live.staticflickr.com/31337/53728201042_fd85eb636c_q.jpg",
        title: "Road Rescue"
    },
    {
        id: 2,
        link: "https://www.flickr.com/photos/tsdn/53729316693/in/dateposted-public/",
        imageUrl: "https://live.staticflickr.com/31337/53729316693_1296e8c854_q.jpg",
        title: "Recovery Services"
    },
    {
        id: 3,
        link: "https://www.flickr.com/photos/tsdn/53729548165/in/dateposted-public/",
        imageUrl: "https://live.staticflickr.com/31337/53729548165_c4ace69374_q.jpg",
        title: "Crane Hire"
    },
    {
        id: 4,
        link: "https://www.flickr.com/photos/tsdn/53729114246/in/dateposted-public/",
        imageUrl: "https://live.staticflickr.com/31337/53729114246_705a3cb39c_q.jpg",
        title: "Crane Hire"
    },
    {
        id: 5,
        link: "https://www.flickr.com/photos/tsdn/53729544855/in/dateposted-public/",
        imageUrl: "https://live.staticflickr.com/31337/53729544855_bd45ee3d0a_q.jpg",
        title: "Recovery"
    },
    {
        id: 6,
        link: "https://www.flickr.com/photos/tsdn/53729311238/in/dateposted-public/",
        imageUrl: "https://live.staticflickr.com/31337/53729311238_deb3918a05_q.jpg",
        title: "Rescue"
    }
];

// Function to create video items
function createVideoItem(video) {
    return `
        <div class="col-md-4 col-sm-6 co-xs-12 gal-item">
            <div class="box">
                <a href="${video.link}" data-flickr-embed="true" title="${video.title}">
                    <img src="${video.imageUrl}" alt="${video.title}" />
                </a>
                <div class="modal fade" id="${video.id}" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div class="modal-body">
                                <img src="${video.imageUrl}" alt="${video.title}" />
                            </div>
                            <div class="col-md-12 description">
                                <h4>${video.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Inject video items into the gallery container
const galleryContainer = document.getElementById('projects-gallery');
videos.forEach(video => {
    galleryContainer.innerHTML += createVideoItem(video);
});
