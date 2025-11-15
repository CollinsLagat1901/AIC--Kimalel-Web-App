
import { type LucideIcon, Users, Music, HeartHandshake, Baby, Globe, BookOpen, Handshake, HandHeart, Sparkles, TrendingUp } from "lucide-react";

export const featuredSermon = {
  title: "The Power of Forgiveness",
  speaker: "Rev. John Doe",
  date: "October 29, 2023",
  summary: "Explore the transformative power of forgiveness as taught in the scriptures and learn how to apply it in your daily life for spiritual freedom and healing.",
  transcript: `
    "Good morning, beloved. Today, we gather to reflect on a cornerstone of our faith, a principle so profound yet often so challenging: the power of forgiveness.
    In the book of Matthew, chapter 6, verse 14, Jesus tells us, 'For if you forgive other people when they sin against you, your heavenly Father will also forgive you.' This is not merely a suggestion; it is a divine instruction that holds the key to our spiritual well-being.
    What does it truly mean to forgive? It is not about condoning the wrong that was done to us. It is not about forgetting the pain. Forgiveness is an act of the will, a choice to release the burden of bitterness and resentment from our hearts. It is choosing to hand over justice to God, who is the only perfect judge.
    Think about a time someone wronged you. The anger, the hurt... it can feel like a heavy chain. Holding onto that unforgiveness doesn't punish the other person; it keeps us imprisoned. Forgiveness is the key that unlocks our own chains.
    Peter asked Jesus, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Jesus answered, 'I tell you, not seven times, but seventy-seven times.' This illustrates that forgiveness is not a one-time event but a continuous attitude, a way of life.
    When we forgive, we mirror the grace that has been shown to us. Colossians 3:13 says, 'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' We have been forgiven an immeasurable debt by our Father in heaven through the sacrifice of His Son. How can we then withhold forgiveness from others for the comparatively small offenses against us?
    The journey of forgiveness begins with a prayer. Ask God to soften your heart. Ask for the strength to let go. It may not be easy, and it may not happen overnight, but with each step, you will find a new sense of peace and freedom. You will find healing. You will find yourself drawn closer to the heart of God.
    Let us pray. Heavenly Father, teach us to forgive as you have forgiven us. Release us from the chains of bitterness and fill our hearts with Your peace and Your love. Amen."
  `,
  imageId: "sermon-thumbnail",
};

export const upcomingEvents = [
  {
    date: new Date(2025, 10, 15),
    title: "Send-Off for Ryan Choge",
    description: "Join us at the Choge's family home in Elgon View to celebrate their son, Ryan, who received a visa to study for his Master's in Data Science in Sydney, Australia.",
    imageId: "ryan-choge",
    organizer: "Choge Family"
  },
  {
      date: new Date(2025, 11, 20),
      title: "Pastor's Visit Fundraiser",
      description: "A special fundraiser to support our visiting pastor's mission and ministry. Your contribution makes a difference.",
      imageId: "support-hero",
      organizer: "Church Leadership"
  },
  {
      date: new Date(2026, 0, 10),
      title: "Annual Youth Camp",
      description: "An exciting week of fun, fellowship, and spiritual growth for our youth. Sign up now!",
      imageId: "ministry-youth",
      organizer: "Youth Fellowship"
  },
  {
      date: new Date(2026, 2, 5),
      title: "Women's Conference 2026",
      description: "Empowering women to live out their faith boldly. Guest speakers, worship, and breakout sessions.",
      imageId: "ministry-women",
      organizer: "Women's Fellowship"
  },
  {
      date: new Date(2026, 4, 1),
      title: "Community Service Day",
      description: "Let's show God's love to our community through acts of service. All are welcome to join.",
      imageId: "ministry-outreach",
      organizer: "Outreach Team"
  },
];

type Ministry = {
    name: string;
    description: string;
    icon: LucideIcon;
    imageId: string;
    href: string;
};

export const ministries: Ministry[] = [
    {
        name: "Men's Fellowship",
        description: "Supporting and equipping men to be Christ-centered leaders in the home, church, and community.",
        icon: Users,
        imageId: "ministry-men",
        href: "/ministries/mens-fellowship",
    },
    {
        name: "Women's Fellowship",
        description: "Empowering women through prayer, fellowship, and service.",
        icon: HeartHandshake,
        imageId: "ministry-women",
        href: "/ministries/womens-fellowship",
    },
    {
        name: "Youth Fellowship",
        description: "Building a vibrant generation of young believers rooted in faith and service.",
        icon: Users,
        imageId: "ministry-youth",
        href: "/ministries/youth-fellowship",
    },
    {
        name: "Choir & Worship Team",
        description: "Leading the congregation in praise and worship through music and song.",
        icon: Music,
        imageId: "ministry-choir",
        href: "/ministries/choir",
    },
    {
        name: "Children's Ministry",
        description: "Teaching God’s Word to children in an engaging, fun, and age-appropriate way.",
        icon: Baby,
        imageId: "ministry-children",
        href: "/ministries/sunday-school",
    },
    {
        name: "Widows Ministry",
        description: "Providing spiritual, emotional, and practical support to widows in our church and community.",
        icon: HandHeart,
        imageId: "widows-hero",
        href: "/ministries/widows",
    },
];


export const testimonies = [
    {
      name: "Lilian Rop",
      quote: "This church has been my rock. The community here is a true family, and I've grown so much in my faith.",
      imageId: "testimony-1",
    },
    {
      name: "Brian Choge",
      quote: "Serving as a Youth Leader at AIC Kimalel was a profound experience that shaped me in countless ways before I relocated to Australia. The church provided a nurturing environment for leadership and spiritual growth.",
      imageId: "testimony-2",
    },
    {
      name: "Tabitha Jepchumba",
      quote: "The youth ministry has been amazing for my kids. They love coming to church and are building a strong foundation in Christ.",
      imageId: "testimony-3",
    },
];

export const leadership = [
    {
        name: "Rev. Dr. Elias Ng'etich",
        role: "Leader",
        bio: "Rev. Dr. Elias Ng'etich serves as the senior leader of AIC Kimalel Saramek Church, guiding the congregation in faith and spiritual growth.",
        imageId: "leader-1",
    },
    {
        name: "Pst. Maureen Kosgei",
        role: "Pastor",
        bio: "Passionate about discipleship and community, Pastor Maureen leads ministries with a focus on nurturing faith and empowering families.",
        imageId: "leader-2",
        href: "#",
    },
    {
        name: "Pst. Jophet Lagat",
        role: "Pastor",
        bio: "Pastor Jophet Lagat is dedicated to teaching God’s Word and supporting the church family in living Christ-centered lives.",
        imageId: "leader-3",
    },
    {
        name: "Ev. Bureti Philemon",
        role: "Evangelist",
        bio: "Evangelist Bureti is committed to spreading the Gospel and leading our outreach efforts in the community.",
        imageId: "leader-4",
    }
];

export const coreValues = [
    {
        title: "Faith",
        description: "Rooted in God’s Word.",
        icon: BookOpen,
    },
    {
        title: "Community",
        description: "Building relationships through love.",
        icon: Handshake,
    },
    {
        title: "Service",
        description: "Giving back to society.",
        icon: HandHeart,
    },
    {
        title: "Integrity",
        description: "Living by Biblical principles.",
        icon: Sparkles,
    },
    {
        title: "Growth",
        description: "Developing spiritually and holistically.",
        icon: TrendingUp,
    },
];

export const musicVideos = [
  {
    title: "YERUSALEMU",
    youtubeUrl: "https://www.youtube.com/watch?v=4Yxbewa4mIE&list=RD4Yxbewa4mIE&start_radio=1",
    imageId: "video-thumb-1"
  },
  {
    title: "MIMI NI MZABIBU",
    youtubeUrl: "https://www.youtube.com/watch?v=3I5aE24HWQE&list=RD4Yxbewa4mIE&index=2",
    imageId: "video-thumb-2"
  },
  {
    title: "FURAHINI",
    youtubeUrl: "https://www.youtube.com/watch?v=xFuJGtGQJTg&list=RD4Yxbewa4mIE&index=3",
    imageId: "video-thumb-3"
  },
  {
    title: "HEKIMA",
    youtubeUrl: "https://www.youtube.com/watch?v=Atp_GGWSDgk&list=RD4Yxbewa4mIE&index=4",
    imageId: "video-thumb-4"
  },
  {
    title: "NDOA",
    youtubeUrl: "https://www.youtube.com/watch?v=9O9Fn3jncog&list=RD4Yxbewa4mIE&index=5",
    imageId: "video-thumb-5"
  },
  {
    title: "TUJITOLEE",
    youtubeUrl: "https://www.youtube.com/watch?v=hQK_VD-ntng&list=RD4Yxbewa4mIE&index=6",
    imageId: "video-thumb-6"
  }
];
