const API_AUTH_KEY = "enter_your_key";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_AUTH_KEY;

export const BUTTON_LIST = [
  "All",
  "Live",
  "Mixes",
  "Ambient Music",
  "Chill-out music",
  "Tourism",
  "Piano",
  "Computer Programming",
  "Mantras",
];

export const COMMENTS_DATA = [
  {
    name: "Shreya Varma",
    text: "Lorem Ipsum dolar est se la vida",
    replies: [
      {
        name: "Shreya Varma",
        text: "Lorem Ipsum dolar est se la vida",
        replies: [
          {
            name: "Shreya Varma",
            text: "Lorem Ipsum dolar est se la vida",
            replies: [],
          },
          {
            name: "Shreya Varma",
            text: "Lorem Ipsum dolar est se la vida",
            replies: [],
          },
        ],
      },
      {
        name: "Shreya Varma",
        text: "Lorem Ipsum dolar est se la vida",
        replies: [],
      },
    ],
  },
  {
    name: "Shreya Varma",
    text: "Lorem Ipsum dolar est se la vida",
    replies: [],
  },
  {
    name: "Shreya Varma",
    text: "Lorem Ipsum dolar est se la vida",
    replies: [
      {
        name: "Shreya Varma",
        text: "Lorem Ipsum dolar est se la vida",
        replies: [
          {
            name: "Shreya Varma",
            text: "Lorem Ipsum dolar est se la vida",
            replies: [],
          },
          {
            name: "Shreya Varma",
            text: "Lorem Ipsum dolar est se la vida",
            replies: [
              {
                name: "Shreya Varma",
                text: "Lorem Ipsum dolar est se la vida",
                replies: [
                  {
                    name: "Shreya Varma",
                    text: "Lorem Ipsum dolar est se la vida",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shreya Varma",
    text: "Lorem Ipsum dolar est se la vida",
    replies: [],
  },
  {
    name: "Shreya Varma",
    text: "Lorem Ipsum dolar est se la vida",
    replies: [],
  },
];
