import BlogPostContainer from '@/components/blog/BlogPostContainer';

const BlogPost = () => {
  post['user']['summary'] = user.summary;
  return <BlogPostContainer post={post} userSummary={user.summary} />;
};

export default BlogPost;

// sample data till incorporating dev.to API
// response on https://dev.to/api/articles/1699159
const post = {
  type_of: 'article',
  id: 1699159,
  title: 'Programming Learning Journey So Far and Onward',
  description:
    'Why I Started Learning Programming   I was a bit late to get interested in programming, but...',
  readable_publish_date: "Dec 15 '23",
  slug: 'programming-learning-journey-so-far-and-onward-58po',
  path: '/satoshi-sh/programming-learning-journey-so-far-and-onward-58po',
  url: 'https://dev.to/satoshi-sh/programming-learning-journey-so-far-and-onward-58po',
  comments_count: 2,
  public_reactions_count: 3,
  collection_id: null,
  published_timestamp: '2023-12-15T17:39:07Z',
  positive_reactions_count: 3,
  cover_image:
    'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2ojp1raqmv6tqh3wu0he.jpg',
  social_image:
    'https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2ojp1raqmv6tqh3wu0he.jpg',
  canonical_url:
    'https://dev.to/satoshi-sh/programming-learning-journey-so-far-and-onward-58po',
  created_at: '2023-12-15T17:33:07Z',
  edited_at: null,
  crossposted_at: null,
  published_at: '2023-12-15T17:39:07Z',
  last_comment_at: '2024-05-20T03:02:09Z',
  reading_time_minutes: 5,
  tag_list: 'webdev, learning, programming, beginners',
  tags: ['webdev', 'learning', 'programming', 'beginners'],
  body_html:
    '\u003ch1\u003e\n  \u003ca name="why-i-started-learning-programming" href="#why-i-started-learning-programming"\u003e\n  \u003c/a\u003e\n  Why I Started Learning Programming\n\u003c/h1\u003e\n\n\u003cp\u003eI was a bit late to get interested in programming, but my last work experience made me decide to learn programming.  Previously I worked at a food delivery company, and I was a menu care programmer who took care of building menus for restaurants with the company’s menu builder software. Sometimes I needed to do data entry for liquor vendors. They had more than 500 items. I needed to put more information on the menu like volume, quantities, ABV, bottle deposit, and so on from Excel sheets. It required a lot of energy. At some point, I thought these manual tasks might be scripted by programming. It made me interested in programming, and I started learning programming with online resources. \u003c/p\u003e\n\n\u003ch1\u003e\n  \u003ca name="phase-i-online-learning" href="#phase-i-online-learning"\u003e\n  \u003c/a\u003e\n  Phase I: Online Learning\n\u003c/h1\u003e\n\n\u003cp\u003eThere are so many free online learning resources nowadays. I like to pick some of my favorites here.\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="havard-university-cs50-series" href="#havard-university-cs50-series"\u003e\n  \u003c/a\u003e\n  Havard University CS50 Series\n\u003c/h3\u003e\n\n\u003cp\u003eThe quality of course always surprises me. Many people say that they cannot believe those courses are free. I cannot agree enough with that. I took CS50x,CS50P,CS50W, and CS50AI. It might be challenging to start with CS50x as a beginner, but the instructor is enthusiastic and engaging and their coding challenges are unique and interesting. It\'s always good to know the fundamental concept of computer science to be a better developer. \u003c/p\u003e\n\n\u003cp\u003eSometimes they ask you to make a video to show your project, I feel it\'s handy to showcase your projects if you are not planning to deploy them somewhere.\u003c/p\u003e\n\n\u003cp\u003e\u003ca href="https://www.edx.org/cs50"\u003eCS50 Link\u003c/a\u003e\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="the-odin-project" href="#the-odin-project"\u003e\n  \u003c/a\u003e\n  The Odin Project\n\u003c/h3\u003e\n\n\u003cp\u003eThe Odin Project equips you well to be a full-stack developer. You can choose JavaScript or Ruby on Rails after completing the foundation chapter. I chose the JavaScript path and learned a lot about React.js and Node.js. To follow this course, you need to read a lot. Sometimes it feels dry but reading is an essential skill for developers. Throughout the course, you need to make many projects. I recommend you check this out if you are interested in web development.\u003c/p\u003e\n\n\u003cp\u003eThey ask you to use Linux for following the course. It made me become a Linux user from a Windows user.\u003c/p\u003e\n\n\u003cp\u003e\u003ca href="https://www.theodinproject.com/"\u003eTOP Link\u003c/a\u003e\u003c/p\u003e\n\n\u003ch1\u003e\n  \u003ca name="phase-ii-solo-projects" href="#phase-ii-solo-projects"\u003e\n  \u003c/a\u003e\n  Phase II: Solo Projects\n\u003c/h1\u003e\n\n\u003cp\u003eExperienced developers always advise me to create my own projects for myself, friends, or family to get better as a developer. At this point, I have enough skills to create full-stack applications on my own. I started making my projects. I can list some of them here. \u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="findit" href="#findit"\u003e\n  \u003c/a\u003e\n  FindIT\n\u003c/h3\u003e\n\n\u003cp\u003eHelp users to find movies to watch. \u003ca href="https://github.com/Satoshi-Sh/findit2"\u003eLink\u003c/a\u003e\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="mastlog" href="#mastlog"\u003e\n  \u003c/a\u003e\n  Mastlog\n\u003c/h3\u003e\n\n\u003cp\u003eArchiving my Mastodon toots. Users can look up toots by date, keyword, mention, and hashtag. \u003ca href="https://github.com/Satoshi-Sh/mastlog"\u003eLink\u003c/a\u003e\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="menu-creator" href="#menu-creator"\u003e\n  \u003c/a\u003e\n  Menu Creator\n\u003c/h3\u003e\n\n\u003cp\u003eUsers can make an online menu and also create a menu with a JSON or CSV file. \u003ca href="https://github.com/Satoshi-Sh/menu-creator"\u003eLink\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eFortunately, I got a mentor on Mastodon around this time. I always ask him first about web development. He also recommended that I  use Digital Ocean Droplet to deploy some of my applications. I learned a lot that it\'s hard to configure a server to deploy applications.\u003c/p\u003e\n\n\u003ch1\u003e\n  \u003ca name="phase-iii-team-projects" href="#phase-iii-team-projects"\u003e\n  \u003c/a\u003e\n  Phase III: Team Projects\n\u003c/h1\u003e\n\n\u003cp\u003eTo be a professional developer, you need to collaborate with other developers. I needed to know more about how to use GitHub, how to communicate with others effectively, and so on. I want to share some communities and resources that helped me improve in those fields.\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="virtual-coffee" href="#virtual-coffee"\u003e\n  \u003c/a\u003e\n  Virtual Coffee\n\u003c/h3\u003e\n\n\u003cp\u003eVirtual Coffee is an online developer community. I mainly use this community to socialize with fellow developers on Zoom working place. You can use it here to ask for advice from experienced developers as well. Throughout this community, I learned lots of resources and events like WebDevPath, The Collab Lab, Chingu, Hacktober Fest, and so on. \u003c/p\u003e\n\n\u003cp\u003e\u003ca href="https://virtualcoffee.io/"\u003eVC Link\u003c/a\u003e\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="webdevpath" href="#webdevpath"\u003e\n  \u003c/a\u003e\n  WebDevPath\n\u003c/h3\u003e\n\n\u003cp\u003eWeb Dev Path is an open-source initiative to help early career developers gain experience working in a team. Through this beginner-friendly community, I learned how to contribute to open-source projects. It\'s kind of hard to find one open-source project to get involved more with. I feel this community was a good fit for me because of the community size.\u003c/p\u003e\n\n\u003cp\u003e\u003ca href="https://www.webdevpath.co/"\u003eWebDevPath Link\u003c/a\u003e \u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="the-collab-lab" href="#the-collab-lab"\u003e\n  \u003c/a\u003e\n  The Collab Lab\n\u003c/h3\u003e\n\n\u003cp\u003eThe Collab Lab teaches you how to collaborate with other developers. Yes, I learned a lot about this part. Throughout the program, you gain practical experience in how to work in a team like documenting pull requests, reviewing others\' pull requests, asking mentors for help, and so on. \u003c/p\u003e\n\n\u003cp\u003eThey ask you to submit your project and essays about why you want to join the program. I feel they spend time checking all the applications. I recommend you prepare your application well if you like to join the program. \u003c/p\u003e\n\n\u003cp\u003e\u003ca href="https://the-collab-lab.codes/"\u003eTCL Link\u003c/a\u003e\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="chingu" href="#chingu"\u003e\n  \u003c/a\u003e\n  Chingu\n\u003c/h3\u003e\n\n\u003cp\u003eChingu is the platform where early-career developers create projects as a team. You just need to submit your project and they will assess your skill level. You can join them even if you just know HTML and CSS.\u003c/p\u003e\n\n\u003cp\u003eI joined one of Level 3 projects after submitting my project(Mastlog) and now work for a Moonshot project named TeamForward as a backend developer. \u003c/p\u003e\n\n\u003cp\u003e\u003ca href="https://www.chingu.io/"\u003eChingu Link\u003c/a\u003e\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="comit" href="#comit"\u003e\n  \u003c/a\u003e\n  ComIT\n\u003c/h3\u003e\n\n\u003cp\u003eComIT is a charitable organization to provides free BootCamp courses for people in Canada. I took a Node.js course. Even though I knew about Node.js, it was great to ask the experienced instructor questions and listen to his explanations. It made my understanding of backend technology deeper. I made \u003ca href="https://github.com/Satoshi-Sh/team-todo"\u003eteam-todo\u003c/a\u003e as a final project at the end of the course.\u003c/p\u003e\n\n\u003cp\u003eAfter graduating from the course, I also helped with their React course as a teaching assistant. Helping people to learn programming was also a good experience for me. \u003c/p\u003e\n\n\u003cp\u003e\u003ca href="https://www.comit.org/students"\u003eComIT Link\u003c/a\u003e\u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="contributing-to-open-source-projects-and-volunteering" href="#contributing-to-open-source-projects-and-volunteering"\u003e\n  \u003c/a\u003e\n  Contributing to Open Source Projects and Volunteering\n\u003c/h3\u003e\n\n\u003cp\u003eThese activities gave me opportunities to work with more experienced developers. I will write about my volunteering experience in another post once the project is deployed.\u003c/p\u003e\n\n\u003ch1\u003e\n  \u003ca name="now-and-onward" href="#now-and-onward"\u003e\n  \u003c/a\u003e\n  Now and Onward\n\u003c/h1\u003e\n\n\u003cp\u003eTo be a professional developer has been one of my life goals since I started learning programming. I have been struggling to find my first tech job at the moment. It might be because of the bad job market, or my lack of formal education in Canada. I will keep improving my skills, and continue looking for any opportunities to achieve my goal. \u003c/p\u003e\n\n\u003ch1\u003e\n  \u003ca name="conclusion" href="#conclusion"\u003e\n  \u003c/a\u003e\n  Conclusion\n\u003c/h1\u003e\n\n\u003cp\u003eIn this blog, I break down my learning journey into three phases(Online Learning, Solo Projects, and Team Projects). \u003cbr\u003e\nI also shared some of the resources I used during my programming learning journey. I hope someone finds them helpful. \u003c/p\u003e\n\n\u003ch3\u003e\n  \u003ca name="credit" href="#credit"\u003e\n  \u003c/a\u003e\n  Credit\n\u003c/h3\u003e\n\n\u003cp\u003e\u003ca href="https://commons.wikimedia.org/wiki/File:Classic_Learning_(15903347764).jpg"\u003eWiki Media Commons\u003c/a\u003e\u003c/p\u003e\n\n',
  body_markdown:
    "#Why I Started Learning Programming \n I was a bit late to get interested in programming, but my last work experience made me decide to learn programming.  Previously I worked at a food delivery company, and I was a menu care programmer who took care of building menus for restaurants with the company’s menu builder software. Sometimes I needed to do data entry for liquor vendors. They had more than 500 items. I needed to put more information on the menu like volume, quantities, ABV, bottle deposit, and so on from Excel sheets. It required a lot of energy. At some point, I thought these manual tasks might be scripted by programming. It made me interested in programming, and I started learning programming with online resources. \n\n#Phase I: Online Learning\nThere are so many free online learning resources nowadays. I like to pick some of my favorites here.\n \n###  Havard University CS50 Series\nThe quality of course always surprises me. Many people say that they cannot believe those courses are free. I cannot agree enough with that. I took CS50x,CS50P,CS50W, and CS50AI. It might be challenging to start with CS50x as a beginner, but the instructor is enthusiastic and engaging and their coding challenges are unique and interesting. It's always good to know the fundamental concept of computer science to be a better developer. \n\nSometimes they ask you to make a video to show your project, I feel it's handy to showcase your projects if you are not planning to deploy them somewhere.\n\n[CS50 Link](https://www.edx.org/cs50)\n\n###  The Odin Project\nThe Odin Project equips you well to be a full-stack developer. You can choose JavaScript or Ruby on Rails after completing the foundation chapter. I chose the JavaScript path and learned a lot about React.js and Node.js. To follow this course, you need to read a lot. Sometimes it feels dry but reading is an essential skill for developers. Throughout the course, you need to make many projects. I recommend you check this out if you are interested in web development.\n  \nThey ask you to use Linux for following the course. It made me become a Linux user from a Windows user.\n\n[TOP Link](https://www.theodinproject.com/)\n\n#Phase II: Solo Projects\nExperienced developers always advise me to create my own projects for myself, friends, or family to get better as a developer. At this point, I have enough skills to create full-stack applications on my own. I started making my projects. I can list some of them here. \n### FindIT\nHelp users to find movies to watch. [Link](https://github.com/Satoshi-Sh/findit2)\n### Mastlog\nArchiving my Mastodon toots. Users can look up toots by date, keyword, mention, and hashtag. [Link](https://github.com/Satoshi-Sh/mastlog)\n### Menu Creator\nUsers can make an online menu and also create a menu with a JSON or CSV file. [Link](https://github.com/Satoshi-Sh/menu-creator)\n\nFortunately, I got a mentor on Mastodon around this time. I always ask him first about web development. He also recommended that I  use Digital Ocean Droplet to deploy some of my applications. I learned a lot that it's hard to configure a server to deploy applications.\n\n#Phase III: Team Projects\nTo be a professional developer, you need to collaborate with other developers. I needed to know more about how to use GitHub, how to communicate with others effectively, and so on. I want to share some communities and resources that helped me improve in those fields.\n\n### Virtual Coffee\nVirtual Coffee is an online developer community. I mainly use this community to socialize with fellow developers on Zoom working place. You can use it here to ask for advice from experienced developers as well. Throughout this community, I learned lots of resources and events like WebDevPath, The Collab Lab, Chingu, Hacktober Fest, and so on. \n\n[VC Link](https://virtualcoffee.io/)\n### WebDevPath\nWeb Dev Path is an open-source initiative to help early career developers gain experience working in a team. Through this beginner-friendly community, I learned how to contribute to open-source projects. It's kind of hard to find one open-source project to get involved more with. I feel this community was a good fit for me because of the community size.\n\n[WebDevPath Link](https://www.webdevpath.co/) \n\n### The Collab Lab\nThe Collab Lab teaches you how to collaborate with other developers. Yes, I learned a lot about this part. Throughout the program, you gain practical experience in how to work in a team like documenting pull requests, reviewing others' pull requests, asking mentors for help, and so on. \n\nThey ask you to submit your project and essays about why you want to join the program. I feel they spend time checking all the applications. I recommend you prepare your application well if you like to join the program. \n\n[TCL Link](https://the-collab-lab.codes/)\n \n###Chingu \nChingu is the platform where early-career developers create projects as a team. You just need to submit your project and they will assess your skill level. You can join them even if you just know HTML and CSS.\n\nI joined one of Level 3 projects after submitting my project(Mastlog) and now work for a Moonshot project named TeamForward as a backend developer. \n\n[Chingu Link](https://www.chingu.io/)\n\n###ComIT\nComIT is a charitable organization to provides free BootCamp courses for people in Canada. I took a Node.js course. Even though I knew about Node.js, it was great to ask the experienced instructor questions and listen to his explanations. It made my understanding of backend technology deeper. I made [team-todo](https://github.com/Satoshi-Sh/team-todo) as a final project at the end of the course.\n\nAfter graduating from the course, I also helped with their React course as a teaching assistant. Helping people to learn programming was also a good experience for me. \n    \n[ComIT Link](https://www.comit.org/students)\n\n### Contributing to Open Source Projects and Volunteering\nThese activities gave me opportunities to work with more experienced developers. I will write about my volunteering experience in another post once the project is deployed.\n\n#Now and Onward\nTo be a professional developer has been one of my life goals since I started learning programming. I have been struggling to find my first tech job at the moment. It might be because of the bad job market, or my lack of formal education in Canada. I will keep improving my skills, and continue looking for any opportunities to achieve my goal. \n\n#Conclusion\n\nIn this blog, I break down my learning journey into three phases(Online Learning, Solo Projects, and Team Projects). \nI also shared some of the resources I used during my programming learning journey. I hope someone finds them helpful. \n\n###Credit\n[Wiki Media Commons](https://commons.wikimedia.org/wiki/File:Classic_Learning_(15903347764).jpg)\n\n\n",
  user: {
    name: 'Satoshi S.',
    username: 'satoshi-sh',
    twitter_username: 'sato1108ss',
    github_username: 'Satoshi-Sh',
    user_id: 1212360,
    website_url: 'https://satoshis-developer.xyz/portfolio/',
    profile_image:
      'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1212360%2F53473333-e3e2-4413-b4eb-7060e6ce3d49.jpeg',
    profile_image_90:
      'https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1212360%2F53473333-e3e2-4413-b4eb-7060e6ce3d49.jpeg',
  },
};

// To get user summary
// Response on https://dev.to/api/users/1212360

const user = {
  type_of: 'user',
  id: 1212360,
  username: 'satoshi-sh',
  name: 'Satoshi S.',
  twitter_username: 'sato1108ss',
  github_username: 'Satoshi-Sh',
  summary:
    'Satoshi is a full-stack developer, who is looking for opportunities to learn something new. He enjoys collaborating with other developers. Passionate for Open Source projects.',
  location: 'Canada',
  website_url: 'https://satoshis-developer.xyz/portfolio/',
  joined_at: 'Nov 17, 2023',
  profile_image:
    'https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1212360%2F53473333-e3e2-4413-b4eb-7060e6ce3d49.jpeg',
};
